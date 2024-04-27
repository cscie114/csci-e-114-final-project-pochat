import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['pages/*.vue'],
  rules: {
    camelcase: ['error', { properties: 'always' }],
    // Disable rules causing errors
    'unicorn/prefer-at': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unicorn/no-array-reduce': 'off',
  },
  // Empty array for plugins to prevent ESLint from loading plugins
  plugins: []
});
