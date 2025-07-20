import { createTool } from "@mastra/core";
import { z } from "zod";
import { colorDescriptionSchema, ColorFormat, colorFormats, colorsRegexes, colorToDescription, namedColors, parseColorString } from "../../lib/color";

export const colorToConvertSchema = z.object({
    type: z.literal("string"),
    value: z.string().regex(colorsRegexes.hex)
        .or(z.string().regex(colorsRegexes.rgba))
        .or(z.string().regex(colorsRegexes.hsv))
        .or(z.enum(namedColors)),
}).or(z.object({
    type: z.literal("rgb"),
    value: z.object({
        r: z.number().int().min(0).max(255),
        g: z.number().int().min(0).max(255),
        b: z.number().int().min(0).max(255),
    }),
})).or(z.object({
    type: z.literal("rgba"),
    value: z.object({
        r: z.number().int().min(0).max(255),
        g: z.number().int().min(0).max(255),
        b: z.number().int().min(0).max(255),
        a: z.number().min(0).max(1),
    }),
})).or(z.object({
    type: z.enum(["hsv", "hsl"]),
    value: z.object({
        h: z.number().int().min(0).max(360),
        s: z.number().min(0).max(100),
        v: z.number().min(0).max(100),
    }),
})).or(z.object({
    type: z.enum(["hsva", "hsla"]),
    value: z.object({
        h: z.number().int().min(0).max(360),
        s: z.number().min(0).max(100),
        v: z.number().min(0).max(100),
        a: z.number().min(0).max(1),
    }),
}))

export type ColorToConvert = z.infer<typeof colorToConvertSchema>;


const conversionInputSchema = z.object({
    content: colorToConvertSchema,
})


const conversionOutputSchema = z.object({
    success: z.literal(true),
    value: colorDescriptionSchema,
}).or(z.object({
    success: z.literal(false),
    error: z.string(),
    suggested_formats: z.array(z.enum(colorFormats)).optional(),
}))

type ConversionOutput = z.infer<typeof conversionOutputSchema>;

export const colorStringConversionTool = createTool({
    id: "color-string-conversion-tool",
    description:`Convert a color from its string representation.`,
    inputSchema: conversionInputSchema,
    outputSchema: conversionOutputSchema,
    execute: async ({ context }) => {

        const result = convertColor(context.content);
        return result;
    },
})

export const convertColor = (toConvert: ColorToConvert): ConversionOutput => {
    const {
        type,
        value,
    } = toConvert;

    switch (type) {
        case "string":
            const color = parseColorString(value);
            if (!color) {
                return {
                    success: false,
                    error: "Invalid color string",
                    suggested_formats: colorFormats.map(format => format as ColorFormat),
                };
            }
            return {
                success: true,
                value: colorToDescription(color),
            };

        case "rgb":
        case "rgba":
        case "hsv":
        case "hsl":
        case "hsva":
        case "hsla":
            return {
                success: true,
                value: colorToDescription(value),
            };

        default:
            return {
                success: false,
                error: `Unexpected input type: ${type}`,
            };
    }
}