import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const history = useHistory();

    useEffect(() => {
        if (window.localStorage.getItem("@loginInfo") !== null) {
            const loginObj = JSON.parse(window.localStorage.getItem("@loginInfo"));
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

            window.localStorage.setItem("@loginInfo", JSON.stringify(loginInfo));
            history.replace(`/search/user/${login}`);
        } else {
            setError("Login ou senha inválido(s)");
            setLogin("");
            setPassword("");
        };
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
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
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClickShowPassword}>
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {error && <S.ErrorWarning>{error}</S.ErrorWarning>}
                                <S.Button>
                                    <Button 
                                        variant="contained" 
                                        fullWidth
                                        size="medium" 
                                        color="primary"
                                        type="submit"
                                        style={{ 
                                            background: "#212121", 
                                            color: "#fff",
                                            height: "2.6rem"
                                        }}
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