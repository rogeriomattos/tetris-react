import { useGame } from "../../hooks/useGame";
import Display from "../Display";
import { GameContext } from '../../context/game';
import { UserKeyCapture } from "../UserKeyCapture";
import { StartButton } from "../StartButton";
import { Container, GamePanel } from "./styles";

const GameComponent = () => {
    const game = useGame();

    return (
        <GameContext.Provider value={{
            game
        }}>
            <UserKeyCapture>
                <Container>
                    <Display />
                    <GamePanel>
                        <StartButton />
                        {/* <button onClick={game.stop}>stop</button> */}
                    </GamePanel>
                </Container>    
            </UserKeyCapture>
        </GameContext.Provider>
    );
};

export default GameComponent;