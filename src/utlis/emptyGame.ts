import { BlockTypes } from "../enums/blockTypes";
import { BlockItem } from "../types/blockItem";


export const emptyGame: BlockItem[][] = Array.from({length: 20}).map(
    () => Array.from({length:10}).map(() => ({
        type: BlockTypes.EMPTY
    }))
);