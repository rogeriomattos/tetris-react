import { BlockTypes } from "../enums/blockTypes";

const { EMPTY, FILLED } = BlockTypes;

export const TETROMINOS: tetraminioList = {
    I: {
        shape: [
            [
                EMPTY, FILLED, EMPTY, EMPTY
            ],
            [
                EMPTY, FILLED, EMPTY, EMPTY
            ],
            [
                EMPTY, FILLED, EMPTY, EMPTY
            ],
            [
                EMPTY, FILLED, EMPTY, EMPTY
            ],
        ],
        color: '#000',
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
        color: '#000',
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
        color: '#000',
    }, 
    J: {
        shape: [
            [
                EMPTY, FILLED, EMPTY,
            ],
            [
                EMPTY, FILLED, EMPTY,
            ],
            [
                FILLED, FILLED, EMPTY,
            ],
        ],
        color: '#000',
    }, 
    L: {
        shape: [
            [
                EMPTY, FILLED, EMPTY,
            ],
            [
                EMPTY, FILLED, EMPTY,
            ],
            [
                EMPTY, FILLED, FILLED,
            ],
        ],
        color: '#000',
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
        color: '#000',
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
        color: '#000',
    }, 
    
};

export const getRandomTetramino = () => {
    const possibilities:Array<'Z'|'I'|'S'|'L'|'J'|'O'|'T'> = ['Z', 'I','J','L','O','S','T'];

    const index = Math.floor(Math.random() * 6);
    
    return  TETROMINOS[possibilities[index]];
}