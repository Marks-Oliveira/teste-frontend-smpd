import React, { useState } from 'react';

import Modal from '../Modal';

import * as S from './styles';

const RepositoriesCard = ({reposItem, modalVisible}) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        modalVisible();
        setModal(!modal);
    };

    return (
        <S.Wrapper onClick={handleModal}>
            <h4>{reposItem.name}</h4>
            <span>{reposItem.language}</span>
            {modal ? (
                <Modal modalItem={reposItem} />
            ) 
                : null
            }
        </S.Wrapper>
    );
}

export default RepositoriesCard;
