/** The valid types you can expect from parsed JSON. */
export declare type Json = JsonObject | JsonArray | string | number | boolean | null;
/** An object (map) in JSON. */
export interface JsonObject {
    [member: string]: string | number | boolean | null | JsonArray | JsonObject | undefined;
}
/** An array in JSON. */
export interface JsonArray extends Array<string | number | boolean | null | JsonArray | JsonObject> {
}
