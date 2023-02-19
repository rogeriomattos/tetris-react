import styled from 'styled-components';
import { BlockTypes } from '../../enums/blockTypes';

type BlockContainerProps = {
    blockColor?: string;
    type: BlockTypes;
};

export const BlockContainer = styled.div<BlockContainerProps>`
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    border-color: ${(props) => props.blockColor && props.type === BlockTypes.FILLED ? props.blockColor : `#000000`};
    border-width: 2px;
    border-style: solid;
    box-sizing: border-box;
    position: relative;
    opacity: ${(props) => props.blockColor && props.type === BlockTypes.FILLED ? `1` : `0.1`};
    border-radius: 2px;
    &:after {
        content: "";
        position: absolute;
        background: ${(props) => props.blockColor && props.type === BlockTypes.FILLED ? props.blockColor : `#000000`};
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 2px;
    }
`;