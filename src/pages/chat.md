---
layout: page.webc
---

<script webc:type="render" webc:is="template"> function() {
  const key = this.config.openAIAPIKey;
  return `<chat key="${key}" webc:nokeep></chat>`
}
</script>
