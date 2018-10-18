/**
 * Traverses down a tree like object via list of keys.
 *
 * @param obj - The tree like object with nested properties to traverse.
 * @param keys - The list of keys to traverse, in order.
 * @returns Whatever value is at the end of the keys path.
 * @throws Throws an error when a given key is not found in the object
 * traversing.
 */
export declare function traverse(obj: object, ...keys: string[]): unknown;
