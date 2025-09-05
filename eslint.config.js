// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-config-prettier");
const eslintPluginPrettier = require("eslint-plugin-prettier");

module.exports = defineConfig([
  expoConfig,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    files: ["*.config.js", "metro.config.js"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-require-imports": "off",
    },
    ignores: ["dist/*"],
  },
]);
