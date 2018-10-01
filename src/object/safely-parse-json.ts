import { Json } from "../types/json";

/**
 * Safely parses a json string and returns the result, or an Error, instead of
 * throwing an Error. Also wraps the type.
 *
 * @param json - The json still in string format.
 * @returns The parsed JSON, or an Error object if the JSON was malformed.
 */
export function safelyParseJSON(json: string): Json | Error {
    try {
        return JSON.parse(json) as Json;
    }
    catch (err) {
        return err as Error;
    }
}
