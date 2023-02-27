import { PropsWithChildren, useContext, forwardRef } from "react"
import { GameContext } from "../../context/game";
import { Container } from './styles';


export const UserKeyCapture = forwardRef<HTMLDivElement,PropsWithChildren<{}>>(({children}, ref) => {


    const { game:{ move } } = useContext(GameContext);

    return(
        <Container
            ref={ref}
            role="button"
            tabIndex={0}
            onKeyDown={move}
        >
            {children}
        </Container>
    );
});