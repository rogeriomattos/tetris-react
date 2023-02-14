import styled from 'styled-components';

export const BlockContainer = styled.div`
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    border-color: #000000;
    border-width: 2px;
    border-style: solid;
    box-sizing: border-box;
    position: relative;
    opacity: 0.1;
    border-radius: 2px;
    &:after {
        content: "";
        position: absolute;
        background: #000;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 2px;
    }
`;