import fastify from "fastify";
import { serializerCompiler, validatorCompiler} from "fastify-type-provider-zod";
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent); // rota para criar o evento
app.register(registerForEvent); // rota para registrar um evento
app.register(getEvent); // rota para pegar os dados do evento
app.register(getAttendeeBadge); // rota para pegar os dados do evento

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server is running on port 3333");
});
