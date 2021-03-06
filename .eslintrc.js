module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'jest'],
  // add your custom rules here
  rules: {},
}
