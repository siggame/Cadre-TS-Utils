/**
 * Strictly checks for a given key type of a known shape in an object.
 *
 * @param obj - The object to check in.
 * @param property - The name of the property (key) to check for.
 * @returns True if the property is present in the object, false otherwise.
 */
export function objectHasProperty<T extends object, K extends keyof T>(
    obj: T,
    property: K,
): obj is (T & Required<Pick<T, K>>);

/**
 * Less type safe version for checking if a given object has ANY key.
 *
 * @param obj - The object to check in.
 * @param property - The name of the property (key) to check for.
 * @returns True if the property is present in the object, false otherwise.
 */
export function objectHasProperty<T extends object>(
    obj: T,
    property: string,
): T;

/**
 * Checks if an object has a given property.
 *
 * @param obj - The object to check in.
 * @param property - The name of the property (key) to check for.
 * @returns True if the property is present in the object, false otherwise.
 */
export function objectHasProperty<T extends object, K extends keyof T>(
    obj: T,
    property: K,
): obj is (T & Required<Pick<T, K>>) {
    return Boolean(obj)
        // tslint:disable-next-line:no-unsafe-any
        && Object.prototype.hasOwnProperty.call(obj, property);
}
