import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Container = styled.section`
    width: 30rem;
    height: 22.8rem;
    background: #FFFFFF;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column; 

    @media(max-width: 1080px) {
        width: 55%;
    }

    @media(max-width: 720px) {
        width: 80%;
        height: 50%;
    }
`

export const ContainerHeader = styled.div`
    background: #000000;
    width: 100%;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 1080px) {
        font-size: .8rem;
    }

    @media(max-width: 720px) {
        font-size: .7rem;
    }
`

export const InputUser = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 720px) {
        padding: 0 .5rem;
        flex-direction: column;
    }
`

export const LogoGithub = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .8rem;

    img {
        width: 30%;
        height: 65%;
        opacity: .3;
    }
`

export const UserInfos = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    display: ${props => props.visible !== "" ? 'flex' : 'none'};
`

export const UserAvatar = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1080px) {
        width: 50%;
    }

    @media(max-width: 720px) {
        width: 60%;
    }
`

export const Infos = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;

    span {
        padding: .5rem 0;
        font-size: 1.1rem;

        @media(max-width: 720px) {
            font-size: .7rem;
            padding-right: .1rem;
        }
    }
`

export const RepositoriesButton = styled.div`
    width: 100%;
    justify-content: flex-end;
    padding: .8rem 1rem;
    display: ${props => props.visible !== "" ? 'flex' : 'none'};
`
