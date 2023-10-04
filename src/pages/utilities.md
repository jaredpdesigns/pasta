---
title: "Pasta • Utility Classes"
description: "A set of utility classes to help you style your code easily"
layout: page.webc
---

> Pasta comes bundled with a large variety of utility classes to help you style content, whilst writing less CSS, bon appétit!

---

## Borders

You can easily apply a `border` to any element—or remove one—by using the following classes:

<borders-block webc:nokeep></borders-block>

<info webc:nokeep>

Directional options include `block-end, block-start, block, bottom, inline-end, inline-start, inline, left, right, top`.

</info>

---

## Colors

There are three primary class groups associated with color, `bg` , `border` and `type`—each class affects a different CSS property and can be used together to style an entire element.

<style>
  .demo ul {
    --fit__type: auto-fill;
    list-style: none;
  }
  .demo li {
    min-width: 0;
  }
  .demo li span {
    block-size: var(--size__l);
    display: inline-block;
    inline-size: var(--size__l);
  }
</style>

### Background

<colors-bg webc:nokeep :colors="colors"></colors-bg>

### Border

<colors-border webc:nokeep :colors="colors"></colors-border>

### Color

<colors-type webc:nokeep  :colors="colors"></colors-type>

---

## Flow

Flow is a general category of classes that help position elements within other elements. It tracks to classes that affect `flex` and `grid` properties primarily.

### General

To get started you can try out the following classes: `.flow__flex`, `.flow__grid` or `.flow__inline`.

### Alignment

After applying the root declaration for flow, you have two directions to flow content `inline` or `block`, you can start apply the following classes:

<flow-align webc:nokeep></flow-align>

### Direction

You can declare the direction children are supposed to flow if overriding the default direciton.

<info webc:nokeep>

Containers with `.flow__flex` align their children by default to a row layout, whereas containers with `.flow__grid` align their children by default to a column layout—plan accordingly!

</info>

<flow-direction webc:nokeep></flow-direction>

### Flex Helpers

Pasta includes a few helper classes specifically for `flex` layouts.

#### Grow

You can have a flex child grow to fit it’s container with `.flow__flex--grow` or prevent it from doing so with `.flow__flex--grow-no`.

#### Shrink

You can have a flex child shrink within it’s container with `.flow__flex--shrink` or prevent it from doing so with `.flow__flex--shrink-no`.

#### Wrap

You can have a flex container wrap it’s children with `.flow__flex--wrap` or prevent wrapping with `.flow__flex--wrap-no`.

### Gap

To place space between children in a flow container, you can use the following `gap` classes:

<info webc:nokeep>

To set the `gap` in both directions (column and row) use the general `.flow__gap--${size}`, to set the direction separately, you use `.flow__gap--column-${size}` or `.flow__gap--row-${size}` individually.

Like a lot of other classes, we map over our pre-defined size custom properties to define our list of available sizes, they are: `xxs, xs, s, m, l, xl, xxl, xxxl`.

</info>

<flow-gap webc:nokeep :sizes="sizes"></flow-gap>

### Grid Helpers

Pasta includes a few helper classes specifically for `grid` layouts.

#### Columns

In order to declare a `grid` container as having a series of repeatable columns, you simply add the class `.flow__grid--columns-auto` or `.flow__grid--columns-fixed`, each have a few built-in custom-properties to fine-tune the behavior:

##### Auto

<info webc:nokeep>

With `.flow__grid--columns-auto` you have access to `--fit__type` and `--column__width`, which changes the default behavior of:

```css
grid-template-columns: repeat(
  var(--fit__type, auto-fit),
  minmax(var(--column__width, var(--width__xs)), 1fr)
);
```

`--fit__type` defaults to `auto-fit` and `--column__width` defaults to our global `width` custom property `var(--width__xs)`.

Uses the default properties:

<section class="border__all color__border--base--light flow__grid flow__grid--columns-auto flow__gap--m overflow__hidden padding__m radius__s">
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 1</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 2</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 3</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 4</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 5</p>
</section>

Adjusts the `--column__width` property:

<section class="border__all color__border--base--light flow__grid flow__grid--columns-auto flow__gap--m overflow__hidden padding__m radius__s" style="--column__width: 10rem">
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 1</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 2</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 3</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 4</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 5</p>
</section>

</info>

##### Fixed

<info webc:nokeep>

With `.flow__grid--columns-fixed` you have access to `--columnCount` and can control how many repeated columns show up:

```css
grid-template-columns: repeat(var(--columnCount), 1fr);
```

`--columnCount` set to 8, creating 8 total columns within the `grid` parent:

<section class="border__all color__border--base--light flow__grid flow__grid--columns-fixed flow__gap--m overflow__x--auto padding__m radius__s" style="--columnCount: 8">
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 1</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 2</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 3</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 4</p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">Flow child 5</p>
</section>

</info>

### Children

Flow children have a special set of classes that apply to them only, you must first declare a flow parent and then apply the respective classes on children.

<info webc:nokeep>

An example, which offets the `order` and alignment of a child:

```html
<section
  class="border__all color__border--base--light flow__grid flow__align--block-center flow__align--inline-center flow__direction--column flow__gap--l padding__m radius__s"
  style="block-size: calc(var(--size__xxxl) * 2)"
>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">
    Flow child 1
  </p>
  <p
    class="color__bg--base--ghost flow__self--start flow__order padding__s radius__xs type__align--center"
    style="--order: 3"
  >
    Flow child 2 [but I’m at the top/end]
  </p>
  <p class="color__bg--base--ghost padding__s radius__xs type__align--center">
    Flow child 3
  </p>
</section>
```

<section class="border__all color__border--base--light flow__grid flow__align--block-center flow__align--inline-center flow__direction--column flow__gap--l overflow__hidden padding__m radius__s" style="block-size: calc(var(--size__xxxl) * 2)">
  <p
    class="color__bg--base--ghost padding__s radius__xs type__align--center"
  >
    Flow child 1
  </p>
  <p
    class="color__bg--base--ghost flow__self--start flow__order padding__s radius__xs type__align--center"
    style="--order: 3"
  >
    Flow child 2 [but I’m at the top/end]
  </p>
  <p
    class="color__bg--base--ghost padding__s radius__xs type__align--center"
  >
    Flow child 3
  </p>
</section>

</info>

---

## Margin

To work with `margin` in your project, use the following classes:

<margin webc:nokeep :sizes="sizes"></margin>

<info webc:nokeep>

Directional options include `block-end, block-start, block, bottom, inline-end, inline-start, inline, left, right, top`.

</info>

---

## Padding

To work with `padding` in your project, use the following classes:

<padding webc:nokeep :sizes="sizes"></padding>

<info webc:nokeep>

Directional options include `block-end, block-start, block, bottom, inline-end, inline-start, inline, left, right, top`.

</info>

---

## Radius

To work with `border-radius` in your project, use the following classes:

<radius webc:nokeep :sizes="sizes"></radius>

<info webc:nokeep>

Directional options include `bl, bottom-left, bottom-right, br, end-end, end-start, start-end, start-start, tl, top-left, top-right, tr`.

</info>

---

## Shadows

To provide consistent `box-shadows` to elements, you can use the simple class of `shadow`, `shadow__all` or `shadow__none`:

<!-- <shadows webc:nokeep></shadows> -->

---

## Type

Typography is huge part of any web project, use the following classes to manipulate different aspects of type. To test out different typefaces in your project you can use the [Type](/type/) tool.

<h3 id="type-alignment">Alignment</h3>

You can adjust `text-align` property using the following classes:

<type-alignment webc:nokeep></type-alignment>

### Family

You can adjust `font-family` property using the following classes:

<type-families webc:nokeep></type-families>

### Size

Most common type-related tags including headlines and paragraph tags are already mapped to a default scale, if you’d like to override those defaults or apply the size to something else, use the following classes:

<info webc:nokeep>

**Note:** The size classes requires two points of reference to complete, `size` and `lineheight`, use the following structure of `.type__size—[size]-[lineheight]`. Available keys for each attribute are as such:

**Size:** `xxs, xs, s, m, l, xl, xxl, xxxl, xxxxl`

**Lineheight:** `xs, s, m, l, xl, xxl, xxxl, xxxxl`

You can mix and match any `lineheight` value with any `size` value to meet the needs of your project.

</info>

{% include "content/typescale.md" %}

### Weight

You can adjust the `font-weight` property using the following classes:

<type-weight webc:nokeep></type-weight>

<info webc:nokeep>

**Note:** if using external web fonts, make sure to include the appropriate weights based on the below scale:

| Class    | Weight |
| -------- | ------ |
| light    | 300    |
| normal   | 400    |
| semibold | 600    |
| bold     | 700    |

</info>
