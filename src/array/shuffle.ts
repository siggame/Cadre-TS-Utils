/**
 * Shuffles this array randomly IN PLACE.
 *
 * @see http://stackoverflow.com/a/6274381/944727
 * @param array - The array to shuffle IN PLACE.
 * @param rng - A callback that is a random number generator,
 * must generate numbers [0, 1).
 * @returns This array.
 */
export function shuffle<T>(array: T[], rng: () => number): void {
    // tslint:disable-next-line:curly
    for (
        let j, x, i = array.length; i;
        // tslint:disable-next-line ban-comma-operator
        j = Math.floor(rng() * i),
        x = array[--i],
        array[i] = array[j],
        array[j] = x
    );
}
