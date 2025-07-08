import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { ChataigneCustomVariableGroup, ChataigneDashboard, ChataigneModule, ChataigneModuleTypes, ChataigneSequence, ChataignesParamTypes, ChataigneState, NoisetteFile } from "../../../../lib/chataigne";
import { removeProperties } from "../../../../lib/utils";

const ChataigneParamValueSchema = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.number()).length(2),
    z.array(z.number()).length(3),
])

type ChataigneParamValue = z.infer<typeof ChataigneParamValueSchema>;

export const parseNoisetteInputSchema = z.object({
    filePath: z.string(),
    includeModules: z.boolean().optional().default(true),
    includeSequences: z.boolean().optional().default(true),
    includeDashboard: z.boolean().optional().default(true),
    includeStates: z.boolean().optional().default(true),
    includeCustomVariables: z.boolean().optional().default(true),
});

export type ParseNoisetteInput = z.infer<typeof parseNoisetteInputSchema>;

const parseNoisetteParameterSchema = z.object({
    name: z.string(),
    type: z.enum(ChataignesParamTypes).optional(),
    describeData: z.any(),
    value: ChataigneParamValueSchema,
})

type ParseNoisetteParameter = z.infer<typeof parseNoisetteParameterSchema>;

const parseNoisetteModuleSchema = z.object({
    name: z.string(),
    describeData: z.any(),
    type: z.enum(ChataigneModuleTypes),
    parameters: z.array(parseNoisetteParameterSchema),
});

type ParseNoisetteModule = z.infer<typeof parseNoisetteModuleSchema>;

const parseNoisetteSequenceSchema = z.object({
    name: z.string(),
    type: z.literal("Sequence"),
    describeData: z.any(),
});

type ParseNoisetteSequence = z.infer<typeof parseNoisetteSequenceSchema>;


const parseNoisetteDashboardItemSchema = z.object({
    name: z.string(),
    type: z.literal("DashboardParameterItem"),
    address: z.string().optional(),
    describeData: z.any(),
})

type ParseNoisetteDashboardItem = z.infer<typeof parseNoisetteDashboardItemSchema>;

const parseNoisetteDashboardSchema = z.object({
    name: z.string(),
    items: z.array(parseNoisetteDashboardItemSchema),
    describeData: z.any(),
})

type ParseNoisetteDashboard = z.infer<typeof parseNoisetteDashboardSchema>;


const parseNoisetteActionConditionSchema = z.object({
    name: z.string(),
    describeData: z.any(),
})

const parseNoisetteActionConsequenceSchema = z.object({
    name: z.string(),
    describeData: z.any(),
})


type ParseNoisetteActionCondition = z.infer<typeof parseNoisetteActionConditionSchema>;
type ParseNoisetteActionConsequence = z.infer<typeof parseNoisetteActionConsequenceSchema>;


const parseNoisetteActionSchema = z.object({
    name: z.string(),
    type: z.literal("Action"),
    describeData: z.any(),
    parameters: z.array(parseNoisetteParameterSchema),
})

type ParseNoisetteAction = z.infer<typeof parseNoisetteActionSchema>;

const parseNoisetteStateSchema = z.object({
    name: z.string(),
    type: z.literal("State"),
    describeData: z.any(),
    actions: z.array(parseNoisetteActionSchema),
})

type ParseNoisetteState = z.infer<typeof parseNoisetteStateSchema>;


const parseNoisetteCustomVariableSchema = z.object({
    name: z.string(),
    describeData: z.any(),
    value: ChataigneParamValueSchema,
})

type ParseNoisetteCustomVariable = z.infer<typeof parseNoisetteCustomVariableSchema>;


const parseNoisetteCustomVariableGroupSchema = z.object({
    name: z.string(),
    type: z.literal("CVGroup"),
    describeData: z.any(),
    variables: z.array(parseNoisetteCustomVariableSchema),
})

type ParseNoisetteCustomVariableGroup = z.infer<typeof parseNoisetteCustomVariableGroupSchema>;


export const parsedNoisetteSchema = z.object({
    modules: z.array(parseNoisetteModuleSchema).optional(),
    sequences: z.array(parseNoisetteSequenceSchema).optional(),
    dashboards: z.array(parseNoisetteDashboardSchema).optional(),
    states: z.array(parseNoisetteStateSchema).optional(),
    customVariables: z.array(parseNoisetteCustomVariableGroupSchema).optional(),
});

export type ParsedNoisetteOutput = z.infer<typeof parsedNoisetteSchema>;

const propertiesToRemove = [
    "viewOffset",
    "viewZoom",
    "editorIsCollapsed",
    "customizable",
    "removable",
    "feedbackOnly"
];

export const parseNoisetteFileStep = createStep({
    id: 'parse-noisette-file',
    description: 'Parse the content of the noisette file',
    inputSchema: parseNoisetteInputSchema,
    outputSchema: parsedNoisetteSchema,
    execute: async ({ inputData }) => {

        const {
            filePath,
            includeModules,
            includeSequences,
            includeDashboard,
            includeStates,
            includeCustomVariables
        } = inputData;

        const fs = require('fs').promises;

        try {
            const jsonContent = await fs.readFile(filePath, 'utf8');

            const noisetteFile = JSON.parse(jsonContent) as NoisetteFile;

            const modules = includeModules ?
                noisetteFile.modules.items.map(parseModule)
                : undefined;

            const sequences = includeSequences ?
                noisetteFile.sequences.items.map(parseSequence)
                : undefined;
            const dashboards = includeDashboard ?
                noisetteFile.dashboardManager.items.map(parseDashboard)
                : undefined;
            const states = includeStates ?
                noisetteFile.states.items.map(parseState)
                : undefined;

            const customVariables = includeCustomVariables ?
                noisetteFile.customVariables.items.map(parseCustomVariableGroup)
                : undefined;

            const result = {
                modules,
                sequences,
                dashboards,
                states,
                customVariables
            } satisfies ParsedNoisetteOutput;


            return removeProperties(result, propertiesToRemove);
        } catch (error) {
            throw new Error(`Failed to read noisette file: ${error.message}`);
        }

    },
})




function parseModule(module: ChataigneModule): ParseNoisetteModule {
    const {
        niceName: name,
        type,
        params,
        parameters,
        ...rest
    } = module;


    const inputParameters = [
        ...(parameters || []),
        ...(params?.parameters || [])
    ];


    const outputParameters: ParseNoisetteParameter[] = inputParameters.map((parameter) => {

        const {
            niceName,
            value,
            type,
            ...rest
        } = parameter

        return {
            name: niceName || "",
            type: type,
            value: value,
            describeData: rest
        } satisfies ParseNoisetteParameter;
    })

    return {
        name,
        type,
        parameters: outputParameters,
        describeData: rest
    }
}

function parseSequence(sequence: ChataigneSequence): ParseNoisetteSequence {
    const {
        niceName: name,
        type,
        parameters,
        ...rest
    } = sequence;

    return {
        name,
        type,
        describeData: rest
    }
}

function parseDashboard(dashboard: ChataigneDashboard): ParseNoisetteDashboard {
    const {
        niceName,
        type,
        itemManager: {
            items
        },
        ...rest
    } = dashboard;

    const outputItems: ParseNoisetteDashboardItem[] = items
        .filter((item) => item.type === "DashboardParameterItem")
        .map((item) => {
            const {
                niceName: name,
                parameters,
                ...rest
            } = item;

            return {
                name,
                type: "DashboardParameterItem",
                address: parameters?.[0]?.controlAddress,
                describeData: rest
            } satisfies ParseNoisetteDashboardItem;
        })

    return {
        name: niceName || "",
        items: outputItems,
        describeData: rest
    }
}

function parseState(state: ChataigneState): ParseNoisetteState {
    const {
        niceName: name,
        type,
        processors,
        ...rest
    } = state;

    const processorActions = processors.items?.filter((processor) => processor.type === "Action")||[];
    
    const actions: ParseNoisetteAction[] = processorActions.map((processor) => {
        const {
            niceName: name,
            type,
            ...rest
        } = processor;

        return {
            name,
            type: "Action",
            parameters: [],
            describeData: rest
        }
    });

    return {
        name,
        type,
        actions,
        describeData: rest
    }
}

function parseCustomVariableGroup(customVariable: ChataigneCustomVariableGroup): ParseNoisetteCustomVariableGroup {
    const {
        niceName: name,
        type,
        variables: {
            items: chataigneVariables
        },
        ...rest
    } = customVariable;

    const variables: ParseNoisetteCustomVariable[] = chataigneVariables?.map((variable) => {
        const {
            niceName: varName,
            type
        } = variable;
        
        const {
            niceName: name,
            value,
            ...rest
        } = variable.parameters[0];

        return {
            name: varName || "",
            value,
            describeData: {
                ...rest,
                type
            }
        } satisfies ParseNoisetteCustomVariable;
    }) || [];

    return {
        name,
        type,
        variables,
        describeData: rest
    }
}


