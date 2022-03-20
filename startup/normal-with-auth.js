"use strict";
const start = process.hrtime();

const Fastify = require("fastify");
const mercurius = require("mercurius");
const mercuriusAuth = require("..");
const { schema, resolvers } = require("../bench/normal-setup");

const app = Fastify();

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: false,
  jit: 1,
});

app.register(mercuriusAuth, {
  authContext(context) {
    return {
      identity: context.reply.request.headers["x-user"],
    };
  },
  async applyPolicy(authDirectiveAST, parent, args, context, info) {
    return context.auth.identity === "admin";
  },
  authDirective: "auth",
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
