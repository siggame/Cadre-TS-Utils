/**
 * These are events the clients sends to the server.
 * Client ---> Server
 */

import { IGameObjectReference } from "../base-game-object";

/** Data clients send with a "finished" event */
export interface IFinishedData {
    /** The index (id) of the order that was finished by this client. */
    orderIndex: number;

    /** What value they returned from said function executing. */
    returned: unknown;
}

/** Data clients second with a "run" event */
export interface IRunData {
    /** The reference to the game object requesting a function to be run. */
    caller: IGameObjectReference; // tslint:disable-line:no-banned-terms

    /** The name of the function of the caller to run. */
    functionName: string;

    /**
     * The arguments to said function, as a map of the argument name to its
     * value.
     */
    args: { [key: string]: unknown };
}

/** Sent from a client to the Lobby about what that client wants to play */
export interface IPlayData {
    /**
     * The name (id) of the game to play. Assume this is an alias before using.
     */
    gameName: string;

    /**
     * An identifier for the game session you the client wants to play in.
     * If omitted it means they want to play in the first available session
     * of that game.
     */
    requestedSession: string;

    /** The programming language this client is. */
    clientType: string;

    /** The un-parsed url parm game settings string. */
    gameSettings: string;

    /** The name the of player the client is working on behalf of. */
    playerName: string;

    /**
     * The preferred player index this client wants to play as. By default if
     * this is omitted the first player to connect is the first player in the
     * game, however clients can override that by sending a number, so if the
     * second player to connect sends 0, then they will be the first player in
     * the game.
     *
     * **NOTE:** (0 is first, not 1, think zero-based array indexes)
     */
    playerIndex?: number;

    /**
     * If the game server has authentication enabled, this is the password to
     * be allowed to play on said server.
     */
    password?: string;

    /**
     * If set to true, then this client is treated as a spectator and will not
     * play, but will still be sent information about the game as it progresses.
     * Any other value will be treated as false (such as omitting the key).
     */
    spectating?: boolean;
}
