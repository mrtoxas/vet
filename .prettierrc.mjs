/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};