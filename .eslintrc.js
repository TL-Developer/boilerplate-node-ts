module.exports = {
  plugins: ["prettier", "@typescript-eslint"],
  extends: ["airbnb-typescript", "react-app", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "no-console": 2,
    "object-curly-spacing": ["error", "always"],
    "block-spacing": "error",
    semi: ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "space-infix-ops": ["error", { int32Hint: false }],
    "eol-last": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "no-multiple-empty-lines": "error",
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" },
    ],
    "space-before-blocks": [
      "error",
      {
        functions: "always",
        keywords: "always",
        classes: "always",
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true,
      },
    ],
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "react/jsx-key": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "src/tests/**/*",
        ],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
  },
};
