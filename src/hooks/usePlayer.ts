import { useState } from "react";
import { Player } from "../types/player";
import { getRandomTetramino, TETROMINOS } from "../utlis/tetraminios";

export const usePlayer = () => {
    const [player, setPlayer] = useState<Player>({
        pos: { x: 0, y: 4 },
        tetramino: getRandomTetramino(),
    });

    return {
        player
    };
};