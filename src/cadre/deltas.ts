import { UnknownObject } from "../types/unknown-object";
import { BaseGame } from "./base-game";
import { GameObjectReference } from "./base-game-object";
import { RunEvent } from "./events/client";
import { OrderEvent } from "./events/server";

/**
 * The base shape all deltas implement.
 */
export interface BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: string;

    /**
     * Meta data about why the delta occurred, such as data sent to the server
     * from a game client.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    data?: object;

    /**
     * The state of the game, but ONLY changed keys.
     *
     * A game delta is probably the most complex part of understanding
     * communication in the cadre framework. Refer to these docs for more help:
     * https://github.com/siggame/Cadre/blob/master/gamelog-format.md#deltas.
     */
    game: Partial<BaseGame & UnknownObject>;
}

/**
 * Always the first delta in a game, occurs when the game starts.
 *
 * An order delta should follow.
 */
export interface StartDelta extends BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: "start";

    /** No data for start deltas. */
    data: undefined;
}

/**
 * Data about a player being ordered to do something.
 *
 * NOTE: this means an order was sent, not finished.
 */
export interface OrderDelta extends BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: "order";

    /** Data about why the order occurred. */
    data: {
        /** The player that was ordered. */
        player: GameObjectReference;

        /** The order data they were sent. */
        order: OrderEvent["data"];
    };
}

/** Delta about what game logic got ran. */
export interface RanDelta extends BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: "ran";

    /** Data about why the run/ran occurred. */
    data: {
        /** The player that requested this game logic be ran. */
        player: GameObjectReference;

        /** The data about what was requested be run. */
        run: RunEvent["data"];

        /** A human readable string explaining why this run was invalid. */
        invalid?: string;

        /**
         * The value returned from the run function from the game server
         * to the game client.
         */
        returned: unknown;
    };
}

/** Data bout a player finishing an order. */
export interface FinishedDelta extends BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: "finished";

    /** Data about what order they finished. */
    data: {
        /** The player that said they finished an order. */
        player: GameObjectReference;

        /** The data about the order they finished. */
        order: OrderEvent["data"];

        /** An optional return value they returned. */
        returned?: unknown;

        /**
         * A message to the human player as to why what they finished
         * (probably the returned value) is invalid.
         */
        invalid?: string;
    };
}

/**
 * Delta about why a player disconnected.
 *
 * This does not occur if both AIs play a game correctly.
 */
export interface DisconnectDelta extends BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: "disconnect";

    /** Data about why the disconnect occurred. */
    data: {
        /** The player that disconnected. */
        player: GameObjectReference;

        /**
         * If they disconnected because they timed out, and the game server was
         * forced to disconnect them, or if their end disconnected unexpectedly.
         */
        timeout: boolean;
    };
}

/** Always the last delta in a game, occurs when the game is over. */
export interface OverDelta extends BaseDelta {
    /** The type of delta, or reason it occurred. */
    type: "over";

    /** No data for over deltas. */
    data: undefined;
}

/** A Delta in the game. Each delta is expected to be one of these types. */
export type Delta =
    | StartDelta
    | OrderDelta
    | RanDelta
    | FinishedDelta
    | DisconnectDelta
    | OverDelta;
