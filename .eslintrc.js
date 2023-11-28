module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "i18next", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, "jsx-attributes": { exclude: ["data-testid"] } },
    ],
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true, ignoreVoidOperator: true },
    ],
    "@typescript-eslint/prefer-includes": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  overrides: [
    {
      files: ["*.test.tsx", "*.test.ts"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
