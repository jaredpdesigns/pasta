# Pasta

Pasta provides a great starting place for web projects. It combines light styling for common web elements, yummy!

Check out the docs: [https://pasta.jaredpendergraft.com](https://pasta.jaredpendergraft.com)

***

## Get Started

```bash
npm add @jaredpdesigns/pasta
```

**Import the `scss` files into your main SCSS file**

```scss
@import "@jaredpdesigns/pasta";
```

**Or pick and choose which elements you want to style**

```scss
// Default elements
@import "@jaredpdesigns/pasta/base";

// Utility classes
@import "@jaredpdesigns/pasta/helpers";

// Extra stuff like forms
@import "@jaredpdesigns/pasta/components";
```

**Optionally, include the pre-composited standalone `css` file in your projects for a subset of features**

```html
<link rel="stylesheet" href="https://unpkg.com/@jaredpdesigns/pasta"/>
```

**Add your own flavors**

```css
:root {
  --color__hue--base: 0deg 0% 0%;
  --color__hue--highlight: 0deg 90% 64%;
  --type__family--primary: "Satoshi", sans-serif;
  --type__family--secondary: "Cabinet Grotesk", sans-serif;
}
```