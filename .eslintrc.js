module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
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
  plugins: ["react", "i18next"],
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
