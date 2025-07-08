export const ChataignesParamTypes = [
    "Integer",
    "String",
    "Point2D",
    "Point3D",
    "Enum",
    "Float",
    "Boolean",
    "Color",
] as const;

export type ChataigneParamType = (typeof ChataignesParamTypes)[number];


export const ChataigneModuleTypes = [
    "OS",
    "OSC",
    "MIDI",
    "Http",
    "Empty"
] as const;

export type ChataigneModuleType = (typeof ChataigneModuleTypes)[number];

export type ChataigneCustomVariableType = `${ChataigneParamType} Parameter`;


export function niceNameToAddress(name: string) {

    const pascalCase = name
        .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
        .replace(/-/g, "_")
        .replace(/[^a-zA-Z0-9\_]/g, "")

    const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);

    return camelCase;
}

export type NoisetteFile = {
    metaData: NoisetteMetadata;
    projectSettings: ChataigneProjectSettings;
    dashboardManager: ChataigneDashboardManager;
    parrots: Parrots;
    layout: Layout;
    modules: ChataigneModules;
    customVariables: ChataigneCustomVariables;
    states: ChataigneStates;
    sequences: Sequences;
    routers: ChataigneRouters;
}

export type NoisetteMetadata = {
    version: string;
    versionNumber: number;
}

export type ChataigneProjectSettings = {
    containers: {
        dashboardSettings: {
            parameters: ChataigneParameter[];
        };
        customDefinitions: Record<string, any>;
    };
}

export type ChataigneDashboardManager = {
    parameters: ChataigneParameter[];
    items: ChataigneDashboard[];
    viewOffset: ChataigneVector2;
    viewZoom: number;
}

export type ChataigneDashboard = {
    niceName: string;
    type: "BaseItem";
    itemManager: {
        parameters: ChataigneParameter[];
        items: ChataigneDashboardItem[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    editing?: boolean;
}

export type ChataigneDashboardItem = {
    niceName: string;
    hideInEditor: boolean;
    type: "DashboardParameterItem"|"DashboardCommentItem";
    parameters?: ChataigneParameter[];
    ghostAddress?: string;
    controllable?: string;
}

export type Parrots = {
    viewOffset: ChataigneVector2;
    viewZoom: number;
}

export type Layout = {
    mainLayout: LayoutShifter;
    windows: any;
}

export type LayoutShifter = {
    type: number;
    width: number;
    height: number;
    direction: number;
    shifters: LayoutShifter[];
    currentContent?: string;
    tabs?: LayoutTab[];
}

export type LayoutTab = {
    name: string;
}

export type ChataigneModules = {
    items: ChataigneModule[];
    viewOffset: ChataigneVector2;
    viewZoom: number;
}

export type ChataigneModule = {
    niceName: string;
    type: ChataigneModuleType;
    scripts?: {
        items: Script[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    params?: {
        parameters: ChataigneParameter[];
        containers: Record<string, any>;
    };
    templates?: {
        hideInEditor?: boolean;
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    values?: {
        parameters?: ChataigneParameter[];
        containers?: Record<string, any>;
        hideInEditor?: boolean;
    };
    parameters?: ChataigneParameter[];
}

export type Script = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: string;
    scriptParams?: {
        hideInEditor: boolean;
    };
}

export type ChataigneCustomVariables = {
    items: ChataigneCustomVariableGroup[];
    viewOffset: ChataigneVector2;
    viewZoom: number;
}

export type ChataigneCustomVariableGroup = {
    niceName: string;
    type: "CVGroup";
    params: Record<string, any>;
    variables: {
        items?: ChataigneCustomVariable[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    presets: {
        items?: MorphTarget[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
}

export type ChataigneCustomVariable = {
    parameters: ChataigneParameter[];
    niceName: string;
    editorIsCollapsed: boolean;
    type: ChataigneCustomVariableType;
}

export type MorphTarget = {
    parameters: ChataigneParameter[];
    niceName: string;
    editorIsCollapsed: boolean;
    type: string;
    values: {
        containers: Record<string, {
            parameters: ChataigneParameter[];
            owned: boolean;
            niceName: string;
        }>;
    };
}

export type ChataigneStates = {
    parameters: ChataigneParameter[];
    items: ChataigneState[];
    viewOffset: ChataigneVector2;
    viewZoom: number;
    transitions: {
        hideInEditor: boolean;
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    comments: {
        hideInEditor: boolean;
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
}

export type ChataigneState = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: "State";
    processors: {
        items?: Processor[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
}

export type Processor = {
    niceName: string;
    editorIsCollapsed: boolean;
    type: "Action"|"Mapping"|"Multiplex";
    conditions: {
        items: Condition[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
        parameters?: ChataigneParameter[];
    };
    consequences: {
        parameters: ChataigneParameter[];
        items: Consequence[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    consequencesOff: {
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
}

export type Condition = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: string;
    activationType?: number;
    comparator?: {
        parameters: ChataigneParameter[];
        hideInEditor: boolean;
    };
}

export type Consequence = {
    niceName: string;
    type: string;
    commandModule: string;
    commandPath: string;
    commandType: string;
    command: {
        parameters: ChataigneParameter[];
        paramLinks: Record<string, any>;
        customValues?: {
            items: CustomValue[];
            viewOffset: ChataigneVector2;
            viewZoom: number;
        };
        argManager?: {
            viewOffset: ChataigneVector2;
            viewZoom: number;
        };
  };
}

export type CustomValue = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: ChataigneParamType;
    param: ChataigneParameter;
}

export type Sequences = {
    items: ChataigneSequence[];
    viewOffset: ChataigneVector2;
    viewZoom: number;
}

export type ChataigneSequence = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: "Sequence";
    layers: {
        hideInEditor: boolean;
        items: ChataigneSequenceLayer[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
    cues: {
        hideInEditor: boolean;
        viewOffset: ChataigneVector2;
        viewZoom: number;
        editing?: boolean;
    };
}

export type ChataigneSequenceLayer = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: "BaseItem";
    triggers: {
        hideInEditor: boolean;
        items: ChataigneSequenceTrigger[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
}

export type ChataigneSequenceTrigger = {
    parameters: ChataigneParameter[];
    niceName: string;
    type: string;
    consequences: {
        parameters: ChataigneParameter[];
        items: Consequence[];
        viewOffset: ChataigneVector2;
        viewZoom: number;
    };
}

export type ChataigneRouters = {
    viewOffset: ChataigneVector2;
    viewZoom: number;
}

// Common types
export type ChataigneParameter = {
    value: boolean|number|string|ChataigneVector2|ChataigneVector3;
    controlAddress: string;
    enabled?: boolean;
    hexMode?: boolean;
    type?: ChataigneParamType;
    niceName?: string;
    customizable?: boolean;
    removable?: boolean;
    description?: string;
    hideInEditor?: boolean;
    feedbackOnly?: boolean;
    minValue?: number;
    maxValue?: number;
    default?: any;
    controlMode?: number;
    reference?: {
        value: string;
        controlAddress: string;
    };
    enumOptions?: Record<string, number>;
    style?: string;
    readOnly?: boolean;
    textSize?: number;
    color?: ChataigneVector4;
    operator?: string;
    alwaysTrigger?: boolean;
    comparisonFunction?: string;
    stagger?: number;
    cancelDelaysOnTrigger?: boolean;
    time?: number;
    flagY?: number;
    message?: string;
    position?: ChataigneVector2;
    command?: string;
    address?: string;
    callback?: string;
    filePath?: string;
    protocol?: string;
    autoAdd?: boolean;
    messageStructure?: string;
    customSeparator?: string;
    firstValueIsTheName?: boolean;
    localPort?: number;
    baseAddress?: string;
    remoteHost?: string;
    mode?: string;
    backgroundImage?: string;
    canvasSize?: ChataigneVector2;
    snapGridSize?: number;
    snapGridMode?: boolean;
    showSnapGrid?: boolean;
    active?: boolean;
    viewUIPosition?: ChataigneVector2;
    viewUISize?: ChataigneVector2;
    target?: string;
    showLabel?: boolean;
    toggleImage?: string;
    customText?: string;
    customImage?: string;
    text?: string;
    ltcSyncModule?: string;
    listSize?: number;
}

export type ChataigneVector2 = [number, number];
export type ChataigneVector3 = [number, number, number];
export type ChataigneVector4 = [number, number, number, number];