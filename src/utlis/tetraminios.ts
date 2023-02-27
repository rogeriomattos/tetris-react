import { BlockTypes } from "../enums/blockTypes";

const { EMPTY, FILLED } = BlockTypes;

export const TETRAMINiOS: tetraminioList = {
    I: {
        shape: [
            [
                FILLED,
            ],
            [
                FILLED,
            ],
            [
                FILLED,
            ],
            [
                FILLED,
            ],
        ],
        color: '#aa32aa',
    },
    O: {
        shape: [
            [
                FILLED, FILLED,
            ],
            [
                FILLED, FILLED,
            ],
        ],
        color: '#89e03b',
    }, 
    T: {
        shape: [
            [
                FILLED, FILLED, FILLED,
            ],
            [
                EMPTY, FILLED, EMPTY,
            ],
        ],
        color: '#fccc00',
    }, 
    J: {
        shape: [
            [
                EMPTY, FILLED, 
            ],
            [
                EMPTY, FILLED, 
            ],
            [
                FILLED, FILLED,
            ],
        ],
        color: '#fe9000',
    }, 
    L: {
        shape: [
            [
                FILLED, EMPTY,
            ],
            [
                FILLED, EMPTY,
            ],
            [
                FILLED, FILLED,
            ],
        ],
        color: '#ff00ae',
    }, 
    S: {
        shape: [
            [
                EMPTY, FILLED, FILLED,
            ],
            [
                FILLED, FILLED, EMPTY,
            ],
        ],
        color: '#26b550',
    }, 
    Z: {
        shape: [
            [
                FILLED, FILLED, EMPTY,
            ],
            [
                EMPTY, FILLED, FILLED,
            ],
        ],
        color: '#4b1ee1',
    }, 
    
};

export const getRandomTetramino = () => {
    const possibilities:Array<'Z'|'I'|'S'|'L'|'J'|'O'|'T'> = ['Z', 'I','J','L','O','S','T'];

    const index = Math.floor(Math.random() * 7);
    
    return  TETRAMINiOS[possibilities[index]];
}