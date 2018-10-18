"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts an object into a proper Map.
 *
 * @param obj - The object to convert
 * @returns A new map with the keys from obj and their values.
 */
function objectToMap(obj) {
    const map = new Map();
    for (const key of Object.keys(obj)) {
        map.set(key, obj[key]);
    }
    return map;
}
exports.objectToMap = objectToMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXRvLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vYmplY3Qvb2JqZWN0LXRvLW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFJLEdBQXVCO0lBQ2xELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7SUFDakMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBUEQsa0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgcHJvcGVyIE1hcC5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyBBIG5ldyBtYXAgd2l0aCB0aGUga2V5cyBmcm9tIG9iaiBhbmQgdGhlaXIgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9NYXA8VD4ob2JqOiB7W2tleTogc3RyaW5nXTogVH0pOiBNYXA8c3RyaW5nLCBUPiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuICAgICAgICBtYXAuc2V0KGtleSwgb2JqW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG59XG4iXX0=