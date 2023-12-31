/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config", 
    "@remix-run/eslint-config/node",
    "airbnb",
    "airbnb-typescript",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],

  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["jsx-a11y", "prettier"],
  "rules": {
    // allow tsx and jsx extensions to have jsx
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".jsx", ".tsx"]
      }
    ],

    // prefer typescript for our typechecking, and https://redux.js.org/introduction/core-concepts for the rest
    "react/no-unused-prop-types": 0,

    // prefer typescript for our typechecking
    "react/prop-types": 0,

    // typescript allows us to spread props more predictably although some options are problematic
    "react/jsx-props-no-spreading": [
      2,
      {
        "html": "enforce", // html spread can be problematic
        "custom": "ignore",
        "explicitSpread": "enforce" // this usage is not very readable/useful
      }
    ],

    // prefer typescript for typechecking
    "react/require-default-props": 0
  }
};
