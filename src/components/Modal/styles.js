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
    margin-left: 2rem;

    img {
        width: 6%;
        height: 100%;
        border-radius: 80px;
    }

    span {
        margin-left: .2rem;
    }
`

export const UserInfos = styled.div`
    width: 86.8%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-left: 2rem;

    p {
        margin: 0 2rem;
    }
`