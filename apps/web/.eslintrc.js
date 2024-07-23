/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: false,
    ecmaVersion: 2022,
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
  },
};
