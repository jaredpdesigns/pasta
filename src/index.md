---
layout: default
---
***

### Getting Started

***

Pasta is a collection of partial SASS files, broken out into their core functions. Individual files can be found in `pasta/ingredients/`. Place the Pasta directory within your CSS directory and link the file via a common `@import` function to begin cooking.

#### Ingredients

- `_water.scss` establishes a solid reset for core HTML elements and is technically optional. If you prefer a more common reset like [Normalize](https://necolas.github.io/normalize.css/), feel free to comment out `_water.scss` from the main `_pasta.scss` file.
- `_flour.scss` contains all the variables and mixins used throughout Pasta. This is most likely the file you'll edit the most as you fine-tune styles specific to your project.
- `_eggs.scss` starts to build on the core foundation for the light cross-browser styling associated with Pasta.

#### Optional Configuration

If all you want to do is adjust basic variables but not core stylings, you can include the declarations before you import Pasta into your main stylesheet:

``` scss
$type-sans: 'Noto Sans', sans-serif;
$type-serif: 'Noto Serif', serif;
$type-mono: 'Source Code Pro', monospace;
$color-base: #545454;
$color-highlight: #E73C4E;

@import "pasta/start";
```

> After importing Pasta into your main stylesheet, you can use any variables or mixins globally—easily building on top of `_eggs.scss` as you establish the look and feel of your project.

***

### Complex Mixins

***

> Some of the more powerful mixins Pasta uses include variable conditions that allow the most flexibility without multiple instances of very similar mixins.

#### Breakpoints

`@include bp($point)`

The breakpoints mixin allows you to define what happens at different screen widths, each value maps to a common screen size.

**Options:**

`xs, xsl, s, m, ml, l, xl, xxl`

**In use:**

``` scss
.class {
  height: rem(48);
  @include bp(ml) { height: rem(64); }
}
```

#### Padding 

`@include padding($size, $side)`

Everyone loves some padding, so why not make it easy to have responsive padding through a mixin? The mixin takes an argument for `$size` and `$side` and scales values when users reach a large screen width to adjust things *just so*. The default `$side` that padding is applied is `all`.

**Options for $size:**

`xs, s, m, l`

**Options for $sides:**

`all, t, b, l, r`

**In use:**

``` scss
.class {
  @include padding(s);
}
```

*(Adds padding to all sides using the small parameter)*

#### Margins 

`@include margin($size, $side)`

Margin is the same idea as padding and is super useful for setting the vertical rhythm of a page. The default value for `$side` is `t` for top.

**Options for $size:**

`xs, s, m, l`

**Options for $sides:**

`t, b, l, r`

**In use:**

``` scss
.class + .class {
  @include margin(s,l);
}
```

*(Adds a left margin to an item when it proceeds the same type of item)*

***

### Typography

***

> Easily control site-wide typography using simple variables—it's as easy as setting a numeric value for `font-size`.

#### Headings

`<h1>`

# Headline 1

`<h2>`

## Headline 2

`<h3>`

### Headline 3

`<h4>`

#### Headline 4

`<h5>`

##### Headline 5

`<p>`

Aenean lacinia *bibendum nulla sed consectetur*. **Nullam I’d dolor I’d nibh ultricies** vehicula ut I’d elit. [An inline link](#). Dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.

#### Typographic Helper Classes

`.type__style--sans`

<span class="type__style--sans">Sans-serif Type.</span>

`.type__style--serif`

<span class="type__style--serif">Serif Type.</span>

`.type__style--mono`

<span class="type__style--mono">Mono Type.</span>

`.type__style--caps`

<span class="type__style--caps">All-caps Type.</span>

`.type__align--left`

<span class="type__align--left">Left-aligned text.</span>

`.type__align--center`

<span class="type__align--center">Centered-aligned text.</span>

`.type__align--right`

<span class="type__align--right">Right-aligned text.</span>

`.type__align--legible`

<span class="type__align--legible">Legible text block. Often times we desire a more reasonable line length for blocks of text. This class helps set a max-width for text blocks and centers them horizontally within a parent.</span>

`.type__align--inline`

<span class="type__align--inline">Inline text.</span>
<span class="type__align--inline">Can be quite nice.</span>

***

### Lists

***

> When screens reach a width greater than 1024px, styled `<ul>` and `<ol>` elements adapt a hanging punctuation format to better align to corresponding text.

#### Unordered List

`<ul>`

- list item
- list item
- list item

#### Ordered List

`<ol>`

1. list item
2. list item
3. list item

***

### Buttons

***

> Buttons styles are great, they work well as calls to action as well as in forms, but you should be able to use them whereever you like. Our buttons come in two flavors and can be used anywhere via a class.

`.btn`

<a class="btn">Hi There!</a>

`.btn.btn--secondary`

<a class="btn btn--secondary">Hello Again!</a>

***

### Code Samples

***

> For code friendly pages, both inline and `<pre>` level `<code>` tags are supported.

Let’s add `.this` and `.that` to our `<h1>` tag.

``` css
.this { font-size: 4.5rem; }
.that { color: $super-sweet; }
```

***

### Responsive Media

***

> Images and video can easily adjust to viewport constraints and respond accordingly.

#### Responsive Images

`<img>`

![Some Lovely Pasta]({{ 'img/placeholder.jpg' | prepend: base.url }})

*Image via [Wikipedia](https://en.wikipedia.org/wiki/Farfalle)*

#### Responsive Video Embeds

> Video embeds are made awesome by simply adding a class of `.video` to a parent containing the embed.

`<figure class="video__holder"><Embed_Code></figure>`

<figure class="video__holder"><iframe src="https://player.vimeo.com/video/8864263?color=E73C4E&title=0&byline=0&portrait=0" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></figure>

*Video via [The Geometry of Pasta](http://www.geometryofpasta.co.uk)*

***

### Colors

***

> A global color scale makes it easy to use variations of core colors, keeping UI elements consistent and easy to manage.

#### Base

- <span class="color__bg--base"></span> `.color__bg--base`
- <span class="color__bg--base-75"></span> `.color__bg--base-75`
- <span class="color__bg--base-62"></span> `.color__bg--base-62`
- <span class="color__bg--base-50"></span> `.color__bg--base-50`
- <span class="color__bg--base-38"></span> `.color__bg--base-38`
- <span class="color__bg--base-25"></span> `.color__bg--base-25`
- <span class="color__bg--base-12"></span> `.color__bg--base-12`
- <span class="color__bg--base-5"></span> `.color__bg--base-5`
- <span class="color__bg--base-dark"></span> `.color__bg--base-dark`

#### Highlight

- <span class="color__bg--highlight"></span> `.color__bg--highlight`
- <span class="color__bg--highlight-75"></span> `.color__bg--highlight-75`
- <span class="color__bg--highlight-62"></span> `.color__bg--highlight-62`
- <span class="color__bg--highlight-50"></span> `.color__bg--highlight-50`
- <span class="color__bg--highlight-38"></span> `.color__bg--highlight-38`
- <span class="color__bg--highlight-25"></span> `.color__bg--highlight-25`
- <span class="color__bg--highlight-12"></span> `.color__bg--highlight-12`
- <span class="color__bg--highlight-5"></span> `.color__bg--highlight-5`
- <span class="color__bg--highlight-dark"></span> `.color__bg--highlight-dark`