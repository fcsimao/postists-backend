module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'Linebreak-style': 0,
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
  },
}
