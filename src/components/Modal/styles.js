import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.8);
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 35%;
    height: 20%;
    background-color: #fff;
    border-radius: 10px;

    @media(max-width: 1080px) {
        width: 44%;
        height: 8.5rem;
    }

    @media(max-width: 720px) {
        width: 60%;
        height: 7rem;
        font-size: .7rem;
    }
`

export const CloseButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
        background-color: transparent;
        border: none;
        outline: none;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: bold;
        color: #0077c1;
        cursor: pointer;
    }
`

export const Content = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
`

export const User = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    margin-left: 1rem;

    img {
        width: 6%;
        height: 100%;
        border-radius: 80px;
    }

    span {
        margin-left: .2rem;
    }

    @media(max-width: 1080px) {
        img {
            width: 1.2rem;
        }
    }

    @media(max-width: 720px) {
        img {
            width: 1rem;
        }
    }
`

export const UserInfos = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    p {
        margin: 0 2rem;
    }

    @media(max-width: 720px) {
        margin-left: 1rem;

        p {
            margin: 0 1rem;
        }
    }
`