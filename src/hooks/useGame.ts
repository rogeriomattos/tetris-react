import { useState } from "react"
import { emptyGame } from "../utlis/emptyGame";

export const useGame = () => {
    const [display, setDisplay] = useState(emptyGame);

    return {
        display,
    };
}