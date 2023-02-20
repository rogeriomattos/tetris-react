import { useGame } from "../../hooks/useGame";
import Display from "../Display";
import { GameContext } from '../../context/game';
import { UserKeyCapture } from "../UserKeyCapture";


const GameComponent = () => {
    const game = useGame();

    return (
        <GameContext.Provider value={{
            game
        }}>
            <UserKeyCapture>
                <button onClick={game.start}>start</button>
                <button onClick={game.stop}>stop</button>
                <Display />
            </UserKeyCapture>
        </GameContext.Provider>
    );
};

export default GameComponent;