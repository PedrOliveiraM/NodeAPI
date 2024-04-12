import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { generateSlug } from "../utils/generate-slug";
import { prisma } from "../libs/prisma";

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events",
    {
      schema: {
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable(),
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      //criando o objeto
      const { title, details, maximumAttendees } = request.body;

      // slug
      const slug = generateSlug(title);

      // verificar se é unico , senao for retorna NULL
      const evenWIthSameSlug = await prisma.event.findUnique({
        where: {
          slug,
        },
      });

      if (evenWIthSameSlug !== null) {
        throw new Error("Event with same slug already exists");
      }

      //criando o evento com as info passada na requisição
      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
        },
      });
      return reply.code(201).send({ eventId: event.id });
    }
  );
}
