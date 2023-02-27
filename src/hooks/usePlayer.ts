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
        isCollided: false, 
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
           isCollided: false,
        });
    };   

    const rotate = () => {
        const { tetramino:{shape}, pos } = player;
        const rowLength = shape.length;
        const cellLength = shape[0].length;

        console.log({
            rowLength, 
            cellLength,
            shape,
            pos
        })
      
            
            const newShape = Array.from({ length: cellLength}).map((row, indexRow) => (
                Array.from({length: rowLength}).map((cell, indexCell) => (
                    shape[rowLength - 1 - indexCell][indexRow]
                ))
            ));
    
            setPlayer(prev => ({
                ...prev,
                tetramino: {
                    ...prev.tetramino,
                    shape: newShape,
                }
            }))
        

    }

    return {
        player,
        updatePlayerPos,
        resetPlayer,
        setPlayerCollided,
        rotate,
    };
};