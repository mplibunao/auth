"use strict";

const { Worker } = require("worker_threads");
const path = require("path");

const minSamples = 5;

const runSample = (cb) => {
  return async () => {
    for (let i = 0; i < minSamples; ++i) {
      await cb();
    }
  };
};

const measureGatewayWithAuth = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./gateway-with-auth.js")).on(
      "exit",
      resolve
    );
  });
});

const measureGatewayWithoutAuth = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./gateway-without-auth.js")).on(
      "exit",
      resolve
    );
  });
});

const measureNormalWithAuth = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./normal-with-auth.js")).on(
      "exit",
      resolve
    );
  });
});

const measureNormalWithoutAuth = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./normal-without-auth.js")).on(
      "exit",
      resolve
    );
  });
});

measureGatewayWithAuth()
  .then(measureNormalWithAuth)
  .then(measureNormalWithoutAuth)
  .then(measureGatewayWithoutAuth);
