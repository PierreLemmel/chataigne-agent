import { Mastra } from '@mastra/core/mastra';
import { getStorage } from '../lib/storage';
import { getLogger } from '../lib/logging';
import { chataigneControlAgent } from './agents/chataigne-control-agent';


export const mastra = new Mastra({
	agents: {
		chataigneControlAgent
	},
	storage: getStorage(),
	logger: getLogger(),
});
