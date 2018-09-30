/** The types that JSON.parse can output. */
export type ParsedJSON
    = number
    | string
    | boolean
    | null
    | { [key: string]: ParsedJSON }
    // ParsedJSON[] - unfortunately creates a cycle :(
;
