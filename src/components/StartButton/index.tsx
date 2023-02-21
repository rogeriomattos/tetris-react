import { useContext } from 'react';
import { GameContext } from '../../context/game';
import { Button } from './styles';

export const StartButton = () => {
    const { game } = useContext(GameContext);

    return (
        <Button onClick={game.start}>start game</Button>
    );
}