import { useState } from "react";
import { Times } from "../gameConfig";
import { isBorderBottomLimit, isBorderLeftLimit, isBorderRightLimit, isCollidedBottomWithSomthingBlock, isCollidedSideWithSomthingBlock } from "../utlis/gameHelpers";
import { useInterval } from "./useInterval";
import { usePlayer } from "./usePlayer";
import { useStage } from "./useStage";

export const useGame = () => {
    const [dropTime, setDropTime] = useState<number|null>(null);
    const [gameOver, setGameOver] = useState(false);
    
    const { player, updatePlayerPos, resetPlayer, setPlayerCollided } = usePlayer();
    const { stage, reactStage } = useStage(player);


    const drop = () => {
        const { x, y } = player.pos;

        let newPos = { x , y };

        if (isBorderBottomLimit(player) || isCollidedBottomWithSomthingBlock(player, stage)) {
            setPlayerCollided(true);
            if (player.pos.y < 1) {
                console.log('GAME OVER!!!');
                setGameOver(true);
                setDropTime(null);
            } else {
                setTimeout(() => {
                    resetPlayer();
                }, 50);
            }
        } else {
            newPos.y+=1;
            updatePlayerPos(newPos.x, newPos.y);
        }
        
    };

    useInterval(drop, dropTime);

    const move = ({ key  }:React.KeyboardEvent<HTMLDivElement>) => {
        console.log({key});
        if(key === 'ArrowRight' && !isBorderRightLimit(player) && !isCollidedSideWithSomthingBlock(key, player, stage)){
            updatePlayerPos(player.pos.x + 1, player.pos.y);
        }
        if(key === 'ArrowLeft' && !isBorderLeftLimit(player) && !isCollidedSideWithSomthingBlock(key, player, stage)){
            updatePlayerPos(player.pos.x - 1, player.pos.y);
        }
        if(key === 'ArrowDown' && !isBorderBottomLimit(player) && !isCollidedBottomWithSomthingBlock(player, stage)){
            updatePlayerPos(player.pos.x, player.pos.y+1);
        }
    }

    const start = () => {
        setDropTime(Times.Initial);
        setGameOver(false);
        reactStage();
        resetPlayer();
    };

    const stop = () => {
        setDropTime(null)
    };

    return {
        display: stage,
        start,
        stop,
        move,
        gameOver,
    };
}