import { PropsWithChildren, useContext } from "react"
import { GameContext } from "../../context/game";



export const UserKeyCapture = ({
    children
}:PropsWithChildren<{}>) => {

    const { game:{ move } } = useContext(GameContext);

    return(
        <div
            role="button"
            tabIndex={0}
            onKeyDown={move}
        >
            {children}
        </div>
    );
};