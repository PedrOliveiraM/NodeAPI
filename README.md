# Pass In ![Em Andamento](https://img.shields.io/badge/status-Pronto-green)

## Sobre

Pass In é uma aplicação de gestão de participantes para eventos presenciais. A ferramenta permite que os organizadores cadastrem eventos e criem uma página pública para inscrições. Os participantes podem se inscrever e, no dia do evento, emitir uma credencial digital para check-in. O sistema realiza um scan da credencial para autorizar a entrada, garantindo um processo eficiente e seguro de controle de acesso.

## Tecnologias

![Tecnologias](https://skillicons.dev/icons?i=typescript,nodejs,prisma,sqlite,git)

## Índice

- [Pass In ](#login-back-end-)
  - [Sobre](#sobre)
  - [Tecnologias](#tecnologias)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Extra](#extra)
  - [Contatos](#contatos)

## Funcionalidades

- **Requisitos Funcionais**
  - O organizador deve poder cadastrar um novo evento.
  - O organizador deve poder visualizar dados de um evento.
  - O organizador deve poder visualizar a lista de participantes.
  - O participante deve poder se inscrever em um evento.
  - O participante deve poder visualizar seu crachá de inscrição.
  - O participante deve poder realizar check-in no evento.

- **Regras de Negócio**
  - O participante só pode se inscrever em um evento uma única vez.
  - O participante só pode se inscrever em eventos com vagas disponíveis.
  - O participante só pode realizar check-in em um evento uma única vez.

## Instalação

- **Instalação**
  - npm install
- **Rodando o app**
  - npm run dev 

## Uso

Será utilizado para fazer o cadastro dos usuários e inscrições em eventos.
Futuramente será integrado com a parte de front-end.

## Extra
**Métodos HTTP : GET, POST, PUT, DELETE**

- Corpo da Requisição (Request Body): Dados para criação ou atualização de um registro (POST, PUT)
- Parametros de busca (Query Params): Filtros e paginação (GET)
- Parametros de rota (Route Params): Identificar um recurso na rota.
- Parametros obrigatórios , como exluir usuario.
- Cabeçalho da Requisição (Request Header): Informações sobre a requisição e contexto.

- Semântica de rotas = significado

**BANCO DE DADOS**
 - DRIVER NATIVO ( PG, MYSQL, SQLITE )
 - QUERY BUILDER ( KNEX )
 - ORM ( SEQUELIZE, PRISMAS, TYPEORM )

## Contatos

[![Instagram](https://img.shields.io/badge/Instagram-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://instagram.com/pedro.liveiram)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-oliveira-m/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pedropucmont@gmail.com)

#
