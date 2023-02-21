import { createContext } from "react";
import { useGame } from "../hooks/useGame";

type GameContextType = {
    game: ReturnType<typeof useGame>;
}

export const GameContext = createContext<GameContextType>({
    game: {
        display: [[]],
        start: () => {},
        stop: () => {},
        move: () => {},
        gameOver: false,
    },
});