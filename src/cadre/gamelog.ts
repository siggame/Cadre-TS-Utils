import { UnknownObject } from "../types/unknown-object";
import { IDeltaMergeConstants } from "./delta-merge";
import { Delta } from "./deltas";

/** The shape of a gamelog, both being built and if read from memory. */
export interface IGamelog {
    /**
     * The name of the game
     *
     * Use this to figure out how to parse game structure.
     */
    gameName: string;

    /**
     * The session identifier used on the game server for this game's session.
     */
    gameSession: string;

    /** The Unix epoch for the time when this gamelog was generated */
    epoch: number;

    /**
     * Key/Value pairs that describe the settings used to initialize the game.
     */
    settings: UnknownObject & {
        /** The random seed used for server side random logic. */
        randomSeed: string;
    };

    /** The list of all players that won this game (normally just one). */
    winners: IGamelogWinnerLoser[];

    /** The list of all players that lost this game (normally just one). */
    losers: IGamelogWinnerLoser[];

    /** Lookup of constants used to parse game server <-> client IO. */
    constants: IDeltaMergeConstants;

    /**
     * The list of all deltas in the game. The first delta being the initial
     * state.
     */
    deltas: Delta[];
}

/** A shorthand object representing a player that won or lost in the game. */
export interface IGamelogWinnerLoser {
    /** The player's index in the game.players array. */
    index: number;

    /** The player's GameObject id. */
    id: string;

    /** The name of the player. */
    name: string;

    /** The reason this player won or lost. */
    reason: string;

    /** Indicates if they disconnected unexpectedly before the game was over */
    disconnected: boolean;

    /** Indicates if they timed out before the game was over. */
    timedOut: boolean;
}
