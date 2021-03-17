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
`

export const InputUser = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const LogoGithub = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30%;
        height: 60%;
        opacity: .4;
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
    }
`

export const RepositoriesButton = styled.div`
    width: 100%;
    justify-content: flex-end;
    padding: .8rem 1rem;
    display: ${props => props.visible !== "" ? 'flex' : 'none'};
`
