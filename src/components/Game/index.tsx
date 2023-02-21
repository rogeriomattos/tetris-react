import { useGame } from "../../hooks/useGame";
import Display from "../Display";
import { GameContext } from '../../context/game';
import { UserKeyCapture } from "../UserKeyCapture";
import { StartButton } from "../StartButton";
import { Container, DisplayContainer, GameOverModal, GamePanel } from "./styles";

const GameComponent = () => {
    const game = useGame();

    return (
        <GameContext.Provider value={{
            game
        }}>
            <UserKeyCapture>
                <Container>
                    <DisplayContainer>
                        <Display />
                        {game.gameOver &&
                        <GameOverModal>
                            Game over
                        </GameOverModal>}
                    </DisplayContainer>
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