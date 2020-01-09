module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "max-params": ["error", 3],
    "no-confusing-arrow": 0,
    "arrow-body-style": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 2,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "linebreak-style": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
