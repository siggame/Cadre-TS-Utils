import { IBaseGameObject } from "./base-game-object";

/** The base interface that a Player impliments in a game. */
export interface IBasePlayer extends IBaseGameObject {
    /** The name of the player. */
    readonly name: string;

    /**
     * What type of client this is,
     * For potential data mining purposes.
     *
     * @example "Python", "JavaScript", or some other language.
     */
    readonly clientType: string;

    /** The amount of time (in ns) remaining for this AI to send commands. */
    readonly timeRemaining: number;

    /** If the player won the game or not. */
    readonly won: boolean;

    /** If the player lost the game or not. */
    readonly lost: boolean;

    /** The reason why the player won the game. */
    readonly reasonWon: string;

    /** The reason why the player lost the game. */
    readonly reasonLost: string;
}
