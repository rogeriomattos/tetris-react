import { useState } from "react";
import { Player } from "../types/player";
import { getRandomTetramino } from "../utlis/tetraminios";

const initialPos = {
    x: 4,
    y: 0,
}

export const usePlayer = () => {
    const [player, setPlayer] = useState<Player>({
        pos: initialPos,
        tetramino: getRandomTetramino(),
        isCollided: false
    });

    const updatePlayerPos = (x: number, y: number) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x, y },
        }))
    }

    const setPlayerCollided = (isCollided: boolean) => {
        setPlayer(prev => ({
            ...prev,
            isCollided,
        }))
    };

    const resetPlayer = () => {
        setPlayer({
           pos: initialPos,
           tetramino: getRandomTetramino(),
           isCollided: false
        });
    };   

    return {
        player,
        updatePlayerPos,
        resetPlayer,
        setPlayerCollided,
    };
};