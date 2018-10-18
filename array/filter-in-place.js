"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filters an array **IN PLACE**, as opposed to returning a new array.
 *
 * @param array - The array to filter, it will be mutated.
 * @param filter - The filter function, return true on elements to keep.
 */
function filterInPlace(array, filter) {
    const filtered = array.filter(filter);
    array.length = filtered.length;
    for (let i = 0; i < filtered.length; i++) {
        array[i] = filtered[i];
    }
}
exports.filterInPlace = filterInPlace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWluLXBsYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FycmF5L2ZpbHRlci1pbi1wbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ0gsU0FBZ0IsYUFBYSxDQUN6QixLQUFVLEVBQ1YsTUFBK0I7SUFFL0IsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjtBQUNMLENBQUM7QUFURCxzQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsdGVycyBhbiBhcnJheSAqKklOIFBMQUNFKiosIGFzIG9wcG9zZWQgdG8gcmV0dXJuaW5nIGEgbmV3IGFycmF5LlxuICpcbiAqIEBwYXJhbSBhcnJheSAtIFRoZSBhcnJheSB0byBmaWx0ZXIsIGl0IHdpbGwgYmUgbXV0YXRlZC5cbiAqIEBwYXJhbSBmaWx0ZXIgLSBUaGUgZmlsdGVyIGZ1bmN0aW9uLCByZXR1cm4gdHJ1ZSBvbiBlbGVtZW50cyB0byBrZWVwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVySW5QbGFjZTxUPihcbiAgICBhcnJheTogVFtdLFxuICAgIGZpbHRlcjogKGVsZW1lbnQ6IFQpID0+IGJvb2xlYW4sXG4pOiB2b2lkIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcihmaWx0ZXIpO1xuICAgIGFycmF5Lmxlbmd0aCA9IGZpbHRlcmVkLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2ldID0gZmlsdGVyZWRbaV07XG4gICAgfVxufVxuIl19