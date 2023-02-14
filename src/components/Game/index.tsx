import { useGame } from "../../hooks/useGame";
import Display from "../Display";
import { GameContext } from '../../context/game';


const GameComponent = () => {
    const game = useGame();

    return (
        <GameContext.Provider value={{
            game
        }}>
            <Display />
        </GameContext.Provider>
    );
};

export default GameComponent;