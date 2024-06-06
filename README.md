# Pass.in

O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos Funcionais
- O organizador deve poder cadastrar um novo evento.
- O organizador deve poder visualizar dados de um evento.
- O organizador deve poder visualizar a lista de participantes.
- O participante deve poder se inscrever em um evento.
- O participante deve poder visualizar seu crachá de inscrição.
- O participante deve poder realizar check-in no evento.

### Regras de Negócio
- O participante só pode se inscrever em um evento uma única vez.
- O participante só pode se inscrever em eventos com vagas disponíveis.
- O participante só pode realizar check-in em um evento uma única vez.

### Requisitos Não-funcionais
- (Adicionar requisitos não-funcionais aqui)


Anotações Extras 
// Métodos HTTP : GET, POST, PUT, DELETE

// Corpo da Requisição (Request Body): Dados para criação ou atualização de um registro // POST, PUT
// Parametros de busca (Query Params): Filtros e paginação // GET
// Parametros de rota (Route Params): Identificar um recurso na rota // parametros obrigatorios , como exluir usuario
// Cabeçalho da Requisição (Request Header): Informações sobre a requisição , contexto

//semantica de rotas = significado

//            BANCO DE DADOS
// DRIVER NATIVO ( PG, MYSQL, SQLITE )
// QUERY BUILDER ( KNEX )
// ORM ( SEQUELIZE, PRISMAS, TYPEORM )
