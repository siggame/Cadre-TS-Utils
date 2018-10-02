import { unStringify } from "../string/un-stringify";
import { TypedObject } from "../types/typed-object";
import { UnStringified } from "../types/un-stringified";
import { UnknownObject } from "../types/unknown-object";

/**
 * Accepts an object of any key/values, and tries to un-stringify each value,
 * and returns the new resulting object.
 *
 * @param obj - The object to try to un-stringify its children.
 * @returns The un-stringified object (a new object, obj is untouched).
 */
export function unStringifyObject<T extends Readonly<TypedObject<string>>>(
    obj: T,
): { [K in keyof T]: UnStringified } {
    const unStringified: UnknownObject = {};
    for (const key of Object.keys(obj)) {
        unStringified[key] = unStringify(obj[key] as string);
    }

    return unStringified as { [K in keyof T]: UnStringified };
}
