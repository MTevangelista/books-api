<p align="center">
   <img width="300px" src="https://fontmeme.com/permalink/200924/8171dccef49261a94d2e4debbeba0fa7.png" alt="Books-API" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/VSCode-v1.43.2-blue" />
  <img src="https://img.shields.io/badge/Yarn-v1.22.4-lightblue" />
  <img src="https://img.shields.io/badge/Typescript-v4.0.2-blue" />
  <img src="https://img.shields.io/badge/NodeJs-v12.16.2-green" />
  <img src="https://img.shields.io/badge/Express-v4.17.1-lightgrey" />
  <img src="https://img.shields.io/badge/MongoDB-v4.2.9-lightgreen" />
  <img src="https://img.shields.io/badge/Mongoose-v5.10.5-lightgrey" />
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [API](#api)
     - [Models](#models)
  - [Frontend](#frontend)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)

## Sobre o Projeto

A proposta do projeto é um CRUD de books. A aplicação contém as seguintes funcionalidades:

- Validar se já existe um slug cadastrado no banco de dados;
- Cadastrar livro;
- Listar livro;
- Listar livro por slug;
- Editar livro;
- Apagar livro;

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [Visual Studio Code](https://code.visualstudio.com/) - O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

- [Yarn](https://yarnpkg.com/) - Yarn é um gerenciador de pacotes que também atua como gerente de projeto. Quer você trabalhe em projetos únicos ou grandes monorepos, como um aquarista ou um usuário corporativo, temos o que você precisa.

- [Typescript](https://www.typescriptlang.org/) - TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript.

- [Node.js](https://nodejs.org/en/) - Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente (frontend) para os servidores, criando aplicações de alta escalabilidade (como um servidor web), manipulando milhares de conexões/eventos simultâneas em tempo real numa única máquina física.

- [Express](https://expressjs.com/pt-br/) - O Express.js, ou simplesmente o Express, é uma estrutura de aplicativo da Web para o Node.js, lançada como software livre e de código aberto sob a Licença MIT. Ele foi projetado para criar aplicativos da Web e APIs. Foi chamado de estrutura de servidor padrão de fato para o Node.js.

- [MongoDB](https://www.mongodb.com/) - MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.

- [Mongoose](https://mongoosejs.com/) - Mongoose é uma ferramenta de modelagem de objeto MongoDB projetada para funcionar em um ambiente assíncrono. Suporta promessas e retornos de chamada. Como também, fornece uma solução direta e baseada em esquema para modelar os dados do aplicativo. Ele inclui conversão de tipo incorporada, validação, criação de consultas, ganchos de lógica de negócios e muito mais, prontos para uso.

## Começando

Para conseguir utilizar ou visualizar o projeto, seja através do Visual Studio Code ou outro editor de código, siga os passos abaixo:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
- É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
- É **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
books-api/
├── src/
│     ├── controllers/
│     │            └── PlaceController.ts
│     ├── database/
│     │          └── db.ts
│     ├── models/
│     │       └── book.ts
│     │
│     ├── repositories/
│     │             └── PlaceRepository.ts
│     ├── app.ts
│     ├── routes.ts
│     └── server.ts
├── .editorconfig
├── .env
├── eslintignore
├── eslintrc.json
├── .gitignore
├── .prettier
├── babel.config.js
├── package.json
├── Procfile
├── README.md
├── tsconfig.json
└──yarn.lock
```

### Instalação

Para instalar esse projeto, o processo é bem simples. Basta utilizar o seguinte comando no terminal:

```bash
# Clone este repositório
$ git clone https://github.com/MTevangelista/books-api.git
```

### API

- Rode a API
```bash
# Instale as depedencias
$ yarn ou npm install

# Rode a aplicação
$ yarn dev ou npm run dev

# O servidor inciará na porta: 3333 - acesse http://localhost:3333
```

- Link do deploy da api: https://books-backend-api.herokuapp.com/

#### Models

- Book

 Field | Type | Description
------|------|-----
imageUrl | String | Url da imagem do livro.
author | String | O nome do autor do livro.
title | String | Título do livro.
**slug** | String | Identificador único de cada livro.
theme | String | Tema do livro.
description | String | Descrição do livro.
createdAt | String | Data de criação do livro.

Exemplo de um GET: https://books-backend-api.herokuapp.com/api/books

Exemplo de um GET BY SLUG: https://books-backend-api.herokuapp.com/api/books/:slug

Exemplo de um POST: https://books-backend-api.herokuapp.com/api/books
 ```javascript
{
	"imageUrl": "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__340.jpg",
	"author": "Robert C. Martin",
	"title": "Código Limpo",
	"slug": "clean-code3",
	"theme": "Tecnologia",
	"description": "Mesmo códigos ruins podem funcionar. Mas se o código não estiver limpo, ele pode deixar uma organização de desenvolvimento de joelhos. Todos os anos, incontáveis  horas e recursos significativos são perdidos devido a códigos mal escritos. Mas não precisa ser assim.",
	"createdAt": "2020-09-21"
}
```

Exemplo de um PUT: https://books-backend-api.herokuapp.com/api/books/api/books/:_id
 ```javascript
{
	"imageUrl": "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__340.jpg",
	"author": "Novo nome",
	"title": "Novo title",
	"theme": "Novo",
	"description": "Todos os anos, incontáveis horas e recursos significativos são perdidos devido a códigos mal escritos. Mas não precisa ser assim.",
	"createdAt": "2010-08-21"
}
```

Exemplo de um DELETE: https://books-backend-api.herokuapp.com/api/books/api/books/:_id

### Frontend

O front-end do projeto foi desenvolvido com: Javascript, Vue.Js, Vue Router e Vuex.

- Link do deploy do frontend: https://books-web.vercel.app/

- Repositório do projeto: https://github.com/MTevangelista/books-web

---

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

## Contato

👤  **Matheus Evangelista**

[![Github Badge](https://img.shields.io/badge/-Github-000?style=round-square&logo=Github&logoColor=white&link=https://github.com/MTevangelista)](https://github.com/MTevangelista)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=round-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheus01/)](https://www.linkedin.com/in/matheus01/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=round-square&logo=Gmail&logoColor=white&link=mailto:matheusevangelistadev@gmail.com)](mailto:matheusevangelistadev@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-ba164a?style=round-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/_matheusrj/?hl=pt-br)](https://www.instagram.com/_matheusrj/?hl=pt-br)
