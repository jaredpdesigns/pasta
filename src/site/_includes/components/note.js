module.exports = function (content) {
  const Icon = require("./icon.js");
  return `
<aside class="note border__all color__border--base--light oomph__v--m padding__all--m radius__s">
<span class="color__bg--contrast flow__inline radius__all">
${Icon("star", 20)}</span>
${content}
</aside>
`;
};
