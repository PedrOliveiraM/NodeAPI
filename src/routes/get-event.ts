import { FastifyInstance } from "fastify";
import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../libs/prisma";
import { title } from "process";

export async function getEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/events/:eventId",
    {
      schema: {
        params: z.object({
          //pegando o id do evento que ta na url
          eventId: z.string().uuid(), //validando se o id é um uuid
        }),
        response: {
          200: z.object({
            event: z.object({
              id: z.string().uuid(),
              title: z.string(),
              details: z.string().nullable(),
              slug: z.string(),
              maximumAttendees: z.number().nullable(),
              attendees: z.number(),
            }),
          }),
        },
      },
    },
    async (request, reply) => {
      const { eventId } = request.params; //pegando o id do evento que ta na url

      // procurando o evento pelo id no banco de dados
      const event = await prisma.event.findUnique({
        select: {
          //quais colnas eu quero pegar
          id: true,
          title: true,
          details: true,
          slug: true,
          maximumAttendees: true,
          _count: {
            select: {
              attendees: true,
            },
          },
        },
        where: {
          id: eventId,
        },
      });

      //se evento for null ele retorna um erro de nao encontrado
      if (event === null) {
        throw new Error("Event not found");
      }

      return reply.send({
        event: {
          id: event.id,
          title: event.title,
          details: event.details,
          slug: event.slug,
          maximumAttendees: event.maximumAttendees,
          attendees: event._count.attendees,
        },
      }); // retornando o evento em forma de objeto
    }
  );
}
