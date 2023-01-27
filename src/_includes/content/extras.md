---

## Extras

Pasta comes bundled with styling for common elements like `code/pre`, `table`, and `details` as well as lightly styled form elements.

### Common Elements

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

<info webc:nokeep>

If you use [highlight.js](https://highlightjs.org/) in your project and are either bundling the `code` stylesheet or bringing in all of Pasta, you can apply light syntax-highlighting to your project by adding the following to your core CSS:

```css
code,
pre {
  --color__primary: hsl(260, 64%, 75%);
  --color__secondary: hsl(54, 90%, 75%);
  --color__tertiary: hsl(190, 64%, 75%);
}
```

</info>

`details`

<details>
  <summary>I am really good at summarizing things</summary>
  <p><em>Except for secrets, those are hidden, safe!</em></p>
</details>

<info webc:nokeep>

If you don’t apply a class, you get a lightly styled `details`. If you’d like to use details differently in your UI, Pasta won’t be opinionated about it.

</info>

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

<info webc:nokeep>

If you’re either bundling the `table` stylesheet or bringing in all of Pasta and you don’t supply a class to a `table`, but instead use it in something like Markdown—or optionally add the class `.styled`, you’ll see it styled like above. You can override the row stripe color or overall padding by adjusting the following custom properties:

```css
table:not([class]),
table.styled {
  --evenRow: var(--color__contrast);
  --oddRow: var(--color__base--light);
  --padding: var(--size__s);
}
```

</info>

### Buttons

<buttons-block webc:nokeep></buttons-block>

<info webc:nokeep>

Buttons come in three flavors `primary`, `secondary` and `tertiary`, you can style buttons by using the following classes:

- `.button__primary`
- `.button__secondary`
- `.button__tertiary`

Need to override some part of the pre-configured styles? You can easily tie into the styles by adjusting the following custom properties:

```css
.button__primary {
  --color__bg: var(--color__base);
  --color__border: var(--color__base--light);
  --color__type: var(--color__contrast);
}
```

</info>

### Form Elements

<form-block webc:nokeep></form-block>

<info webc:nokeep>

If you’re either bundling the `controls` stylesheet or bringing in all of Pasta, overall sizing of form elements are controlled globally through the following custom properties:

```css
:root {
  --control__font-size: var(--type__size--m);
  --control__line-height: var(--type__lineheight--l);
  --control__padding--block: var(--size__s);
  --control__padding--inline: var(--size__m);
  --control__radius: var(--size__s);
  --control__size: clamp(
    var(--size__xl),
    var(--type__size--target),
    var(--size__xxl)
  );
}
```

</info>
