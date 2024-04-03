import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  // estou criando uma rota
  return "hello world rota ";
});

app.get("/teste", () => {
  // estou criando minha 2 rota
  return "Minha 2 rota";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server is running on port 3333");
});
