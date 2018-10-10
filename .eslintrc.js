module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'standard'
  ],
  'plugins': [
    'jsx-a11y'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'config/webpack.config.base.js'
      }
    },
    'react': {
      'version': '16.5.2'
    }
  },
  'rules': {
    'jsx-a11y/label-has-for': 0
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'es6': true
  }
}