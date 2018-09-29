/**
 * These are events the server sends to clients.
 * Server ---> Client
 */

import { IDeltaMergeConstants } from "../delta-merge";

/** Sent to clients when the game is over. For the "over" event. */
export interface IOverData {
    /** An absoulte URL to the gamelog as JSON. */
    gamelogURL: string;

    /**
     * An absolute URL to the visualizer that will automatically playback this
     * gamelog.
     */
    visualizerURL?: string;

    /** A message to tell the client about why the game is over. */
    message?: string;
}

/** Sent to clients when the game has started. For the "start" event. */
export interface IStartData {
    /**
     * The GameObject.id of the player they control. If they are a spectator
     * this will be undefined, as they have no player.
     */
    playerID?: string;
}

/**
 * Sent to clients when they need to run an order (function).
 * For the "order" event.
 */
export interface IOrderData {
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
}

/**
 * Sent to clients when something they send gameplay wise is invalid.
 * For the "invalid" event.
 */
export interface IInvalidData {
    /** Human readable message as to why it is invalid. */
    message: string;

    /** Data about why it is invalid, if any. */
    data?: unknown;
}

/**
 * Sent to clients when they join a Lobby but the game has not started.
 * For the "lobbied" event.
 */
export interface ILobbiedData {
    /** The actual name (id) of the game you will be playing. */
    gameName: string;

    /** The game session (id) of the game you will be playing. */
    gameSession: string;

    /** Constants used to facilitate game IO communication. */
    constants: IDeltaMergeConstants;
}

/**
 * Sent to clients when something happens that is so bad, they must be
 * forcefully disconnected. For the "fatal" event.
 */
export interface IFatalData {
    /**
     * Message about why the fatal event occured.
     *
     * Most likely either the game server had a fatal exception it could not
     * recover from, or the client sent some seriously spooky data that caused
     * the game server to force disconnect it.
     */
    message?: string;
}
