/**
 * Checks if an object has a given property.
 *
 * @param obj - The object to check in.
 * @param property - The name of the property (key) to check for.
 * @returns True if the property is present in the object, false otherwise.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function objectHasProperty<T extends {}, P extends string | number>(
    obj: T,
    property: P,
): obj is T & { [K in P]-?: unknown } {
    return Boolean(obj) && Object.prototype.hasOwnProperty.call(obj, property);
}
