import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { getStorage } from "../../lib/storage";
import { discoverOscQueryServicesTool } from "../tools/osc-query-tools";
import { colorStringConversionTool } from "../tools/color-conversion-tools";
import { setChataigneVariableTool, getChataigneVariableTool } from "../tools/chataigne-control-tools";

export const chataigneControlAgent = new Agent({
    name: "chataigne-control-agent",
    description: "A agent that can control chataigne projects",
    instructions: `
    You are an agent that can control chataigne projects.

    You can discover running projects, their structure, the variables that they contain and their ports and addresses by using the '${discoverOscQueryServicesTool.id}' tool.

    You can control these values by using the '${setChataigneVariableTool.id}' tool.

    If you need information about colors, you can use the '${colorStringConversionTool.id}' tool to see the values in different formats. For instance if you need to make the color more red, use the RGB format, if you need to make it more saturated, use the HSV format and so on.

    When user is not providing a specific value, you can decide what is the best value to set by yourself and give user feedback on what you have done.

    When user is asking for a specific value, always use the '${getChataigneVariableTool.id}' tool to get the current value of the variable.

    Answer in the language of the user, but keep the names of the variables in english.
    `,
    model: google("gemini-2.0-flash-001"),
    tools: {
        setChataigneVariableTool,
        getChataigneVariableTool,
        discoverOscQueryServicesTool,
        colorStringConversionTool,
    },
    memory: new Memory({
        storage: getStorage(),
    })
})