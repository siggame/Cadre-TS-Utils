import { UnStringified } from "./un-stringified";

/**
 * Tries to cast a string to a primitive value if it looks like one.
 *
 * @param value - The value to try to cast. Will only work on strings.
 * @returns Value as a number if it appears to be a number,
 * or value as a boolean if it appears to be 'true' or 'false',
 * or just value back as a string.
 */
export function unStringify(value: UnStringified): UnStringified {
    if (typeof value === "string") {
        switch (value.toUpperCase()) { // check for booleans
            case "TRUE":
                return true;
            case "FALSE":
                return false;
            case "NULL":
                return null;
        }

        // check if number
        const asNumber = Number(value);
        if (!isNaN(asNumber)) {
            return asNumber;
        }

        // looks like a string after all
    }

    return value;
}
