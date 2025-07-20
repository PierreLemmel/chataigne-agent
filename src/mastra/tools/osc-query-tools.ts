import { createTool } from "@mastra/core/tools";
import { DiscoveredService, OSCQueryDiscovery } from "oscquery";
import { SerializedNode, SerializedRange } from "oscquery/dist/lib/serialized_node";
import z from "zod";



const discovery = new OSCQueryDiscovery()

discovery.start()

discovery.on("up", (service: DiscoveredService) => {
    console.log(`OSCQuery Service '${service.hostInfo?.name}' (${service.address}:${service.port}) Discovered`)
});

discovery.on("down", (service: DiscoveredService) => {
    console.log(`OSCQuery Service '${service.hostInfo?.name}' (${service.address}:${service.port}) Lost`)
});


const chataigneProjectSummarySchema = z.object({
    modules: z.array(z.object({
        name: z.string(),
        type: z.string(),
        fullPath: z.string(),
    })),
    states: z.array(z.object({
        name: z.string(),
        fullPath: z.string(),
    })),
    variableGroups: z.array(z.object({
        name: z.string(),
        fullPath: z.string(),
        elements: z.array(z.object({
            fullPath: z.string(),
            name: z.string(),
            type: z.string(),
            value: z.any(),
            info: z.object({
                min: z.number().optional(),
                max: z.number().optional(),
                values: z.array(z.string()).optional(),
            }).optional(),
        })),
    }))
})

type ChataigneProjectSummary = z.infer<typeof chataigneProjectSummarySchema>;

const discoverOscQueryOutputSchema = z.array(
    z.object({
        name: z.string(),
        address: z.string(),
        port: z.number().int(),
        oscPort: z.number().int().optional(),
        oscTransport: z.enum(["TCP", "UDP"]).optional(),
        nodes: z.array(chataigneProjectSummarySchema)
    })
)


export const discoverOscQueryServicesTool = createTool({
    id: "discover-services-tool",
    description: "Discover OSC Query services on the network",
    inputSchema: z.object({}),
    outputSchema: discoverOscQueryOutputSchema,
    execute: async ({ context }) => {
        const services = await Promise.all(discovery.getServices().map(async (service) => {

            const {
                address,
                port,
                hostInfo: {
                    name = "",
                    oscPort,
                    oscTransport,
                },
                nodes,
            } = service


            const response = await fetch(`http://${address}:${port}/`)
            const rootNode = await response.json()

            const nodesSummary = getNodeSummary(rootNode)

            return ({
                address,
                port,
                name,
                oscPort,
                oscTransport,
                nodes: nodesSummary,
            } satisfies typeof services[number]);
        }))

        return services
    }
})


const getNodeSummary = (rootNode: SerializedNode): ChataigneProjectSummary => {


    const modules: ChataigneProjectSummary["modules"] = Object.entries(rootNode.CONTENTS?.modules?.CONTENTS ?? {}).map(([name, module]) => {
        return {
            name,
            fullPath: getNodeFullPath(module),
            type: getNodeDescription(module),
        }
    });

    const states: ChataigneProjectSummary["states"] = Object.entries(rootNode.CONTENTS?.states?.CONTENTS ?? {}).filter(([name, state]) => {
        return getNodeType(state) === "State";
    }).map(([name, state]) => {
        return {
            name,
            fullPath: getNodeFullPath(state),
        }
    });

    const variableGroups: ChataigneProjectSummary["variableGroups"] = Object.entries(rootNode.CONTENTS?.customVariables?.CONTENTS ?? {})
        .filter(([name, group]) => {
            const type = getNodeType(group);
            return type === "CVGroup";
        })
        .map(([name, group]) => {

            return {
                name,
                fullPath: getNodeFullPath(group),
                elements: Object.entries(group.CONTENTS?.variables?.CONTENTS ?? {}).map(([name, variable]) => {

                    const value = variable.CONTENTS?.[name] as any;

                    return {
                        name,
                        fullPath: getNodeFullPath(value),
                        type: getNodeType(value),
                        value: getNodeValue(value),
                        info : getNodeRange(value),
                    }
                }),
            }
        });

    return {
        modules,
        states,
        variableGroups,
    }
}


const extractRange = (range: SerializedRange) => {
    if (Array.isArray(range)) {
        return extractRange(range[0]);
    }

    return range;
}

const getNodeRange = (node: SerializedNode) => {
    const serializedRange = node["RANGE"];

    if (!serializedRange) {
        return undefined;
    }

    const range = extractRange(serializedRange);

    if (!range) {
        return undefined;
    }

    let result: Record<string, any> = { }
    let hasResult = false;

    if (range.MIN !== undefined) {
        result.min = range.MIN;
        hasResult = true;
    }

    if (range.MAX !== undefined) {
        result.max = range.MAX;
        hasResult = true;
    }
    if (range.VALS !== undefined) {
        result.values = range.VALS;
        hasResult = true;
    }

    return hasResult ? result : undefined;
}


const typeMap = {
    "i": "Integer",
    "f": "Float",
    "s": "String",
    "T": "Boolean",
    "r": "Color",
    "N": "None",
    "t": "TimeTag",
    "m": "Midi",
    "a": "Arguments",
} as const

const getNodeType = (node: SerializedNode): string => {

    const extendedType = node["EXTENDED_TYPE"]?.[0];
    if (extendedType) {
        return extendedType;
    }

    const type = node["TYPE"];
    if (type) {
        return typeMap[type as keyof typeof typeMap] ?? type;
    }

    return "Unknown";
}

const getNodeDescription = (node: SerializedNode): string => {
    const description = node["DESCRIPTION"];
    if (description) {
        return description;
    }
    return "Unknown";
}

const getNodeFullPath = (node: SerializedNode): string => {
    const fullPath = node["FULL_PATH"];
    if (fullPath) {
        return fullPath;
    }

    return "Unknown";
}

const getNodeValue = (node: SerializedNode): any => {

    return node["VALUE"]?.[0];
}