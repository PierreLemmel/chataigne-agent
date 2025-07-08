import { createStep } from "@mastra/core";
import { z } from "zod";
import { parsedNoisetteSchema } from "./parse-noisette-file";
import { analyzeNoisetteAgent } from "../../../agents/analyze-noisette-agent";

export const analyzedNoisetteSchema = z.object({
    description: z.string(),
})

export type AnalyzedNoisette = z.infer<typeof analyzedNoisetteSchema>;

export const analyzeNoisetteStep = createStep({
    id: 'analyze-noisette',
    description: 'Analyze the noisette file',
    inputSchema: parsedNoisetteSchema,
    outputSchema: analyzedNoisetteSchema,
    execute: async ({ inputData }) => {
        const jsonContent = JSON.stringify(inputData, null, 2);
        const generationResult = await analyzeNoisetteAgent.generate(jsonContent);
        
        const analyzedNoisette: AnalyzedNoisette = {
            description: generationResult.text,
        }

        return analyzedNoisette;
    }
})