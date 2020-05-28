/**
 * These are events the clients sends to the server.
 * Client ---> Server.
 */

import { GameObjectReference } from "../base-game-object";
import { Event } from "./event";

/** Sent from the client when they "finished" an order. */
export type FinishedEvent = Event<
    "finished",
    {
        /** The index (id) of the order that was finished by this client. */
        orderIndex: number;

        /** What value they returned from said function executing. */
        returned: unknown;
    }
>;

/** Sent from the client when they want the game server to "run" logic. */
export type RunEvent = Event<
    "run",
    {
        /** The reference to the game object requesting a function to be run. */
        caller: GameObjectReference;

        /** The name of the function of the caller to run. */
        functionName: string;

        /**
         * The arguments to said function, as a map of the argument name to its
         * value.
         */
        args: { [key: string]: unknown };
    }
>;

/**
 * Sent from a client to the Lobby about what that client wants to play.
 *
 * All optional keys can be null or undefined for an "unset" value.
 */
export type PlayEvent = Event<
    "play",
    {
        /**
         * The name (id) of the game to play. Assume this is an alias before using.
         */
        gameName: string;

        /**
         * An identifier for the game session you the client wants to play in.
         * If omitted it means they want to play in the first available session
         * of that game.
         */
        requestedSession?: string | null;

        /** The programming language this client is. */
        clientType: string;

        /** The un-parsed url parm game settings string. */
        gameSettings?: string | null;

        /**
         * If this client wants complete deltas instead of normal game deltas.
         *
         * This means instead of just the game delta, the data about why the delta
         * occurred is sent as well.
         */
        metaDeltas?: boolean | null;

        /** The name the of player the client is working on behalf of. */
        playerName?: string | null;

        /**
         * The preferred player index this client wants to play as. By default if
         * this is omitted the first player to connect is the first player in the
         * game, however clients can override that by sending a number, so if the
         * second player to connect sends 0, then they will be the first player in
         * the game.
         *
         * **NOTE:** (0 is first, not 1, think zero-based array indexes).
         */
        playerIndex?: number | null;

        /**
         * If the game server has authentication enabled, this is the password to
         * be allowed to play on said server.
         */
        password?: string | null;

        /**
         * If set to true, then this client is treated as a spectator and will not
         * play, but will still be sent information about the game as it progresses.
         *
         * Any other value will be treated as false (such as omitting the key).
         */
        spectating?: boolean | null;
    }
>;

/**
 * Sent from the client when they want to know the game name for a given
 * string game alias.
 */
export type AliasEvent = Event<"alias", string>;

// ------------------------------------------------------------------------- \\

/** One of the possible events that a client can send to its server. */
export type ClientEvent = AliasEvent | PlayEvent | RunEvent | FinishedEvent;
