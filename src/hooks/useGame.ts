import { useState } from "react";
import { usePlayer } from "./usePlayer";
import { useStage } from "./useStage";

export const useGame = () => {
    const { player } = usePlayer();
    const { stage } = useStage(player);

    return {
        display: stage,
    };
}