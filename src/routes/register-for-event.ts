import { Attendee } from "./../../node_modules/.prisma/client/index.d";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../libs/prisma";

export async function registerForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events/:eventId/attendees",
    {
      // rota
      schema: {
        body: z.object({
          name: z.string().min(4), // tipo string com no minimo 4 caracteres
          email: z.string().email(), // tipo string com formato de email
        }),
        params: z.object({
          // parametros da requisição
          eventId: z.string().uuid(), // tipo string com formato de uuid
        }),
        response: {
          // resposta da requisição
          201: z.object({
            attendeeId: z.number(), // tipo number
          }),
        },
      },
    },
    async (request, reply) => {
      const { eventId } = request.params; // pegando o id do evento
      const { name, email } = request.body; // pegando o nome e email do participante
      //verificando se o evento existe!!!
      //cadastrar o participante
      // verificar se é unico , senao for retorna NULL
      const AttendeeFromEmail = await prisma.attendee.findUnique({
        where: {
          email_eventId: {
            email,
            eventId,
          },
        },
      });

      if (AttendeeFromEmail !== null) {
        throw new Error("Attendee with same email already exists");
      }

      const [event, amoutOfAttendeesForEvent] = await Promise.all([
        prisma.event.findUnique({
          where: {
            // prisma , procure um evento com o id igual ao id passado na requisição
            id: eventId,
          },
        }),

        prisma.attendee.count({
          // conte a quantidade de attendee que tem o id do evento igual ao id passado na requisição
          where: {
            eventId,
          },
        }),
      ]);

      // se numero de participantes for maior que o numero maximo de participantes
      if (
        event?.maximumAttendees &&
        amoutOfAttendeesForEvent >= event?.maximumAttendees
      ) {
        // se o numero de participantes for maior que o numero maximo de participantes
        throw new Error("Event is full");
      }

      const attende = await prisma.attendee.create({
        data: {
          name,
          email,
          eventId,
        },
      });
      return reply.code(201).send({ attendeeId: attende.id });
    }
  );
}
