const fastify = require("fastify")({ logger: true });
fastify.register(require("@fastify/swagger"), {
  exposeRoute: true,
  routePrefix: "/documentation",
  swagger: {
    info: { title: "fastify-api" },
  },
});
fastify.register(require("./routes/items"));
const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
