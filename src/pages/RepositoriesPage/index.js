import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router";

import api from '../../services/api';
import Header from '../../components/Header';
import RepositoriesCard from '../../components/RepositoriesCard';

import * as S from './styles';

const RepositoriesPage = () => {
    const [divHidden, setDivHidden] = useState(false);
    const [repos, setRepos] = useState("");
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        if (window.localStorage.getItem("loginInfo") === null) {
            history.push("/");
        };
    }, [history]);

    useEffect(() => {
        getRepositories();
    }, []);

    const getRepositories = async () => {
        try {
            const response = await api.get(`/${pathParams.userGithub}/repos`);
      
            setRepos(response.data);
        } catch(e) {
            alert("Falha ao carregar repositórios");
        }
    };

    const modalVisible = () => {
        setDivHidden(!divHidden);
    };

    return (
        <S.Wrapper visible={divHidden}>
            <Header />
            <S.LogoGithub>
                <img 
                    src="https://camo.githubusercontent.com/d3563008ac544a830a26cd54e8add19decb3299ef11712c071b44c8d01ec8ac2/68747470733a2f2f63646e332e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f696e6669636f6e732f3531322f6769746875622e706e67" 
                    alt="logo"
                />
                <span><em>/{pathParams.userGithub}</em></span>
            </S.LogoGithub> 
            <S.Cards>
                {repos && 
                    repos.map((item, index) => {
                        return <RepositoriesCard 
                                    key={index} 
                                    reposItem={item}
                                    modalVisible={() => modalVisible()}
                                />
                    })
                }
            </S.Cards>
        </S.Wrapper>
    );
}

export default RepositoriesPage;
