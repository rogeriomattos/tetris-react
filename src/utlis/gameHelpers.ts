import { BlockTypes } from "../enums/blockTypes";
import { Dimensions } from "../gameConfig";
import { BlockItem } from "../types/blockItem";
import { Player } from "../types/player";

export const isBorderBottomLimit = (player:Player) => {
    const { pos, tetramino } = player;
    
    return Dimensions.Y === (pos.y + tetramino.shape.length);
}

export const isBorderLeftLimit = (player: Player) => {
    const { pos } = player;
    
    return 0 === pos.x;
}

export const isBorderRightLimit = (player: Player) => {
    const { pos, tetramino } = player;
    
    return Dimensions.X === (pos.x + tetramino.shape[0].length);
}

export const isCollidedBottomWithSomthingBlock = (player: Player, stage: BlockItem[][]) => {
    const { tetramino:{ shape }, pos } = player;

    for(let y = 0; y < shape.length; y++) {
        const row = shape[y];
        for(let x = 0; x < row.length; x++) {
            const pItem = row[x];
            if(pItem === BlockTypes.FILLED) {
                const stageY = pos.y + y + 1;
                const stageBlock = stage[stageY][pos.x + x];
                
                if(stageY<=Dimensions.Y && !stageBlock.isPlayer && stageBlock.type === BlockTypes.FILLED){
                    return true;
                }
            }
        }
    }

    return false;
}

export const isCollidedSideWithSomthingBlock = (moveDir: 'ArrowRight' | 'ArrowLeft', player: Player, stage: BlockItem[][]) => {
    const { tetramino:{ shape }, pos } = player;
    
    const left = pos.x - 1;
    const right = shape[0].length - 1 + pos.x;

    for(let y = 0; y < shape.length; y++) {
        const row = shape[y];
        for(let x = 0; x < row.length; x++) {
            const pItem = row[x];
            if(pItem === BlockTypes.FILLED) {
                const stageX = (moveDir === 'ArrowLeft' ? left + x  : right + 1 );
                const stageBlock = stage[pos.y+y][stageX];
                
                if(stageX <= Dimensions.X && !stageBlock.isPlayer && stageBlock.type === BlockTypes.FILLED){
                    return true;
                }
            }
        }
    }

    return false;
}