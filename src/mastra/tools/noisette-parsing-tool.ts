import { createTool } from "@mastra/core/tools";
import z from "zod";
import { ChataigneCustomVariable, ChataignesParamTypes, niceNameToAddress, NoisetteFile } from "../../lib/chataigne";
import { readFile } from "fs/promises";
import { isOneOf } from "../../lib/utils";

const noisetteParsingInputSchema = z.object({
    path: z.string(),
    groups: z.array(z.string()).optional(),
});

type NoisetteParsingInput = z.infer<typeof noisetteParsingInputSchema>;

const noisetteParsingOutputSchema = z.object({
    success: z.boolean(),
    error: z.string().optional(),
    variables: z.array(z.object({
        name: z.string(),
        address: z.string(),
        type: z.enum(ChataignesParamTypes).optional(),
        initialValue: z.any().optional(),
        info: z.any().optional(),
    })).optional(),
});

type NoisetteParsingOutput = z.infer<typeof noisetteParsingOutputSchema>;

export const noisetteParsingTool = createTool({
    id: 'noisette-parsing-tool',
    description: 'Parse a noisette file',
    inputSchema: noisetteParsingInputSchema,
    outputSchema: noisetteParsingOutputSchema,
    execute: async ({ context }) => {
        return await parseNoisetteFile(context);
    },
})

async function parseNoisetteFile(context: NoisetteParsingInput): Promise<NoisetteParsingOutput> {
    try {

        const { path, groups } = context;

        if (!path) {
            return {
                success: false,
                error: "No path provided",
            }
        }

        const file = await readFile(path, "utf8");
        const noisette = JSON.parse(file) as NoisetteFile;

        let groupsToConsider = noisette.customVariables.items;
        
        if (groups && groups.length > 0) {

            const lcGroups = groups.map((group) => group.toLowerCase());
            groupsToConsider = groupsToConsider
                .filter((group) => lcGroups.includes(group.niceName.toLowerCase()));
        }

        const variables = groupsToConsider
            .flatMap((group) => {

                const groupName = niceNameToAddress(group.niceName);
                return group.variables.items?.map(item => ({ ...item, group: groupName })) ?? [];
            })
            .filter((variable): variable is ChataigneCustomVariable & { group: string } => variable !== undefined)
            .map((variable) => {

                
                const {
                    group,
                    niceName: name,
                    parameters: [{
                        value,
                        type,
                        controlAddress,
                        minValue,
                        maxValue,
                        enumOptions,
                    }],
                } = variable;

                const info: Record<string, any> = {};

                if (isOneOf(type, ["Float", "Point2D", "Point3D"]) && minValue !== undefined && maxValue !== undefined) {
                    info.range = {
                        min: minValue,
                        max: maxValue,
                    }
                }

                if (type === "Enum" && enumOptions !== undefined) {
                    info.enumOptions = enumOptions;
                }

                const varAdress = controlAddress.split("/").pop();

                const fullAddress = `/customVariables/${group}/variables/${varAdress}/${varAdress}`

                return ({
                    name,
                    address: fullAddress,
                    type,
                    initialValue: value,
                    info
                });
            }); 

        return {
            success: true,
            variables,
        }

    } catch (error) {
        return {
            success: false,
            error: error.message,
        }
    }
}