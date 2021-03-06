/** The valid types you can expect from parsed JSON. */
export type Json = JsonObject | JsonArray | string | number | boolean | null;

/** An object (map) in JSON. */
export interface JsonObject {
    [key: string]:
        | string
        | number
        | boolean
        | null
        | JsonArray
        | JsonObject
        | undefined; // if the key is invalid
}

/** An array in JSON. */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray
    extends Array<string | number | boolean | null | JsonArray | JsonObject> {}
