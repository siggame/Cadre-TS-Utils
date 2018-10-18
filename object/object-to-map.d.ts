/**
 * Converts an object into a proper Map.
 *
 * @param obj - The object to convert
 * @returns A new map with the keys from obj and their values.
 */
export declare function objectToMap<T>(obj: {
    [key: string]: T;
}): Map<string, T>;
