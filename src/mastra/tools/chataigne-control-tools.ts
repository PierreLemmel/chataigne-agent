import { createTool } from "@mastra/core/tools";
import { delay } from "@mastra/core/utils";
import OSC from "osc-js";
import { OSCQueryDiscovery, OSCQueryServer } from "oscquery";
import z from "zod";
import { ChataignesParamTypes } from "../../lib/chataigne";


const baseInputProperties = {
    address: z.string(),
    port: z.number().int().default(42000),
    host: z.string().default("localhost"),
}

const baseInputSchema = z.object(baseInputProperties);

export const stringInputSchema = z.object({
    ...baseInputProperties,
    value: z.string(),
});

export const integerInputSchema = z.object({
    ...baseInputProperties,
    value: z.number(),
});

export const floatInputSchema = z.object({
    ...baseInputProperties,
    value: z.number(),
});

export const booleanInputSchema = z.object({
    ...baseInputProperties,
    value: z.boolean(),
});

export const enumInputSchema = z.object({
    ...baseInputProperties,
    value: z.string(),
});

export const colorInputSchema = z.object({
    ...baseInputProperties,
    value: z.array(z.number().min(0).max(1)).length(4),
});

export const point2DInputSchema = z.object({
    ...baseInputProperties,
    value: z.array(z.number()).length(2),
});

export const point3DInputSchema = z.object({
    ...baseInputProperties,
    value: z.array(z.number()).length(3),
});


type BaseInput<T> = z.infer<typeof baseInputSchema> & { value: T };

export type StringInput = z.infer<typeof stringInputSchema>;
export type IntegerInput = z.infer<typeof integerInputSchema>;
export type FloatInput = z.infer<typeof floatInputSchema>;
export type BooleanInput = z.infer<typeof booleanInputSchema>;
export type EnumInput = z.infer<typeof enumInputSchema>;
export type ColorInput = z.infer<typeof colorInputSchema>;
export type Point2DInput = z.infer<typeof point2DInputSchema>;
export type Point3DInput = z.infer<typeof point3DInputSchema>;



const baseOutputProperties = {
    address: z.string(),
}

export const stringOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.string(),
});

export const integerOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.number(),
});

export const floatOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.number(),
});

export const booleanOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.boolean(),
});

export const enumOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.string(),
});

export const colorOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.array(z.number().min(0).max(1)).min(3).max(4),
});

export const point2DOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.array(z.number()).length(2),
});

export const point3DOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.array(z.number()).length(3),
});

export type StringOutput = z.infer<typeof stringOutputSchema>;
export type IntegerOutput = z.infer<typeof integerOutputSchema>;
export type FloatOutput = z.infer<typeof floatOutputSchema>;
export type BooleanOutput = z.infer<typeof booleanOutputSchema>;
export type EnumOutput = z.infer<typeof enumOutputSchema>;
export type ColorOutput = z.infer<typeof colorOutputSchema>;
export type Point2DOutput = z.infer<typeof point2DOutputSchema>;
export type Point3DOutput = z.infer<typeof point3DOutputSchema>;


export const setChataigneStringVariableTool = createTool({
    id: 'set-chataigne-string-variable-tool',
    description: 'Set a string variable in chataigne',
    inputSchema: stringInputSchema,
    outputSchema: stringOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<string>(context);
    },
})

export const setChataigneIntegerVariableTool = createTool({
    id: 'set-chataigne-integer-variable-tool',
    description: 'Set an integer variable in chataigne',
    inputSchema: integerInputSchema,
    outputSchema: integerOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<number>(context);
    },
})

export const setChataigneFloatVariableTool = createTool({

    id: 'set-chataigne-float-variable-tool',
    description: 'Set a float variable in chataigne',
    inputSchema: floatInputSchema,
    outputSchema: floatOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<number>(context);
    },
})

export const setChataigneBooleanVariableTool = createTool({
    id: 'set-chataigne-boolean-variable-tool',
    description: 'Set a boolean variable in chataigne',
    inputSchema: booleanInputSchema,
    outputSchema: booleanOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<boolean>(context);
    },
})

export const setChataigneEnumVariableTool = createTool({
    id: 'set-chataigne-enum-variable-tool',
    description: 'Set an enum variable in chataigne',
    inputSchema: enumInputSchema,
    outputSchema: enumOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<string>(context);
    },
})

export const setChataigneColorVariableTool = createTool({
    id: 'set-chataigne-color-variable-tool',
    description: 'Set a color variable in chataigne',
    inputSchema: colorInputSchema,
    outputSchema: colorOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<number[]>(context);
    },
})

export const setChataignePoint2DVariableTool = createTool({
    id: 'set-chataigne-point2d-variable-tool',
    description: 'Set a point2d variable in chataigne',
    inputSchema: point2DInputSchema,
    outputSchema: point2DOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<number[]>(context);
    },
})

export const setChataignePoint3DVariableTool = createTool({ 
    id: 'set-chataigne-point3d-variable-tool',
    description: 'Set a point3d variable in chataigne',
    inputSchema: point3DInputSchema,
    outputSchema: point3DOutputSchema,
    execute: async ({ context }) => {
        return await sendChataigneVariable<number[]>(context);
    },
})



export const getChataigneValueInputSchema = z.object({
    ...baseInputProperties,
});

export type GetChataigneValueInput = z.infer<typeof getChataigneValueInputSchema>;


export const getChataigneValueOutputSchema = z.object({
    ...baseOutputProperties,
    value: z.any().optional(),
    type: z.enum(ChataignesParamTypes),
});

export type GetChataigneValueOutput = z.infer<typeof getChataigneValueOutputSchema>;

export const getChataigneValueTool = createTool({
    id: 'get-chataigne-value-tool',
    description: 'Get a value from chataigne or indicates that the server does not have received the value yet',
    inputSchema: getChataigneValueInputSchema,
    outputSchema: getChataigneValueOutputSchema,
    execute: async ({ context }) => {
        return await getChataigneValue(context);
    },
})

export const chataigneTools = {
    setChataigneStringVariableTool,
    setChataigneIntegerVariableTool,
    setChataigneFloatVariableTool,
    setChataigneBooleanVariableTool,
    setChataigneEnumVariableTool,
    setChataigneColorVariableTool,
    setChataignePoint2DVariableTool,
    setChataignePoint3DVariableTool,
    getChataigneValueTool,
}




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



async function sendChataigneVariable<T>(input: BaseInput<T>): Promise<{ address: string, value: T }> {

    const {
        address,
        host,
        port,
        value,
    } = input

    const osc = await getOscOut(host, port);

    const args = Array.isArray(value) ? value : [value]
    const message = new OSC.Message(address, ...args)

    osc.send(message)

    return {
        address,
        value,
    };
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
    
    const response = await fetch(`http://${host}:${port}${newAddress}`)
    const json = await response.json()

    const variable = json["CONTENTS"][varName]
    const value = variable["VALUE"][0]
    const type = variable["EXTENDED_TYPE"][0]
    

    return {
        address: newAddress,
        value,
        type
    }

}