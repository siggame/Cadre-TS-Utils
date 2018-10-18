import { UnStringified } from "../types/un-stringified";
/**
 * Tries to cast a string to a primitive value if it looks like one.
 *
 * @param value - The value to try to cast. Will only work on strings.
 * @returns Value as a number if it appears to be a number,
 * or value as a boolean if it appears to be 'true' or 'false',
 * or just value back as a string.
 */
export declare function unStringify(value: UnStringified): UnStringified;
