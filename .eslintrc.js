module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:@intlify/vue-i18n/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        src: './src',
        extensions: ['.js', '.vue'],
        enableFix: false,
      },
    ],
    '@intlify/vue-i18n/key-format-style': [
      'error',
      'snake_case',
      {
        allowArray: false,
      },
    ],
    '@intlify/vue-i18n/no-duplicate-keys-in-locale': [
      'error',
      {
        ignoreI18nBlock: false,
      },
    ],
    '@intlify/vue-i18n/no-missing-keys-in-other-locales': ['error'],
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],

  settings: {
    'vue-i18n': {
      localeDir: {
        pattern: './src/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
        localeKey: 'file', // or 'key'
      },
      // Specify the version of `vue-i18n` you are using.
      // If not specified, the message will be parsed twice.
      messageSyntaxVersion: '^9.0.0',
    },
  },
};
