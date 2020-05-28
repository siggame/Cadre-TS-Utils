import { BaseGameObject } from "./base-game-object";
import { BasePlayer } from "./base-player";

/**
 * An object mapping of every game object's ID to the actual game object.
 *
 * Primarily used by the server and client to easily refer to the game objects
 * via id.
 */
export interface GameObjects {
    [id: string]: BaseGameObject | undefined;
}

/** Represents a state of the game overall. */
export interface BaseGame {
    /**
     * A mapping of every game object's ID to the actual game object.
     *
     * Primarily used by the server and client to easily refer to the game
     * objects via ID.
     */
    gameObjects: GameObjects;

    /** List of all the players in the game. */
    players: BasePlayer[];

    /** A unique identifier for the game instance that is being played. */
    session: string;
}
