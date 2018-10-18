"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shuffles this array randomly IN PLACE.
 *
 * @see http://stackoverflow.com/a/6274381/944727
 * @param array - The array to shuffle IN PLACE.
 * @param rng - A callback that is a random number generator,
 * must generate numbers [0, 1).
 * @returns This array.
 */
function shuffle(array, rng) {
    // tslint:disable-next-line:curly
    for (let j, x, i = array.length; i; 
    // tslint:disable-next-line ban-comma-operator
    j = Math.floor(rng() * i),
        x = array[--i],
        array[i] = array[j],
        array[j] = x)
        ;
}
exports.shuffle = shuffle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1ZmZsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcnJheS9zaHVmZmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixPQUFPLENBQUksS0FBVSxFQUFFLEdBQWlCO0lBQ3BELGlDQUFpQztJQUNqQyxLQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLDhDQUE4QztJQUM5QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25CLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQztBQUNOLENBQUM7QUFWRCwwQkFVQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2h1ZmZsZXMgdGhpcyBhcnJheSByYW5kb21seSBJTiBQTEFDRS5cbiAqXG4gKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyNzQzODEvOTQ0NzI3XG4gKiBAcGFyYW0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gc2h1ZmZsZSBJTiBQTEFDRS5cbiAqIEBwYXJhbSBybmcgLSBBIGNhbGxiYWNrIHRoYXQgaXMgYSByYW5kb20gbnVtYmVyIGdlbmVyYXRvcixcbiAqIG11c3QgZ2VuZXJhdGUgbnVtYmVycyBbMCwgMSkuXG4gKiBAcmV0dXJucyBUaGlzIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZTxUPihhcnJheTogVFtdLCBybmc6ICgpID0+IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjdXJseVxuICAgIGZvciAoXG4gICAgICAgIGxldCBqLCB4LCBpID0gYXJyYXkubGVuZ3RoOyBpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgYmFuLWNvbW1hLW9wZXJhdG9yXG4gICAgICAgIGogPSBNYXRoLmZsb29yKHJuZygpICogaSksXG4gICAgICAgIHggPSBhcnJheVstLWldLFxuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdLFxuICAgICAgICBhcnJheVtqXSA9IHhcbiAgICApO1xufVxuIl19