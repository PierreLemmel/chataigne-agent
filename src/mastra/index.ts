import { Mastra } from '@mastra/core/mastra';
import { chataigneWorkflow } from './workflows/chataigne/chataigne-workflow';
import { getStorage } from '../lib/storage';
import { getLogger } from '../lib/logging';
import { analyzeNoisetteAgent } from './agents/analyze-noisette-agent';
import { chataigneControlAgent } from './agents/chataigne-control-agent';


export const mastra = new Mastra({
	agents: {
		analyzeNoisetteAgent,
		chataigneControlAgent
	},
	workflows: {
		chataigneWorkflow
	},
	storage: getStorage(),
	logger: getLogger(),
});
