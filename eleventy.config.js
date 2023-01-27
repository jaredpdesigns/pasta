const pluginWebC = require("@11ty/eleventy-plugin-webc");
const postcss = require("postcss");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginWebC, {
    components: "src/_includes/**/*.webc",
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  // Make CSS mo-betta
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      const result = await postcss([
        require("postcss-import"),
        require("postcss-nested"),
        require("postcss-each"),
        require("autoprefixer"),
        require("postcss-minify"),
      ]).process(inputContent);

      return async () => result.css;
    },
  });

  // Markdown support
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    renderHref: false,
    tabIndex: false,
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // HTML minification
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Passthrough static stuffs
  eleventyConfig.addPassthroughCopy({
    static: "/",
  });
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      layouts: "../layouts",
      data: "../data",
    },
  };
};
