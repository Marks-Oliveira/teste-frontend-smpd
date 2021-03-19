import React from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

import * as S from './styles';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    const history = useHistory();
    const { user } = useParams();

    const handleLogout = () => {
        window.localStorage.clear()
        history.push("/")
    };

    return (
        <S.Wrapper>
            <S.User>
                <AccountCircleIcon color="primary" />
                <span>{user}</span>
            </S.User>
            <Button 
                variant="contained"
                size="small" 
                color="primary"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </S.Wrapper>
    );
}

export default Header;