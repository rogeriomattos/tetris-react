import { useContext, useRef } from 'react';
import { GameContext } from '../../context/game';
import { Button } from './styles';

export const StartButton = () => {
    const { game, userKeyCaptureRef } = useContext(GameContext);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOnclick = () => {
        userKeyCaptureRef?.current?.focus();
        game.start();
    }

    return (
        <Button ref={buttonRef} onClick={handleOnclick}>start game</Button>
    );
}