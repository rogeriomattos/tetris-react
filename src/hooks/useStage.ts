import { useEffect, useState } from "react";
import { BlockTypes } from "../enums/blockTypes";
import { Player } from "../types/player";
import { emptyGame } from "../utlis/emptyGame";

export const useStage = (player:Player) => {
    const [stage, setStage] = useState(emptyGame);


    const updateStage = () => {
        const newStage = stage.map(row => row.map(cell => (
            cell.isPlayer? {type: BlockTypes.EMPTY}: cell
        )));

        const { pos } = player;
        player.tetramino.shape.forEach((row, y) => {
            row.forEach((cell, x) => {
                if(cell === BlockTypes.FILLED)
                    newStage[pos.y + y][pos.x + x] = {
                        type: cell,
                        color: player.tetramino.color,
                        isPlayer: !player.isCollided,
                    };
            });
        });

        setStage([...newStage]);
    };

    useEffect(() => updateStage(), [player]);

    const reactStage = () => setStage(emptyGame);

    return {
        stage,
        reactStage,
    };
}