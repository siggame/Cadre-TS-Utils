import { replaceAll } from "./replace-all";
import { unCapitalizeFirstLetter } from "./un-capitalize-first-letter";

/**
 * Converts a string from camelCase to dash-case.
 *
 * @param str - A string in camelCase format to convert to dash-case.
 * @returns `str` but now in dash-case.
 * @example 'thisNeatVariable' -> 'this-neat-variable'
 */
export function toDashCase(str: string): string {
    if (!str) {
        return "";
    }

    // ensure the first character is lower-cased
    const unCapitalized = unCapitalizeFirstLetter(str);

    // and there are no spaces
    const noSpaces = replaceAll(unCapitalized, " ", "");

    // now dash-ify on capital letter breaks
    return noSpaces.replace(/([A-Z])/g, (sub) => `-${sub.toLowerCase()}`);
}
