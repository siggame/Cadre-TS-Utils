import { nil } from "../types/nil";
/**
 * Checks if a given thing is null or undefined.
 *
 * @param thing - The thing to check against.
 * @returns True if it is, false otherwise.
 */
export declare function isNil<T>(thing: T | undefined | null): thing is nil;
