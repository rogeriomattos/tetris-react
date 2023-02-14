import { useContext } from "react";
import { GameContext } from "../../context/game";
import Block from "../Block";
import { DisplayContainer, Row } from "./styles";

const Display = () => {
    const { game } = useContext(GameContext);
    const { display:displayGame } = game;

    return(
        <DisplayContainer data-testid="display-container">
            {displayGame.map((row, indexRow) => (
                <Row key={indexRow} data-testid="display-row">
                    {row.map((block, indexBlock) => (
                        <Block key={indexBlock} {...block} />
                    ))}
                </Row>
            ))}
        </DisplayContainer>
    );
}

export default Display;