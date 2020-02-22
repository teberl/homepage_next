module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
