import { isObject } from "./is-object";
import { objectHasProperty } from "./object-has-property";

/**
 * Traverses down a tree like object via list of keys.
 *
 * @param obj - The tree like object with nested properties to traverse.
 * @param keys - The list of keys to traverse, in order.
 * @returns Whatever value is at the end of the keys path.
 * @throws Throws an error when a given key is not found in the object
 * traversing.
 */
export function traverse(obj: unknown, ...keys: string[]): unknown {
    if (!isObject(obj)) {
        throw new Error(`obj ${String(obj)} is not an object to traverse.`);
    }

    let current: unknown = obj;
    for (const key of keys) {
        if (isObject(current) && objectHasProperty(obj, key)) {
            current = current[key];
        } else {
            throw new Error(`Key ${key} not found in object to traverse`);
        }
    }

    return obj;
}
