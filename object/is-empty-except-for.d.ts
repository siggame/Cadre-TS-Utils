import { UnknownObject } from "../types/unknown-object";
/**
 * Check if an object is empty except for a single key.
 *
 * @param obj - The object to check.
 * @param keys - The key(s) to check if it is the only key in that
 * (duplicates are ignored).
 * @returns True if the given object is empty except for a single key,
 * false otherwise.
 */
export declare function isEmptyExceptFor(obj: UnknownObject, ...keys: Array<string | number>): boolean;
