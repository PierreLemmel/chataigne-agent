import { LibSQLStore } from "@mastra/libsql";

let storage: LibSQLStore | null = null;

export function getStorage() {
    if (!storage) {
        storage = new LibSQLStore({
            url: "file:./mastra.db",
        })
    }
    return storage;
}