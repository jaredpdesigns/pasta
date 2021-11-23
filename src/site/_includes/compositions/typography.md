---

## Typography

Most stuff in our projects are text, so it’s critical we have legible type. Pasta comes with pre-configured type sizes and scales that are mapped to common elements, including what’s listed below.

A variety of type sizes and lineheights are also accessible via the following class structure: `.type__size--m-l` whereas the size of the type variable is followed by a lineheight variable.

The scale for both includes `xxs, xs, s, m, l, xl, xxl, xxxl, xxxxl`—mix and match for maximum flavor.

`h1`

# Headline 1

`h2`

## Headline 2

`h3`

### Headline 3

`h4`

#### Headline 4

`h5`

##### Headline 5

`h6`

###### Headline 6

`p`

The _quick_ [brown fox](https://en.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog) jumps over the **lazy dog**. But has anyone asked _why_? What motivates the fox—and what makes the dog so lazy—or is the dog simply exhausted?

Let us investigate foxes and their habits to dive a little deeper, shall we? Foxes are traditionally predatory creatures, whereas dogs have long been domesticated.

`ul`

- Item #1
  - Nested Item #1
  - Nested Item #2
    - Nested-Nested Item #1
    - Nested-Nested Item #2
- Item #2
- Item #3
- Item #4

`ol`

1. Item #1
   1. Nested Item #1
   2. Nested Item #2
      1. Nested-Nested Item #1
      2. Nested-Nested Item #2
2. Item #2
3. Item #3
4. Item #4

`blockquote`

> I’m a beautiful blockquote filled with _very_ interesting text. Admire me!

{% Note %}

You can override the background and border color of this element by changing the `color__bg` and `color__border` custom property.

```css
blockquote {
  --color__bg: var(--color__contrast);
  --color__border: var(--color__base--light);
}
```

{% endNote %}

`pre`

```javascript
const arr = [
  { title: "Cool Video", description: "Really really cool video" },
  {
    title: "Regular Video",
    description:
      "Really really regular, standard video without anything interesting",
  },
];

const searchTerm = "cool";

function findInObject() {
  return arr.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
console.log(findInObject());

// [{title: "Cool Video", description: "Really really cool video"}]
```

{% Note %}

You can apply light syntax-highlighting to your project by adding the following to your core CSS:

```css
code,
pre {
  --color__primary: hsl(260, 64%, 75%);
  --color__secondary: hsl(54, 90%, 75%);
  --color__tertiary: hsl(190, 64%, 75%);
}
```

{% endNote%}

`dl`

<dl>
  <dt>Title</dt>
  <dd>Some description of title that is kinda important</dd>
  <dt>Another Title</dt>
  <dd>Why not discuss feature two? It’s quite something!</dd>
</dl>

`table`

| Column 1       | Column 2       | Column 3       |
| -------------- | -------------- | -------------- |
| Row 1 Column 1 | Row 1 Column 2 | Row 1 Column 3 |
| Row 2 Column 1 | Row 2 Column 2 | Row 2 Column 3 |
