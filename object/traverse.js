"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_object_1 = require("./is-object");
const object_has_property_1 = require("./object-has-property");
/**
 * Traverses down a tree like object via list of keys.
 *
 * @param obj - The tree like object with nested properties to traverse.
 * @param keys - The list of keys to traverse, in order.
 * @returns Whatever value is at the end of the keys path.
 * @throws Throws an error when a given key is not found in the object
 * traversing.
 */
function traverse(obj, ...keys) {
    if (!is_object_1.isObject(obj)) {
        throw new Error(`obj ${obj} is not an object to traverse.`);
    }
    let current = obj;
    for (const key of keys) {
        if (is_object_1.isObject(current) && object_has_property_1.objectHasProperty(obj, key)) {
            current = current[key];
        }
        else {
            throw new Error(`Key ${key} not found in object to traverse`);
        }
    }
    return obj;
}
exports.traverse = traverse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb2JqZWN0L3RyYXZlcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXVDO0FBQ3ZDLCtEQUEwRDtBQUUxRDs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFjO0lBQ25ELElBQUksQ0FBQyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLGdDQUFnQyxDQUFDLENBQUM7S0FDL0Q7SUFFRCxJQUFJLE9BQU8sR0FBWSxHQUFHLENBQUM7SUFDM0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsSUFBSSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHVDQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNsRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO2FBQ0k7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQ2pFO0tBQ0o7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFoQkQsNEJBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwiLi9pcy1vYmplY3RcIjtcbmltcG9ydCB7IG9iamVjdEhhc1Byb3BlcnR5IH0gZnJvbSBcIi4vb2JqZWN0LWhhcy1wcm9wZXJ0eVwiO1xuXG4vKipcbiAqIFRyYXZlcnNlcyBkb3duIGEgdHJlZSBsaWtlIG9iamVjdCB2aWEgbGlzdCBvZiBrZXlzLlxuICpcbiAqIEBwYXJhbSBvYmogLSBUaGUgdHJlZSBsaWtlIG9iamVjdCB3aXRoIG5lc3RlZCBwcm9wZXJ0aWVzIHRvIHRyYXZlcnNlLlxuICogQHBhcmFtIGtleXMgLSBUaGUgbGlzdCBvZiBrZXlzIHRvIHRyYXZlcnNlLCBpbiBvcmRlci5cbiAqIEByZXR1cm5zIFdoYXRldmVyIHZhbHVlIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGtleXMgcGF0aC5cbiAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIHdoZW4gYSBnaXZlbiBrZXkgaXMgbm90IGZvdW5kIGluIHRoZSBvYmplY3RcbiAqIHRyYXZlcnNpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZShvYmo6IG9iamVjdCwgLi4ua2V5czogc3RyaW5nW10pOiB1bmtub3duIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBvYmogJHtvYmp9IGlzIG5vdCBhbiBvYmplY3QgdG8gdHJhdmVyc2UuYCk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQ6IHVua25vd24gPSBvYmo7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAoaXNPYmplY3QoY3VycmVudCkgJiYgb2JqZWN0SGFzUHJvcGVydHkob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBLZXkgJHtrZXl9IG5vdCBmb3VuZCBpbiBvYmplY3QgdG8gdHJhdmVyc2VgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG4iXX0=