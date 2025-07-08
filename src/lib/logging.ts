import { PinoLogger } from "@mastra/loggers";

let logger: PinoLogger | null = null;

export function getLogger() {
    if (!logger) {
        logger = new PinoLogger({
            name: 'Mastra',
        })
    }
    return logger;
}