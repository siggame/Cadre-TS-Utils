/** A reference to a game object, which just holds the ID of the game object. */
export interface GameObjectReference {
    /**
     * A unique id for each instance of a GameObject or a sub class.
     * Used for client and server communication.
     *
     * It should never change value after being set.
     */
    id: string;
}

/** Common interface all game objects implement. */
export interface BaseGameObject extends GameObjectReference {
    /**
     * A string representing the top level Class that this game object is an
     * instance of.
     *
     * Used for reflection to create new instances on clients,
     * but exposed for convenience should AIs want this data.
     */
    gameObjectName: string;

    /**
     * Any strings logged will be stored here. Intended for debugging.
     */
    logs: string[];
}
