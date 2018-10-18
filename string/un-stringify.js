"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tries to cast a string to a primitive value if it looks like one.
 *
 * @param value - The value to try to cast. Will only work on strings.
 * @returns Value as a number if it appears to be a number,
 * or value as a boolean if it appears to be 'true' or 'false',
 * or just value back as a string.
 */
function unStringify(value) {
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
exports.unStringify = unStringify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW4tc3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cmluZy91bi1zdHJpbmdpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLEtBQW9CO0lBQzVDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUscUJBQXFCO1lBQ2hELEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksQ0FBQztZQUNoQixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxLQUFLLENBQUM7WUFDakIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ25CO1FBRUQsa0JBQWtCO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sUUFBUSxDQUFDO1NBQ25CO1FBRUQsZ0NBQWdDO0tBQ25DO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXJCRCxrQ0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVblN0cmluZ2lmaWVkIH0gZnJvbSBcIi4uL3R5cGVzL3VuLXN0cmluZ2lmaWVkXCI7XG5cbi8qKlxuICogVHJpZXMgdG8gY2FzdCBhIHN0cmluZyB0byBhIHByaW1pdGl2ZSB2YWx1ZSBpZiBpdCBsb29rcyBsaWtlIG9uZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gdHJ5IHRvIGNhc3QuIFdpbGwgb25seSB3b3JrIG9uIHN0cmluZ3MuXG4gKiBAcmV0dXJucyBWYWx1ZSBhcyBhIG51bWJlciBpZiBpdCBhcHBlYXJzIHRvIGJlIGEgbnVtYmVyLFxuICogb3IgdmFsdWUgYXMgYSBib29sZWFuIGlmIGl0IGFwcGVhcnMgdG8gYmUgJ3RydWUnIG9yICdmYWxzZScsXG4gKiBvciBqdXN0IHZhbHVlIGJhY2sgYXMgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1blN0cmluZ2lmeSh2YWx1ZTogVW5TdHJpbmdpZmllZCk6IFVuU3RyaW5naWZpZWQge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7IC8vIGNoZWNrIGZvciBib29sZWFuc1xuICAgICAgICAgICAgY2FzZSBcIlRSVUVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgXCJGQUxTRVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJOVUxMXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiBudW1iZXJcbiAgICAgICAgY29uc3QgYXNOdW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKGFzTnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFzTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9va3MgbGlrZSBhIHN0cmluZyBhZnRlciBhbGxcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG4iXX0=