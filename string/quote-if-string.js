"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps a value in quotes if it is a string.
 *
 * @param arg - The arg to check if it should be quoted.
 * @returns The toString version of arg, wrapped in quotes if it was originally
 * a string.
 */
function quoteIfString(arg) {
    return typeof arg === "string"
        ? `"${arg}"`
        : String(arg);
}
exports.quoteIfString = quoteIfString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtaWYtc3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cmluZy9xdW90ZS1pZi1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxTQUFnQixhQUFhLENBQUMsR0FBWTtJQUN0QyxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDMUIsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO1FBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBSkQsc0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdyYXBzIGEgdmFsdWUgaW4gcXVvdGVzIGlmIGl0IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBhcmcgLSBUaGUgYXJnIHRvIGNoZWNrIGlmIGl0IHNob3VsZCBiZSBxdW90ZWQuXG4gKiBAcmV0dXJucyBUaGUgdG9TdHJpbmcgdmVyc2lvbiBvZiBhcmcsIHdyYXBwZWQgaW4gcXVvdGVzIGlmIGl0IHdhcyBvcmlnaW5hbGx5XG4gKiBhIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlSWZTdHJpbmcoYXJnOiB1bmtub3duKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IGBcIiR7YXJnfVwiYFxuICAgICAgICA6IFN0cmluZyhhcmcpO1xufVxuIl19