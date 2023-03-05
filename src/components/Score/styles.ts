import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    >div {
        display: flex;
        justify-content: space-between;
    } 
`;