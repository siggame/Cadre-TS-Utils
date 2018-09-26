import { escapeRegExp } from "./escape-reg-exp";

/**
 * Replaces all instances of a search string in a target string with an
 * optional replacement string.
 *
 * @param target - The target string to search for substrings to replace in.
 * @param search - The substring to search for in target.
 * @param replacement - An optional replacement string to replace instances of
 * search with.
 * @returns A string with ALL occurrences of search within target replaced with
 * the replacement string.
 */
export function replaceAll(target: string, search: string, replacement: string = ""): string {
    return target.replace(new RegExp(escapeRegExp(search), "g"), replacement);
}
