/**
 * Converts a Map to an object.
 *
 * @param map - The map to convert from.
 * @returns A new object with the same key/value pairs from the map.
 */
export declare function mapToObject<T>(map: Map<string, T>): {
    [key: string]: T | undefined;
};
