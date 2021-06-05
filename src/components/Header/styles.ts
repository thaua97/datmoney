import styled from 'styled-components';

export const Container = styled.header`
    background: var(--purple);
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        color: var(--shape);
        background: var(--purple-light);
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;