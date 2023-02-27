import { useGame } from "../../hooks/useGame";
import Display from "../Display";
import { GameContext } from '../../context/game';
import { UserKeyCapture } from "../UserKeyCapture";
import { StartButton } from "../StartButton";
import { Container, DisplayContainer, GameOverModal, GamePanel } from "./styles";
import { useRef } from "react";

const GameComponent = () => {
    const game = useGame();
    const userKeyCaptureRef = useRef<HTMLDivElement>(null);

    return (
        <GameContext.Provider value={{
            game,
            userKeyCaptureRef
        }}>
            <Container>
                <UserKeyCapture ref={userKeyCaptureRef}>
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
                </UserKeyCapture>
            </Container>    
        </GameContext.Provider>
    );
};

export default GameComponent;