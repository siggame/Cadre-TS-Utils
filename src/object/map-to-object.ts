
/**
 * Converts a Map to an object.
 *
 * @param map - The map to convert from.
 * @returns A new object with the same key/value pairs from the map.
 */
export function mapToObject<T>(
    map: Map<string, T>,
): { [key: string]: T | undefined } {
    const obj: {[key: string]: T} = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }

    return obj;
}
