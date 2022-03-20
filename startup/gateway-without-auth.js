"use strict";
const start = process.hrtime();

const Fastify = require("fastify");
const mercurius = require("mercurius");

const app = Fastify();

app.register(mercurius, {
  gateway: {
    services: [
      {
        name: "user",
        url: "http://localhost:3001/graphql",
      },
      {
        name: "post",
        url: "http://localhost:3002/graphql",
      },
    ],
  },
  graphiql: false,
  jit: 1,
});

const loadingTime = process.hrtime(start);
app.listen(3000, () => {
  const listenTime = process.hrtime(start);
  require("fs").writeFileSync(
    `${__filename}.txt`,
    `${loadingTime} | ${listenTime}\n`,
    { encoding: "utf-8", flag: "a" }
  );
  app.close();
});