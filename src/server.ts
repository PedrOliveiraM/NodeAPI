import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient({
  log: ["query"],
});

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

app.post("/events", async (request, reply) => {
  //fazendo a verificação
  const createEventSchema = z.object({
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
  });

  //criando o objeto
  const data = createEventSchema.parse(request.body);

  //criando o evento com as info passada na requisição
  const event = await prisma.event.create({
    data: {
      title: data.title,
      details: data.details,
      maximumAttendees: data.maximumAttendees,
      slug: new Date().toISOString(),
    },
  });
  return reply.code(201).send({ eventId: event.id });
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server is running on port 3333");
});
