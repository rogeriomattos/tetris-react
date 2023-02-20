import { useGame } from "../../hooks/useGame";
import Display from "../Display";
import { GameContext } from '../../context/game';


const GameComponent = () => {
    const game = useGame();

    return (
        <GameContext.Provider value={{
            game
        }}>
            <button onClick={game.start}>start</button>
            <button onClick={game.stop}>stop</button>
            <Display />
        </GameContext.Provider>
    );
};

export default GameComponent;