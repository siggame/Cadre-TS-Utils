import { UnknownObject } from "../types/unknown-object";

/**
 * Checks if the given value is an object and not null.
 *
 * @param obj - The object to check.
 * @returns True if it is an object and not null, false otherwise.
 */
export function isObject<T>(obj: unknown): obj is T & UnknownObject {
    return (typeof obj === "object" && obj !== null);
}
