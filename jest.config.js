/** @type {import('jest').Config} */

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  coverageProvider: "v8",
};

module.exports = createJestConfig(config);
