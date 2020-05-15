module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      process.env.PURGE === "TRUE"
        ? {
            content: [
              "./pages/**/*.tsx",
              "./components/**/*.tsx",
              "./todos/**/*.tsx",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
