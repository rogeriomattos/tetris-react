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

export const isCollidedWithSomthingBlock = (player: Player, stage: BlockItem[][]) => {
    const { tetramino:{ shape }, pos } = player;
    
    const bottom = shape.length + pos.y;
    const right = shape[0].length + pos.x;

    for(let x = 0; x < shape[shape.length - 1].length; x++) {
        const pItem = shape[shape.length - 1][x];

        if(pItem === BlockTypes.FILLED) {
            console.log('stage[bottom][pos.x+index]', stage[bottom][pos.x+x]);
            if(stage[bottom][pos.x+x].type === BlockTypes.FILLED){
                console.log(`retornou`);
                return true;
            }
        }
    }

    return false;
}