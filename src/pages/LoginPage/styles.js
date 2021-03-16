import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 30rem;
    height: 19rem;
    background: #FFFFFF;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
`

export const Header = styled.div`
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
`