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

<info webc:nokeep>

If you don’t supply a class to a `blockquote`, but instead use it in something like Markdown—or optionally add the class `.styled`, you’ll see it styled like above. You can override the background and border color of the element by changing the following custom properties:

```css
blockquote:not([class]),
blockquote.styled {
  --color__bg: var(--color__contrast);
  --color__border: var(--color__base--light);
}
```

</info>
