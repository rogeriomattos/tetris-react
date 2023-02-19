import { useEffect, useState } from "react";
import { BlockTypes } from "../enums/blockTypes";
import { Player } from "../types/player";
import { emptyGame } from "../utlis/emptyGame";

export const useStage = (player:Player) => {
    const [stage, setStage] = useState(emptyGame);


    const updateStage = () => {
        const newStage = stage;

        const { pos } = player;
        player.tetramino.shape.forEach((row, x) => {
            row.forEach((cell, y) => {
                newStage[pos.x + x][pos.y + y] = {
                    type: cell,
                    color: player.tetramino.color,
                };
            });
        });

        console.log({player});
        console.log(`updateStage`, {newStage});
        setStage([...newStage]);
    };

    useEffect(() => updateStage(), [player]);

    return {
        stage
    };
}