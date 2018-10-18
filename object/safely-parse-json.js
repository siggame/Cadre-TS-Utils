"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Safely parses a json string and returns the result, or an Error, instead of
 * throwing an Error. Also wraps the type.
 *
 * @param json - The json still in string format.
 * @returns The parsed JSON, or an Error object if the JSON was malformed.
 */
function safelyParseJSON(json) {
    try {
        return JSON.parse(json);
    }
    catch (err) {
        return err;
    }
}
exports.safelyParseJSON = safelyParseJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZWx5LXBhcnNlLWpzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb2JqZWN0L3NhZmVseS1wYXJzZS1qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZUFBZSxDQUFDLElBQVk7SUFDeEMsSUFBSTtRQUNBLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVMsQ0FBQztLQUNuQztJQUNELE9BQU8sR0FBRyxFQUFFO1FBQ1IsT0FBTyxHQUFZLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBUEQsMENBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uIH0gZnJvbSBcIi4uL3R5cGVzL2pzb25cIjtcblxuLyoqXG4gKiBTYWZlbHkgcGFyc2VzIGEganNvbiBzdHJpbmcgYW5kIHJldHVybnMgdGhlIHJlc3VsdCwgb3IgYW4gRXJyb3IsIGluc3RlYWQgb2ZcbiAqIHRocm93aW5nIGFuIEVycm9yLiBBbHNvIHdyYXBzIHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSBqc29uIC0gVGhlIGpzb24gc3RpbGwgaW4gc3RyaW5nIGZvcm1hdC5cbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgSlNPTiwgb3IgYW4gRXJyb3Igb2JqZWN0IGlmIHRoZSBKU09OIHdhcyBtYWxmb3JtZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlbHlQYXJzZUpTT04oanNvbjogc3RyaW5nKTogSnNvbiB8IEVycm9yIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKSBhcyBKc29uO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBlcnIgYXMgRXJyb3I7XG4gICAgfVxufVxuIl19