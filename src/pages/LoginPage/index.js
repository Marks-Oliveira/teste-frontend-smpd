import React from 'react';

import * as S from './styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';

const LoginPage = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Header>
                    <h2>Login</h2>
                </S.Header>
                <S.Content>
                    <Avatar>
                        <LockOutlinedIcon color='secondary'/>
                    </Avatar>
                    <S.Inputs>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Login"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                        />
                    </S.Inputs>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
}

export default LoginPage;