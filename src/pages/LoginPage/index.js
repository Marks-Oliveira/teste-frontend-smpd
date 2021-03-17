import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const history = useHistory();

    useEffect(() => {
        if (window.localStorage.getItem("loginInfo") !== null) {
            const loginObj = JSON.parse(window.localStorage.getItem("loginInfo"));
            history.replace(`/search/user/${loginObj.login}`);
        }
    }, [history, login])

    const handleLogin = (event) => {
        event.preventDefault();

        if (login === "admin" && password === "password") {
            const loginInfo = {
                login: login,
                password: password
            };

            window.localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
            history.replace(`/search/user/${login}`);
        } else {
            setError("Login ou senha inválido(s)");
        };
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.ContainerHeader>
                    <h2>Login</h2>
                </S.ContainerHeader>
                <S.Content>
                    <Avatar>
                        <LockOutlinedIcon color='secondary'/>
                    </Avatar>
                        <S.Inputs>
                            <form onSubmit={handleLogin}>
                                <TextField
                                    value={login}
                                    onChange={e => setLogin(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Login"
                                    autoFocus
                                />
                                <TextField
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                />
                                {error && <S.ErrorWarning>{error}</S.ErrorWarning>}
                                <S.Button>
                                    <Button 
                                        variant="contained" 
                                        fullWidth
                                        size="medium" 
                                        color="primary"
                                        type="submit"
                                    >
                                        Entrar
                                    </Button>
                                </S.Button>
                            </form>
                        </S.Inputs>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
}

export default LoginPage;