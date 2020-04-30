module.exports = {
  "extends": "airbnb-base",
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ],
    "no-await-in-loop": "off",
    "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "camelcase": "off",
    "no-console": "off",
    "no-restricted-syntax": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "no-restricted-globals": "off"
  }
};