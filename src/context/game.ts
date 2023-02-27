import { createContext, useRef } from "react";
import { useGame } from "../hooks/useGame";

type GameContextType = {
    game: ReturnType<typeof useGame>;
    userKeyCaptureRef?: React.RefObject<HTMLDivElement>;
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