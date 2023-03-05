import { useContext } from "react"
import { GameContext } from "../../context/game"
import { Container } from "./styles"

export const Score = () => {

    const { game: { score: { level, lines, points} } } = useContext(GameContext);

    return(
        <Container>
            <div>
                <span>Pontos</span><span>{points}</span>
            </div>
            <div>
                <span>Linhas</span><span>{lines}</span>
            </div>
            <div>
                <span>Level</span><span>{level}</span>
            </div>
        </Container>
    )
}