"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_object_1 = require("./is-object");
/**
 * Check if an object is empty except for a single key.
 *
 * @param obj - The object to check.
 * @param keys - The key(s) to check if it is the only key in that
 * (duplicates are ignored).
 * @returns True if the given object is empty except for a single key,
 * false otherwise.
 */
function isEmptyExceptFor(obj, ...keys) {
    const keysSet = new Set(keys);
    const properties = Object.getOwnPropertyNames(obj);
    if (!is_object_1.isObject(obj) || properties.length !== keysSet.size) {
        return false; // it can't be empty except for the given keys
    }
    for (const property of properties) {
        if (!keysSet.delete(property)) {
            return false;
        }
    }
    return true;
}
exports.isEmptyExceptFor = isEmptyExceptFor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZW1wdHktZXhjZXB0LWZvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vYmplY3QvaXMtZW1wdHktZXhjZXB0LWZvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF1QztBQUV2Qzs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLGdCQUFnQixDQUM1QixHQUFrQixFQUNsQixHQUFHLElBQTRCO0lBRS9CLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUMsb0JBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDdEQsT0FBTyxLQUFLLENBQUMsQ0FBQyw4Q0FBOEM7S0FDL0Q7SUFFRCxLQUFLLE1BQU0sUUFBUSxJQUFJLFVBQVUsRUFBRTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQWpCRCw0Q0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmtub3duT2JqZWN0IH0gZnJvbSBcIi4uL3R5cGVzL3Vua25vd24tb2JqZWN0XCI7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gXCIuL2lzLW9iamVjdFwiO1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBlbXB0eSBleGNlcHQgZm9yIGEgc2luZ2xlIGtleS5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCB0byBjaGVjay5cbiAqIEBwYXJhbSBrZXlzIC0gVGhlIGtleShzKSB0byBjaGVjayBpZiBpdCBpcyB0aGUgb25seSBrZXkgaW4gdGhhdFxuICogKGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQpLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGVtcHR5IGV4Y2VwdCBmb3IgYSBzaW5nbGUga2V5LFxuICogZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eUV4Y2VwdEZvcihcbiAgICBvYmo6IFVua25vd25PYmplY3QsXG4gICAgLi4ua2V5czogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPlxuKTogYm9vbGVhbiB7XG4gICAgY29uc3Qga2V5c1NldCA9IG5ldyBTZXQoa2V5cyk7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gICAgaWYgKCFpc09iamVjdChvYmopIHx8IHByb3BlcnRpZXMubGVuZ3RoICE9PSBrZXlzU2V0LnNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBpdCBjYW4ndCBiZSBlbXB0eSBleGNlcHQgZm9yIHRoZSBnaXZlbiBrZXlzXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICgha2V5c1NldC5kZWxldGUocHJvcGVydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==