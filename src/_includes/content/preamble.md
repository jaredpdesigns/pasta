---

## Get Started

```bash
npm add @jaredpdesigns/pasta
```

Import the `css` files into your main CSS file

```scss
// Import from node_modules
@import "@jaredpdesigns/pasta/pasta.css";

// Or optionally load from unpkg
@import "https://unpkg.com/@jaredpdesigns/pasta";
```

Or pick and choose which elements you want to import

```scss
// Global reset
@import "@jaredpdesigns/pasta/reset.css";

// Individual areas of focus
@import "@jaredpdesigns/pasta/colors.css";
@import "@jaredpdesigns/pasta/focus.css";
@import "@jaredpdesigns/pasta/shadows.css";
@import "@jaredpdesigns/pasta/spacing.css";
@import "@jaredpdesigns/pasta/type.css";
@import "@jaredpdesigns/pasta/widths.css";

// Option class-based utilities
@import "@jaredpdesigns/pasta/utilities.css";

// Optional extensions for styling other types of content
@import "@jaredpdesigns/pasta/backdrop.css";
@import "@jaredpdesigns/pasta/code.css";
@import "@jaredpdesigns/pasta/controls.css";
@import "@jaredpdesigns/pasta/table.css";
```

Don’t want to fuss with compiling? Use our pre-configured build for a quick project set-up

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@jaredpdesigns/pasta"
/>
```

Add your own flavors

```css
:root {
  --color__set--base: hsl(0deg 0% 0%);
  --color__set--highlight: hsl(0deg 90% 64%);
  --type__family--primary: "Satoshi", sans-serif;
  --type__family--secondary: "Cabinet Grotesk", sans-serif;
}
```
