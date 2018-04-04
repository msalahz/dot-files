module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
    jquery: true
  },
  globals: {
    module: true
  },
  rules: {
    'ember/alias-model-in-controller': 'error',
    'ember/avoid-leaking-state-in-components': 'error',
    'ember/local-modules': 'error',
    'ember/named-functions-in-promises': 'error',
    'ember/no-empty-attrs': 'error',
    'ember/no-jquery': 'error',
    'ember/no-observers': 'error',
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/use-ember-get-and-set': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80
      }
    ]
  },
  overrides: [
    // node files
    {
      files: ['testem.js', 'ember-cli-build.js', 'config/**/*.js', 'lib/*/index.js'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
}
