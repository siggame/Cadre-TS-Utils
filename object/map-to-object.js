"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a Map to an object.
 *
 * @param map - The map to convert from.
 * @returns A new object with the same key/value pairs from the map.
 */
function mapToObject(map) {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}
exports.mapToObject = mapToObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXRvLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vYmplY3QvbWFwLXRvLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7OztHQUtHO0FBQ0gsU0FBZ0IsV0FBVyxDQUN2QixHQUFtQjtJQUVuQixNQUFNLEdBQUcsR0FBdUIsRUFBRSxDQUFDO0lBQ25DLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUNwQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQVRELGtDQVNDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbnZlcnRzIGEgTWFwIHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gbWFwIC0gVGhlIG1hcCB0byBjb252ZXJ0IGZyb20uXG4gKiBAcmV0dXJucyBBIG5ldyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSB0aGUgbWFwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9PYmplY3Q8VD4oXG4gICAgbWFwOiBNYXA8c3RyaW5nLCBUPixcbik6IHsgW2tleTogc3RyaW5nXTogVCB8IHVuZGVmaW5lZCB9IHtcbiAgICBjb25zdCBvYmo6IHtba2V5OiBzdHJpbmddOiBUfSA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcCkge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG4iXX0=