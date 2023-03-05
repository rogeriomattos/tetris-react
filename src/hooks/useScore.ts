import { useEffect, useState } from "react"

export const useScore = () => {
    const [lines, setLines] = useState(0);
    const [points, setPoints] = useState(0);
    const [level, setLevel] = useState(0);

    const resetScore = () => {
        setLines(0);
        setPoints(0);
    }
    
    const addPoints = (value: number) => setPoints(old => old + value);

    const addLinesToScore = (value: number) => {
        setLines(old => old + value);
        addPoints(value * 100);
    };

    const addBlockPoint = () => setPoints(old => old + 15);

    const levelUp = () => {
        setLevel(old => old + 1);
        addPoints(1000);
    }
    
    useEffect(() => {
        if(lines !== 0 && Math.floor(lines / 10) > level) {
            levelUp();
        }
    }, [lines]);
    

    return {
        resetScore,
        addLinesToScore,
        addBlockPoint,
        lines, 
        points,
        level,
    }
}