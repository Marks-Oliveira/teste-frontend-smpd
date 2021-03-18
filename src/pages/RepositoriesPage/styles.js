import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: ${props => props.visible === true ? 'hidden' : 'visible'};
`

export const LogoGithub = styled.div`
    padding: 5rem 4rem 0;
    display: flex;
    align-items: center;

    img {
        width: 3%;
        height: 100%;
        border-radius: 80px;
    }

    span {
        padding-left: 5px;
        font-size: 1.2rem;
    }
`

export const Cards = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    width: 91%;
    margin: 0 4rem;
    margin-top: 1rem;
    padding-bottom: 2rem;
`