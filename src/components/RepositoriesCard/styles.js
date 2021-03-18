import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20rem;
    height: 7rem;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #888888;
    margin: .5rem 0;
    cursor: pointer;
    
    h4 {
        margin-left: 1.2rem;
        color: #0077c1;
    }

    span {
        margin-left: 1.2rem;
    }

    @media(max-width: 1080px) {
        width: 48%;
    }

    @media(max-width: 720px) {
        width: 100%;
        height: 4.8rem;
        font-size: .7rem;
    }
`