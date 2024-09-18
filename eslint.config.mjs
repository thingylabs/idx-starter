export default [
  {
    ignores: ['node_modules/**', '.idx/**', '.vscode/**'],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Possible Errors
      'no-console': 'warn',
      'no-debugger': 'warn',

      // Best Practices
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],

      // Stylistic Issues
      semi: ['error', 'never'], // No semicolons
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { max: 1 }],

      // ECMAScript 6
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
]
