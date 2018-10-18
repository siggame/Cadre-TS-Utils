import { IBaseGameObject } from "./base-game-object";
/** The base interface that a Player implements in a game. */
export interface IBasePlayer extends IBaseGameObject {
    /** The name of the player. */
    name: string;
    /**
     * What type of client this is,
     * For potential data mining purposes.
     *
     * @example "Python", "JavaScript", or some other language.
     */
    clientType: string;
    /** The amount of time (in ns) remaining for this AI to send commands. */
    timeRemaining: number;
    /** If the player won the game or not. */
    won: boolean;
    /** If the player lost the game or not. */
    lost: boolean;
    /** The reason why the player won the game. */
    reasonWon: string;
    /** The reason why the player lost the game. */
    reasonLost: string;
}
