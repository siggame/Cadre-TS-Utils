/**
 * The basic event structure clients and the server send to each other.
 *
 * Each message must implement this interface for communication to be
 * successful.
 */
export interface IEvent<E extends string, D extends unknown> {
    /** The string name of the event that occurred. */
    event: E;
    /** Data aboout the event. */
    data: D;
    /** An optional epoch for when the event was sent. */
    sentTime?: number;
}
