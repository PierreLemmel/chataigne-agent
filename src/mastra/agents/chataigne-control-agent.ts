import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import {
    chataigneTools,
} from "../tools/chataigne-control-tools";
import { noisetteParsingTool } from "../tools/noisette-parsing-tool";
import { Memory } from "@mastra/memory";
import { getStorage } from "../../lib/storage";
import { discoverOscQueryServicesTool } from "../tools/osc-query-tools";

export const chataigneControlAgent = new Agent({
    name: "chataigne-control-agent",
    description: "A agent that can control chataigne projects",
    instructions: `
    You are an agent that can control chataigne projects.

    You will be given a description of the project and a list of variables that can be controlled, with the associated address.

    You can assume that the project is already running and is listening to OSC messages on host "localhost" and port 42000 and send OSC messages on port 42001.

    You will be prompted user intent. Your role is to control the project to achieve the user intent by sending OSC messages.

    If you need information about the project, you can ask the user to give you the noisette file path and use the noisetteParsingTool to get the project structure. Then show this information to the user. The information will be stored in the working memory.

    If the user asks for the value of a variable, you can use the getChataigneValueTool to get the value. If the value is not available, search it in the working memory and if it is not there, indicate to the user that you can not get the value yet.

    Answer in the language of the user, but keep the names of the variables in english.
    `,
    model: google("gemini-2.0-flash-001"),
    tools: {
        ...chataigneTools,
        noisetteParsingTool,
        discoverOscQueryServicesTool,
    },
    memory: new Memory({
        storage: getStorage(),
        options: {
            workingMemory: {
                enabled: true
            }
        }
    })
})