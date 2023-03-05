import { useCallback, useEffect, useState } from "react";
import { BlockTypes } from "../enums/blockTypes";
import { Dimensions } from "../gameConfig";
import { BlockItem } from "../types/blockItem";
import { Player } from "../types/player";
import { emptyGame, EmptyLine } from "../utlis/emptyGame";

export const useStage = (player:Player) => {
    const [stage, setStage] = useState(emptyGame);



    const removeLines = useCallback((linesToRemove:number[]) => {
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
    }, [stage]);

    const checkLineComplete = useCallback(() => {
        const linesComplete:number[] = [];
        stage.forEach((row, rowIndex) => {
            const lineIsComplete = row.filter((cell) => cell.type === BlockTypes.FILLED && !cell.isPlayer).length === Dimensions.X;
            if(lineIsComplete)
                linesComplete.push(rowIndex);
        });
        if(linesComplete.length > 0){
            removeLines(linesComplete);
        }
    }, [stage, removeLines]);

    const updateStage = useCallback(() => {
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
    }, [stage, player, checkLineComplete]);

    useEffect(() => updateStage(), [player, updateStage]);

    const restartStage = () => setStage(emptyGame);

    return {
        stage,
        restartStage,
    };
}