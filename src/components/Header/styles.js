import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: 1080px) {
        width: 100%;
    }
`

export const User = styled.article `
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2rem;

    span {
        margin-bottom: 5px;
        margin-left: 4px;
    }

    @media(max-width: 720px) {
        margin-right: 1.5rem;
    }
`