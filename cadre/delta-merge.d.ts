/**
 * These constants will be sent to clients from the server.
 * They are used to understand how to merge delta states.
 */
export interface IDeltaMergeConstants {
    /**
     * Special symbol that indicates a delta's key was removed when this value
     * is present.
     */
    DELTA_REMOVED: string;
    /**
     * A special key that indicates the object is an array with the value being
     * the array's length.
     */
    DELTA_LIST_LENGTH: string;
}
