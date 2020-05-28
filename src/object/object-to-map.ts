/**
 * Converts an object into a proper Map.
 *
 * @param obj - The object to convert.
 * @returns A new map with the keys from obj and their values.
 */
export function objectToMap<T>(obj: { [key: string]: T }): Map<string, T> {
    const map = new Map<string, T>();
    for (const key of Object.keys(obj)) {
        map.set(key, obj[key]);
    }

    return map;
}
