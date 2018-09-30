/**
 * These are events the server sends to clients.
 * Server ---> Client
 */

import { IDeltaMergeConstants } from "../delta-merge";
import { IDelta } from "../gamelog";
import { IEvent } from "./event";

/**
 * Sent from the server to clients when the game is over.
 *
 * This is always the final event in a normal game.
 */
export type OverEvent = IEvent<"over", {
    /** An absoulte URL to the gamelog as JSON. */
    gamelogURL: string;

    /**
     * An absolute URL to the visualizer that will automatically playback this
     * gamelog.
     */
    visualizerURL?: string;

    /** A message to tell the client about why the game is over. */
    message?: string;
}>;

/**
 * Sent to clients when the game has started. For the "start" event.
 * Always sent after "lobbied".
 */
export type StartEvent = IEvent<"start", {
    /**
     * The GameObject.id of the player they control. If they are a spectator
     * this will be undefined, as they have no player.
     */
    playerID?: string;
}>;

/**
 * Sent to clients when they need to run an order (function).
 * For the "order" event.
 */
export type OrderEvent = IEvent<"order", {
    /** Name of the function to execute on their AI. */
    name: string;

    /**
     * Basically an ID of the order so they can tell us when they finished it.
     */
    index: number;

    /**
     * Arguments to the order, in order to be passed to said function.
     *
     * @example ["foo", "bar", 1337] -> ai.order[name]("foo", "bar", 1337)
     */
    args: Array<unknown>;
}>;

/**
 * Sent to clients when something they send gameplay wise is invalid.
 * For the "invalid" event.
 */
export type InvalidEvent = IEvent<"invalid", {
    /** Human readable message as to why it is invalid. */
    message: string;

    /** Data about why it is invalid, if any. */
    data?: unknown;
}>;

/**
 * Send from the server to a client once they are in a game lobby,
 * but before a game starts.
 */
export type LobbiedEvent = IEvent<"lobbied", {
    /** The actual name (id) of the game you will be playing. */
    gameName: string;

    /** The game session (id) of the game you will be playing. */
    gameSession: string;

    /** Constants used to facilitate game IO communication. */
    constants: IDeltaMergeConstants;
}>;

/**
 * Returned to a client once some game logic has ben "ran" for it. The data
 * is the return value of that run event sent.
 */
export type RanEvent = IEvent<"ran", unknown>;

/**
 * Triggers after serialized game logic finished and the game state changed
 * in some way. The data of the delta is a partial of the game in delta format.
 */
export type DeltaEvent = IEvent<"delta", IDelta["game"]>;

/**
 * The same as a normal delta event, but the data is the entire delta, instead
 * of just the game state. Intended for spectators who want the entire
 * gamelog instead just game data.
 */
export type MetaDeltaEvent = IEvent<"meta-delta", IDelta>;

/**
 * Sent from the game server to a single client once a game alias has been
 * "named" to it's game name (id)
 */
export type NamedEvent = IEvent<"named", string>;

/**
 * Sent to clients when something happens that is so bad, they must be
 * forcefully disconnected. For the "fatal" event.
 */
export type FatalEvent = IEvent<"fatal", {
    /**
     * Message about why the fatal event occured.
     *
     * Most likely either the game server had a fatal exception it could not
     * recover from, or the client sent some seriously spooky data that caused
     * the game server to force disconnect it.
     */
    message?: string;
}>;
