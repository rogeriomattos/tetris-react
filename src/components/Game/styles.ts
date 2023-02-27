import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    box-sizing:border-box;
    max-width: 920px;
    margin: 0 auto;
    padding: 12px;
    >div {
        display: flex;
        gap: 8px;
        height: 100%;
    }
`;

export const GamePanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    height: 100%;
`;

export const DisplayContainer = styled.div`
    position: relative;
`;

export const GameOverModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    border: 1px solid #ddd;
    background: #fff;
    padding: 20px;
    font-size: 20px;
    box-shadow: 0px 5px 5px #aaa;
`;