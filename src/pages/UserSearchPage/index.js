import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import Header from '../../components/Header';
import api from '../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const UserSearchPage = () => {
    const [getUser, setGetUser] = useState("");
    const [user, setUser] = useState("");
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        if (window.localStorage.getItem("loginInfo") === null) {
            history.push("/");
        };
    }, [history]);

    const handleSearchUser = async () => {
        try {
            const response = await api.get(`/${getUser}`);
      
            setUser(response.data);
        } catch(e) {
            if (e.response.status === 404) {
                alert("Usuário não encontrado, digite corretamente");
            } else {
                alert("Falha ao pesquisar usuário");
            }
        }
    };

    const handleClearField = () => {
        setGetUser("");
        setUser("");
    };

    const goToRepositoriesPage = () => {
        history.push(`/repositories/${getUser}/user/${pathParams.user}`);
    };

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <S.ContainerHeader>
                    <h3>Buscar usuário no Github</h3>
                </S.ContainerHeader>
                <section>
                    <S.InputUser>
                        <TextField
                            value={getUser}
                            onChange={e => setGetUser(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            size="small"
                            label="Usuário"
                            autoFocus
                        />
                        <Button 
                            variant="contained"
                            size="medium" 
                            color="secondary"
                            onClick={handleSearchUser}
                            style={{ marginTop: '8px' }}
                        >
                            Buscar
                        </Button>
                        <Button 
                            variant="contained"
                            size="medium" 
                            color="secondary"
                            onClick={handleClearField}
                            style={{ marginTop: '8px' }}
                        >
                            Limpar
                        </Button>
                    </S.InputUser>
                </section>
                {user === "" ? 
                    <S.LogoGithub>
                        <img 
                            src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" 
                            alt="logo"
                        />
                    </S.LogoGithub> 
                    : null
                }
                <S.UserInfos visible={user}>
                    <S.UserAvatar>
                        <Avatar 
                            src={user.avatar_url}
                            alt="Avatar" 
                            style={{ 
                                width: "8rem",
                                height: "8rem"
                            }}
                        />
                    </S.UserAvatar>
                    <S.Infos>
                        <span><strong>Nome:</strong> {user.name}</span>
                        <span><strong>Repositórios:</strong> {user.public_repos}</span>
                        <span><strong>Seguidores:</strong> {user.followers}</span>
                    </S.Infos>
                </S.UserInfos>
                <S.RepositoriesButton visible={user}>
                    <Button 
                        variant="contained"
                        size="small" 
                        color="secondary"
                        onClick={goToRepositoriesPage}
                    >
                        Repositórios
                    </Button>
                </S.RepositoriesButton>
            </S.Container>
        </S.Wrapper>
    );
}

export default UserSearchPage;
