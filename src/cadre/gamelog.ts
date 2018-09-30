import { UnknownObject } from "../object/unknown-object";
import { IGameObjectReference } from "./base-game-object";
import { RunEvent } from "./events/client";
import { OrderEvent } from "./events/server";

/** The shape of a gamelog, both being built and if read from memory. */
export interface IGamelog {
    /**
     * The name of the game.
     * Use this to figure out how to parse game structure
     */
    gameName: string;

    /**
     * The session identifier used on the game server for this game's session
     */
    gameSession: string;

    /** The Unix epoch for the time when this gamelog was generated */
    epoch: number;

    /**
     * Key/Value pairs that describe the settings used to initialize the game.
     */
    settings: UnknownObject;

    /** The list of all players that won this game (normally just one) */
    winners: IGamelogWinnerLoser[];

    /** The list of all players that lost this game (normally just one) */
    losers: IGamelogWinnerLoser[];

    /** Lookup of constants used to parse game server <-> client IO */
    constants: UnknownObject & {
        /** The random seed used for server side random logic. */
        randomSeed: string;
    };

    /**
     * The list of all deltas in the game. The first delta being the initial
     * state
     */
    deltas: IDelta[];
}

/** A delta represents a change in game state */
export interface IDelta {
    /** The type of delta, or reason it occurred */
    type: string;

    /**
     * Meta data about why the delta occurred, such as data sent to the server
     * from a game client
     */
    data?: IDisconnectDeltaData |
           IRanDeltaData |
           IOrderedDeltaData |
           IFinishedDeltaData;

    /**
     * The state of the game, but ONLY changed keys.
     *
     * A game delta is probably the most complex part of understanding
     * communication in the cadre framework. Refer to these docs for more help:
     * https://github.com/siggame/Cadre/blob/master/gamelog-format.md#deltas
     */
    game: UnknownObject;
}

/** Data about why a player disconnected. */
export interface IDisconnectDeltaData {
    /** The player that disconnected */
    player: IGameObjectReference;

    /**
     * If they disconnected because they timed out, and the game server was
     * forced to disconnect them, or if their end disconnected unexpectedly.
     */
    timeout: boolean;
}

/** Data about what game logic got ran. */
export interface IRanDeltaData {
    /** The player that requested this game logic be ran. */
    player: IGameObjectReference;

    /** The data about what was requested be run. */
    run: RunEvent["data"];

    /** A human reable string explaining why this run was invalid. */
    invalid?: string;

    /**
     * The value returned from the run function from the game server
     * to the game client.
     */
    returned: unknown;
}

/** Data about a player being ordered to do something. */
export interface IOrderedDeltaData {
    /** The player that was ordered. */
    player: IGameObjectReference;

    /** The order data they were sent. */
    order: OrderEvent["data"];
}

/** Data bout a player finishing an order. */
export interface IFinishedDeltaData {
    /** The player that said they finished an order. */
    player: IGameObjectReference;

    /** The data about the order they finished. */
    order: OrderEvent["data"];

    /** An optional return value they returned. */
    returned?: unknown;

    /**
     * A message to the human player as to why what they finished
     * (probably the returned value) is invalid.
     */
    invalid?: string;
}

/** A shorthand object representing a player that won or lost in the game */
export interface IGamelogWinnerLoser {
    /** The player's index in the game.players array */
    index: number;

    /** The player's GameObject id */
    id: string;

    /** The name of the player */
    name: string;

    /** The reason this player won or lost */
    reason: string;

    /** Indicates if they disconnected unexpectedly before the game was over */
    disconnected: boolean;

    /** Indicates if they timed out before the game was over */
    timedOut: boolean;
}

/** An eassier to deduce type for why a delta occured. */
export type DeltaReason = Partial<
    IDisconnectDeltaData &
    IRanDeltaData &
    IOrderedDeltaData &
    IFinishedDeltaData
>;
