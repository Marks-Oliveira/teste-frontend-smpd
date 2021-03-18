import React from 'react';

import * as S from './styles';

const RepositoriesCard = ({reposItem}) => {

    return (
        <S.Wrapper>
            <h4>{reposItem.name}</h4>
            <span>{reposItem.language}</span>
        </S.Wrapper>
    );
}

export default RepositoriesCard;
