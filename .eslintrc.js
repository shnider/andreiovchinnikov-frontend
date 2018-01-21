module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    strict: 0,
    'react/jsx-filename-extension': 0, 
  },
};
