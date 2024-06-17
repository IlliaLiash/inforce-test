module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist"],
  plugins: ["@typescript-eslint", "react", "prettier", "react-refresh"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleAttributePerLine: true,
      },
    ],
    "react/jsx-max-props-per-line": [1, { when: "always" }],
    "@typescript-eslint/no-unused-vars": "warn",
    "implicit-arrow-linebreak": "warn",
    "object-curly-newline": "off",
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: false,
      },
    ],
    "@typescript-eslint/quotes": "off",
    "linebreak-style": 0,
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "import/extensions": [
      "warn",
      "always",
      {
        ignorePackages: true,
      },
    ],
    "react/function-component-definition": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
};
