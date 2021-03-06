module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
