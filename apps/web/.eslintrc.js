/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      project: true,
    },
    project: false,
    ecmaVersion: 2022,
    sourceType: "script",
  },
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: [".eslintrc.cjs", ".*.js", "node_modules/", "dist/"],
  extends: ["plugin:@next/next/recommended", "eslint:recommended"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
  },
};
