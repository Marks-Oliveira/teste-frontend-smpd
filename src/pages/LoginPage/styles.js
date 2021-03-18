import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 30rem;
    height: 22.6rem;
    background: #FFFFFF;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;

    @media(max-width: 1080px) {        
        width: 50%;
        height: 44.5%;
    }

    @media(max-width: 720px) {
        width: 80%;
        height: 44.2%;
    }
`

export const ContainerHeader = styled.div`
    position: absolute;
    background: #000000;
    width: 100%;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        @media(max-width: 1080px) {
            font-size: 1.3rem;
        }
        
        @media(max-width: 720px) {
            font-size: 1.2rem;
        }
    }
`

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px; 
`

export const Inputs = styled.article`
    margin-top: 10px;
    padding: 0 25px;
`

export const ErrorWarning = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: red;
    font-size: 0.8rem;
`;

export const Button = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`