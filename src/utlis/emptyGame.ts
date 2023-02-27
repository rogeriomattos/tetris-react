import { BlockTypes } from "../enums/blockTypes";
import { BlockItem } from "../types/blockItem";
import { Dimensions} from '../gameConfig';

export const emptyGame: BlockItem[][] = Array.from({length: Dimensions.Y}).map(
    () => Array.from({length: Dimensions.X}).map(() => ({
        type: BlockTypes.EMPTY
    }))
);

export const EmptyLine: BlockItem[] = Array.from({length: Dimensions.X }).map(() => ({
    type: BlockTypes.EMPTY
}));