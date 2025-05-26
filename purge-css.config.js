module.exports = {
  content: [
    "./dist/sabarti/browser/index.html",
    "./dist/sabarti/browser/*.js",
  ],
  css: ["./dist/sabarti/browser/*.css"],
  safelist: {
    deep: [/^p-toast/, /^p-badge/, /dynamicdialog$/],
    greedy: [/dialog$/],
  },
  output: "./dist/sabarti/browser/",
  skippedContentGlobs: [
  ],
  defaultExtractor: (content) => {
    // Match normal classes and media query prefixed classes
    return content.match(/[\w-/.:]+(?<!:)/g) || [];
  },
};
