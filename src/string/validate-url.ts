const validURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

/**
 * Validates that a string is a valid url.
 *
 * @param str - The string to try to validate.
 * @returns True if looks like a valid url, false otherwise.
 */
export function validateURL(str: string): boolean {
    return validURL.test(str);
}
