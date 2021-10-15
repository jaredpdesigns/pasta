<section class="preamble border__bottom color__bg--highlight--light color__border--highlight--semi flow__grid oomph__v--l padding__bottom--l padding__top--l"><p>Pasta provides a great starting place for web projects. It combines light styling for common web elements, yummy!</p></section>

---

## Get Started

```bash
npm install @jaredpdesigns/pasta
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
<link
  rel="stylesheet"
  href="https://unpkg.com/@jaredpdesigns/pasta@latest/pasta.css"
/>
```

**Add your own flavors**

```css
:root {
  --color__hue--base: 0, 0%, 0%;
  --color__hue--highlight: 0, 90%, 64%;
  --type__family--primary: "Satoshi", sans-serif;
  --type__family--secondary: "Cabinet Grotesk", sans-serif;
}
```
