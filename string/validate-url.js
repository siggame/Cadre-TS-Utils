"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
/**
 * Validates that a string is a valid url.
 *
 * @param str - The string to try to validate.
 * @returns true if looks like a valid url, false otherwise.
 */
function validateURL(str) {
    return validURL.test(str);
}
exports.validateURL = validateURL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtdXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cmluZy92YWxpZGF0ZS11cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBRyxtRkFBbUYsQ0FBQztBQUVyRzs7Ozs7R0FLRztBQUNILFNBQWdCLFdBQVcsQ0FBQyxHQUFXO0lBQ25DLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsa0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWxpZFVSTCA9IC8oZnRwfGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhhdCBhIHN0cmluZyBpcyBhIHZhbGlkIHVybC5cbiAqXG4gKiBAcGFyYW0gc3RyIC0gVGhlIHN0cmluZyB0byB0cnkgdG8gdmFsaWRhdGUuXG4gKiBAcmV0dXJucyB0cnVlIGlmIGxvb2tzIGxpa2UgYSB2YWxpZCB1cmwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVVJMKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbGlkVVJMLnRlc3Qoc3RyKTtcbn1cbiJdfQ==