## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e como gerenciador de pacotes do NodeJS o npm. Os arquivos estão divididos
entre `components`(Header, Modal e RepositoriesCard) e as `pages` (Login,
Repositories e UserSearch) que são as páginas em si do projeto. 

## Sobre

O projeto consiste em uma aplicação frontend de buscas de usuários cadastrados 
no GitHub e exibição de seus respectivos repositórios.

- Página de Login

A interface contém os campos de entrada de dados “Login” e “Password” e um botão 
para logar, assim o usuário será redirecionado para a página de busca de usuário.

- Página de Busca de usuário

A interface contém um cabeçalho, um campo de entrada de dados “Busca de usuário”, 
um botão para buscar e um botão para limpar. Essa página só é acessada por um 
usuário logado. Caso contrário, será redirecionado para a página de login. O 
cabeçalho mostrará o usuário logado e um botão para deslogar que irá redirecionar 
para a primeira interface. Ao informar um usuário no campo “Busca de usuário” e 
clicar em buscar a aplicação irá fazer uma requisição para a API do Github, com 
o resultado da requisição, irá exibir algumas informações do usuário, assim como 
um botão “Repositórios” que redirecionará para a terceira interface.

- Página de Repositórios

A interface também possui um cabeçalho e uma listagem em cards de todos os 
repositórios do usuário pesquisado, ao clicar em um repositório irá abrir um modal 
com mais informações do repositório. Essa página também só é acessada por um 
usuário logado.

A aplicação consume APIs públicas do GitHub.
Bibliotecas: axios, styled-components e material-ui

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto

### Link para visualização da página
- https://difficult-range.surge.sh/

### Login e senha para acesso
Login: `admin` Password: `password`
