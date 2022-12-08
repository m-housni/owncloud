module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended', 'plugin:jest/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser'
    },
    requireConfigFile: false,
    sourceType: 'module'
  },
  rules: {
    /**
     * TODO: fix project import issues and then enable it
     * 'sort-imports': 'warn',
     */
    'require-await': 'warn',
    'no-new': 'off',
    'jest/no-standalone-expect': 'off',
    'node/no-callback-literal': 'off',
    'unused-imports/no-unused-imports': 'error',
    'nonblock-statement-body-position': ['error', 'below'],
    curly: 'error'
  },
  globals: {
    require: false,
    requirejs: false
  },
  plugins: ['jest', 'unused-imports'],
  ignorePatterns: ['packages/web-integration-oc10/js'],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
      rules: {
        'vue/multi-word-component-names': 'warn',
        'vue/no-v-text-v-html-on-component': 'warn'
      }
    },
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prefer-const': 'warn'
      }
    }
  ]
}
