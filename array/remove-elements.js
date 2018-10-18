"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes a matching element from the array, if present.
 *
 * @param array - The array to attempt to remove an element from.
 * @param elements - The element(s) you want to try to remove from the array.
 * @returns The number of elements removed.
 */
function removeElements(array, ...elements) {
    let removed = 0;
    for (const element of elements) {
        const index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
            removed += 1;
        }
    }
    return removed;
}
exports.removeElements = removeElements;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWVsZW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FycmF5L3JlbW92ZS1lbGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7R0FNRztBQUNILFNBQWdCLGNBQWMsQ0FBSSxLQUFVLEVBQUUsR0FBRyxRQUFhO0lBQzFELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtRQUM1QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQztTQUNoQjtLQUNKO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQVpELHdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZW1vdmVzIGEgbWF0Y2hpbmcgZWxlbWVudCBmcm9tIHRoZSBhcnJheSwgaWYgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gYXR0ZW1wdCB0byByZW1vdmUgYW4gZWxlbWVudCBmcm9tLlxuICogQHBhcmFtIGVsZW1lbnRzIC0gVGhlIGVsZW1lbnQocykgeW91IHdhbnQgdG8gdHJ5IHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheS5cbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzPFQ+KGFycmF5OiBUW10sIC4uLmVsZW1lbnRzOiBUW10pOiBudW1iZXIge1xuICAgIGxldCByZW1vdmVkID0gMDtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmVtb3ZlZCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZWQ7XG59XG4iXX0=