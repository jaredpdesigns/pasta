const { minify } = require("terser");
const htmlmin = require("html-minifier");
const sass = require("sass");
const fs = require("fs-extra");
const markdown = require("markdown-it")({
  html: true,
});
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Components
const componentsDir = "./src/site/_includes/components";
const Icon = require(`${componentsDir}/icon.js`);
const Note = require(`${componentsDir}/note.js`);

module.exports = (eleventyConfig) => {
  // Shortcodes
  eleventyConfig.addShortcode("Markdown", (content) =>
    markdown.render(content)
  );
  eleventyConfig.addShortcode("Year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("Icon", Icon);
  eleventyConfig.addPairedShortcode("Note", Note);

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async (code, callback) => {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      callback(null, code);
    }
  });

  // Build stuff
  eleventyConfig.addPassthroughCopy({
    "src/static": "/",
  });
  eleventyConfig.addWatchTarget("src/scss/");
  eleventyConfig.addWatchTarget("src/site/_includes/components/");
  eleventyConfig.addWatchTarget("src/site/_includes/compositions/");

  // Compile SCSS before a build
  eleventyConfig.on("beforeBuild", () => {
    let result = sass.renderSync({
      file: "src/scss/style.scss",
      sourceMap: false,
      outputStyle: "compressed",
    });
    fs.ensureDirSync("dist/css/");
    fs.writeFile("dist/css/style.css", result.css, (err) => {
      if (err) throw err;
    });
  });

  // 404 handling
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("dist/404.html");
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
  });

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

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
