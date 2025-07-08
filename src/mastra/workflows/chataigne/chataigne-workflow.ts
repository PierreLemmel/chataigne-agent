import { createWorkflow } from "@mastra/core/workflows";
import { parseNoisetteInputSchema } from "./steps/parse-noisette-file";
import { z } from "zod";
import { parseNoisetteFileStep } from "./steps/parse-noisette-file";
import { analyzeNoisetteStep } from "./steps/analyze-noisette-content";




const chataigneWorkflow = createWorkflow({
        id: 'chataigne-workflow',
        inputSchema: parseNoisetteInputSchema,
        outputSchema: z.any(),
    })
    .then(parseNoisetteFileStep)
    .then(analyzeNoisetteStep)
    .commit()

export { chataigneWorkflow };