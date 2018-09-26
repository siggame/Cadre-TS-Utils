import { UnknownObject } from "../object";
import { isObject } from "./is-object";

/**
 * Check if an object is empty except for a single key.
 *
 * @param obj - The object to check
 * @param keys - The key(s) to check if it is the only key in that
 * (duplicates are ignored).
 * @returns True if the given object is empty except for a single key,
 * false otherwise.
 */
export function isEmptyExceptFor(
    obj: UnknownObject,
    ...keys: Array<string | number>
): boolean {
    const keysSet = new Set(keys);
    const properties = Object.getOwnPropertyNames(obj);
    if (!isObject(obj) || properties.length !== keysSet.size) {
        return false; // it can't be empty except for the given keys
    }

    for (const property of properties) {
        if (!keysSet.delete(property)) {
            return false;
        }
    }

    return true;
}
