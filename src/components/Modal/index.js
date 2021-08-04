import React from 'react';

import * as S from './styles';

const Modal = ({modalItem}) => {

    return (
        <S.Wrapper>
            <S.Container>
                <S.CloseButton>
                    <button>X</button>
                </S.CloseButton>
                <S.Content>
                    <S.User>
                        <img 
                            src="https://camo.githubusercontent.com/d3563008ac544a830a26cd54e8add19decb3299ef11712c071b44c8d01ec8ac2/68747470733a2f2f63646e332e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f696e6669636f6e732f3531322f6769746875622e706e67" 
                            alt="logo"
                        />
                        <span><em>github.com/{modalItem.full_name}</em></span>
                    </S.User>
                    <S.UserInfos>
                        <p><em><strong>Forks:</strong> {modalItem.forks}</em></p>
                        <p><em><strong>Stars:</strong> {modalItem.stargazers_count}</em></p>
                    </S.UserInfos>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
}

export default Modal;
