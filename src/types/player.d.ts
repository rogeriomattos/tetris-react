import { Tetramino } from "./tetramino";

declare type Player = {
    pos: {
        y: number;
        x: number;
    };
    tetramino: Tetramino;
}