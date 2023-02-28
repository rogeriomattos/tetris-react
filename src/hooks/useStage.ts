import { useEffect, useState } from "react";
import { BlockTypes } from "../enums/blockTypes";
import { Dimensions } from "../gameConfig";
import { BlockItem } from "../types/blockItem";
import { Player } from "../types/player";
import { emptyGame, EmptyLine } from "../utlis/emptyGame";

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
        checkLineComplete();
    };

    useEffect(() => updateStage(), [player]);

    const restartStage = () => setStage(emptyGame);

    const checkLineComplete = () => {
        const linesComplete:number[] = [];
        stage.forEach((row, rowIndex) => {
            const lineIsComplete = row.filter((cell) => cell.type === BlockTypes.FILLED && !cell.isPlayer).length === Dimensions.X;
            if(lineIsComplete)
                linesComplete.push(rowIndex);
        });
        if(linesComplete.length > 0){
            removeLines(linesComplete);
        }
    }

    const removeLines = (linesToRemove:number[]) => {
        const newStage:BlockItem[][] = [];

        stage.forEach((row, indexRow) => {
            if(!linesToRemove.includes(indexRow)){
                newStage.push(row);
            }
        });

        for(let i = 0; i < linesToRemove.length; i++){
            newStage.unshift(EmptyLine);
        }

        setStage(newStage);
    }

    return {
        stage,
        restartStage,
    };
}