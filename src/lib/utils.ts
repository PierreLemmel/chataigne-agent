export function removeProperties(obj: any, properties: string[]): any {

    const newObj = structuredClone(obj);

    const removedProperties_Internal = (obj: any) => {
        if (typeof obj !== "object" || obj === null) return;

        for (const property of properties) {
            delete obj[property];
        }

        for (const key in obj) {
            removedProperties_Internal(obj[key]);
        }
    }

    removedProperties_Internal(newObj);

    return newObj;
}

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function isOneOf<T>(value: T, values: T[]): boolean {
    return values.includes(value);
}