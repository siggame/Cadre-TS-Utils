"use strict";
// tslint:disable:no-any no-unsafe-any
// any is allowed for comparison usage (>, <, ===)
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a newly sorted array of the passed in array.
 * The passed in array is not changed.
 *
 * @param array - The array to form a sorted one from.
 * @param getVal - An optional callback to get the value from each item to
 * compare against.
 * @returns A new array that is the sorted form of the passed in array.
 */
function sortedAscending(array, getVal) {
    return array.slice().sort((a, b) => {
        let first = a;
        let second = b;
        if (getVal) {
            first = getVal(first);
            second = getVal(second);
        }
        if (first > second) {
            return 1;
        }
        if (first < second) {
            return -1;
        }
        return 0; // a must be equal to b
    });
}
exports.sortedAscending = sortedAscending;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVkLWFzY2VuZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcnJheS9zb3J0ZWQtYXNjZW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0M7QUFDdEMsa0RBQWtEOztBQUVsRDs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLGVBQWUsQ0FDM0IsS0FBdUIsRUFDdkIsTUFBNEI7SUFFNUIsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUksS0FBSyxHQUFRLENBQUMsQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBUSxDQUFDLENBQUM7UUFFcEIsSUFBSSxNQUFNLEVBQUU7WUFDUixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUF2QkQsMENBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IG5vLXVuc2FmZS1hbnlcbi8vIGFueSBpcyBhbGxvd2VkIGZvciBjb21wYXJpc29uIHVzYWdlICg+LCA8LCA9PT0pXG5cbi8qKlxuICogUmV0dXJucyBhIG5ld2x5IHNvcnRlZCBhcnJheSBvZiB0aGUgcGFzc2VkIGluIGFycmF5LlxuICogVGhlIHBhc3NlZCBpbiBhcnJheSBpcyBub3QgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gZm9ybSBhIHNvcnRlZCBvbmUgZnJvbS5cbiAqIEBwYXJhbSBnZXRWYWwgLSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBnZXQgdGhlIHZhbHVlIGZyb20gZWFjaCBpdGVtIHRvXG4gKiBjb21wYXJlIGFnYWluc3QuXG4gKiBAcmV0dXJucyBBIG5ldyBhcnJheSB0aGF0IGlzIHRoZSBzb3J0ZWQgZm9ybSBvZiB0aGUgcGFzc2VkIGluIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkQXNjZW5kaW5nPFQ+KFxuICAgIGFycmF5OiBSZWFkb25seUFycmF5PFQ+LFxuICAgIGdldFZhbD86IChlbGVtZW50OiBUKSA9PiBhbnksXG4pOiBUW10ge1xuICAgIHJldHVybiBhcnJheS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IGZpcnN0OiBhbnkgPSBhO1xuICAgICAgICBsZXQgc2Vjb25kOiBhbnkgPSBiO1xuXG4gICAgICAgIGlmIChnZXRWYWwpIHtcbiAgICAgICAgICAgIGZpcnN0ID0gZ2V0VmFsKGZpcnN0KTtcbiAgICAgICAgICAgIHNlY29uZCA9IGdldFZhbChzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdCA8IHNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7IC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgfSk7XG59XG4iXX0=