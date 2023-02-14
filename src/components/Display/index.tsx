import Block from "../Block";
import { DisplayContainer, Row } from "./styles";

const Display = () => (
    <DisplayContainer data-testid="display-container">
        {Array.from({ length: 20 }).map((row, indexRow) => (
            <Row key={indexRow} data-testid="display-row">
                {Array.from({ length: 10 }).map((block, indexBlock) => (
                    <Block key={indexBlock} />
                ))}
            </Row>
        ))}
    </DisplayContainer>
);

export default Display;