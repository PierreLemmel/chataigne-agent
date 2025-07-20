import { createTool } from "@mastra/core/tools";
import { delay } from "@mastra/core/utils";
import OSC from "osc-js";
import z from "zod";
import { ChataignesParamTypes } from "../../lib/chataigne";
import { colorDescriptionSchema, colorValueSchema, rgbaToNumberArray } from "../../lib/color";
import { convertColor } from "./color-conversion-tools";


const setVariableInputSchema = z.object({
    address: z.string(),
    port: z.number().int().default(42000),
    host: z.string().default("localhost"),
    delay: z.number().int().optional().describe("The delay in milliseconds before the value is set"),
    content: z.object({
        type: z.literal("string"),
        value: z.string(),
    }).or(z.object({
        type: z.literal("integer"),
        value: z.number().int(),
    })).or(z.object({
        type: z.literal("float"),
        value: z.number(),
    })).or(z.object({
        type: z.literal("boolean"),
        value: z.boolean(),
    })).or(z.object({
        type: z.literal("enum"),
        value: z.string(),
    })).or(z.object({
        type: z.literal("color"),
        value: colorValueSchema,
    })).or(z.object({
        type: z.literal("point2d"),
        value: z.array(z.number()).length(2),
    })).or(z.object({   
        type: z.literal("point3d"),
        value: z.array(z.number()).length(3),
    })),
})


const setVariableOutputContentSchema = z.object({
    type: z.literal("string"),
    value: z.string(),
}).or(z.object({
    type: z.literal("integer"),
    value: z.number().int(),
})).or(z.object({
    type: z.literal("float"),
    value: z.number(),
})).or(z.object({
    type: z.literal("boolean"),
    value: z.boolean(),
})).or(z.object({
    type: z.literal("enum"),
    value: z.string(),
})).or(z.object({
    type: z.literal("color"),
    value: colorDescriptionSchema,
})).or(z.object({
    type: z.literal("point2d"),
    value: z.array(z.number()).length(2),
})).or(z.object({   
    type: z.literal("point3d"),
    value: z.array(z.number()).length(3),
}))

const setVariableOutputSchema = z.object({
    address: z.string(),
    content: z.object({
        success: z.literal(true),
        value: setVariableOutputContentSchema,
        delay: z.number().int().optional().describe("The delay in milliseconds before the value is set"),
    }).or(z.object({
        success: z.literal(false),
        error: z.string(),
    })),
})

type SetVariableInput = z.infer<typeof setVariableInputSchema>;
type SetVariableOutput = z.infer<typeof setVariableOutputSchema>;
type SetVariableOutputContent = z.infer<typeof setVariableOutputContentSchema>;

export const setChataigneVariableTool = createTool({
    id: 'set-chataigne-variable-tool',
    description: 'Set a variable in chataigne',
    inputSchema: setVariableInputSchema,
    outputSchema: setVariableOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable(context);
    },
})



export const getChataigneValueInputSchema = z.object({
    address: z.string(),
    port: z.number().int().default(42000),
    host: z.string().default("localhost"),
});

export type GetChataigneValueInput = z.infer<typeof getChataigneValueInputSchema>;


export const getChataigneValueOutputSchema = z.object({
    address: z.string(),
    content: z.object({
        success: z.literal(true),
        value: z.any().optional(),
        type: z.enum(ChataignesParamTypes),
    }).or(z.object({
        success: z.literal(false),
        error: z.string(),
    })),
});

export type GetChataigneValueOutput = z.infer<typeof getChataigneValueOutputSchema>;

export const getChataigneVariableTool = createTool({
    id: 'get-chataigne-variable-tool',
    description: 'Get a variable value from chataigne',
    inputSchema: getChataigneValueInputSchema,
    outputSchema: getChataigneValueOutputSchema,
    execute: async ({ context }) => {
        return await getChataigneValue(context);
    },
})




type OscData = {
    host: string,
    port: number,
    osc: OSC,
}

let oscOut: OscData|null = null;


const getOscOut = async (host: string, port: number): Promise<OSC> => {

    if (!oscOut) {

        const osc = new OSC()
        osc.open({ host, port })
    
        while (true) {
    
            const status = osc.status()
    
            if (status === OSC.STATUS.IS_OPEN) {
                break
            } else if (status === OSC.STATUS.IS_CONNECTING) {
                await delay(100)
            } else {
                
                throw new Error(`Unexpected OSC status: ${status}`)
            }
        }

        oscOut = {
            host,
            port,
            osc,
        }

        return osc;
    }

    if (oscOut.osc.status() !== OSC.STATUS.IS_OPEN
        || oscOut.host !== host
        || oscOut.port !== port) {
        oscOut.osc.close()
        oscOut = null

        const newOsc = await getOscOut(host, port)
        return newOsc;
    }

    return oscOut.osc;
}



async function sendChataigneVariable(input: SetVariableInput): Promise<SetVariableOutput> {

    const {
        address,
        host,
        port,
        content,
        delay,
    } = input

    const osc = await getOscOut(host, port);

    let args: (string | number | boolean)[] = [];
    let outputContent: SetVariableOutputContent;
    const {
        type,
        value,
    } = content;


    switch (type) {
        case "string":
            args.push(value);
            outputContent = {
                type: "string",
                value,
            }
            break;
        case "integer":
            args.push(value);
            outputContent = {
                type: "integer",
                value,
            }
            break;
        case "float":
            args.push(value);
            outputContent = {
                type: "float",
                value,
            }
            break;
        case "boolean":
            args.push(value);
            outputContent = {
                type: "boolean",
                value,
            }
            break;
        case "enum":
            args.push(value);
            outputContent = {
                type: "enum",
                value,
            }
            break;
        case "color":
            const color = convertColor(value);
            if (!color.success) {
                return {
                    address,
                    content: {
                        success: false,
                        error: color.error,
                    },
                }
            }

            const rgba = {
                ...color.value.rgb,
                a: color.value.alpha,
            }

            const numberArray = rgbaToNumberArray(rgba);
            args.push(...numberArray);

            outputContent = {
                type: "color",
                value: color.value,
            }
            break;
        case "point2d":
            args.push(value[0], value[1]);
            outputContent = {
                type: "point2d",
                value,
            }
            break;
        case "point3d":
            args.push(value[0], value[1], value[2]);
            outputContent = {
                type: "point3d",
                value,
            }
        default:
            throw new Error(`Unsupported type: ${type}`)
    }

    try {
        const message = new OSC.Message(address, ...args)

        if (!delay) {
            osc.send(message)
        }
        else {
            setTimeout(() => {
                osc.send(message)
            }, delay)
        }


        return {
            address,
            content: {
                success: true,
                value: outputContent,
                delay,
            },
        };
    }
    catch (error) {
        return {
            address,
            content: {
                success: false,
                error: error.message,
            },
        }
    }
}

async function getChataigneValue(input: GetChataigneValueInput): Promise<GetChataigneValueOutput> {

    const {
        address,
        host,
        port,
    } = input


    const chunks = address.split("/");
    const varName = chunks.pop()!;
    const newAddress = chunks.join("/");
    
    try {

        const response = await fetch(`http://${host}:${port}${newAddress}`)
        const json = await response.json()
        
        const variable = json["CONTENTS"][varName]
        const value = variable["VALUE"][0]
        const type = variable["EXTENDED_TYPE"][0]
        
        
        return {
            address: newAddress,
            content: {
                success: true,
                value,
                type,
            },
        }
    }
    catch (error) {
        return {
            address: newAddress,
            content: {
                success: false,
                error: error.message,
            },
        }
    }
}