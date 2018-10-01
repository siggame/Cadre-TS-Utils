/** An object with all values being a certain type. */
// tslint:disable-next-line:interface-name
export interface TypedObject<T = unknown> {
    [key: string]: T | undefined;
}
