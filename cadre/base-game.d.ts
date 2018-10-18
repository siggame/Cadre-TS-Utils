import { IBaseGameObject } from "./base-game-object";
import { IBasePlayer } from "./base-player";
/**
 * An object mapping of every game object's ID to the actual game object.
 *
 * Primarily used by the server and client to easily refer to the game objects
 * via id.
 */
export interface IGameObjects {
    [id: string]: IBaseGameObject | undefined;
}
/** Represents a state of the game overall */
export interface IBaseGame {
    /**
     * A mapping of every game object's ID to the actual game object.
     *
     * Primarily used by the server and client to easily refer to the game
     * objects via ID.
     */
    gameObjects: IGameObjects;
    /** List of all the players in the game. */
    players: IBasePlayer[];
    /** A unique identifier for the game instance that is being played. */
    session: string;
}
