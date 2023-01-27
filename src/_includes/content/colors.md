---

## Colors

Color is a powerful communicator in any design project. After defining core colors in your project, you’ll then have access to the following colors in your project:

<info webc:nokeep>

If you’re either bundling the `utilities` stylesheet or bringing in all of Pasta, you’ll easily have access to a large variety of pre-configured color classes including the following:

- `.color__bg--${colorName}`
- `.color__border--${colorName}`
- `.color__type--${colorName}`

For more details, review the [utilities documentation](/utilities#colors).

</info>

### Palette

<colors-block webc:nokeep></colors-block>

<info webc:nokeep>

To override any of the colors in your own project simply replace the custom property value with your desired color.

**Note:** adhereance to an HSL color model will maintain dynamic tinting, otherwise you’ll need to map over all color values in root.

```css
:root {
  --color__hue--base: 0deg 0% 0%;
  --color__hue--highlight: 0deg 90% 64%;
}
```

**Options include:**

- `color__hue--base`
- `color__hue--highlight`
- `color__hue--contrast`
- `color__hue--contrast--extra`

</info>

### Custom colors

<blockquote class="styled customBlockquote"><p>Danger, Will Robinson!</p></blockquote>

<info webc:nokeep>

If you need to define a new color outside of `base` or `highlight`, but want to use the same dynamic tinting scale as those colors, the following snippet will help:

```css
:root {
  --color__hue--danger: 0deg 90% 64%;
  --color__danger: hsl(var(--color__hue--danger));
  --color__danger--ish: hsl(var(--color__hue--danger) / 0.75);
  --color__danger--mid: hsl(var(--color__hue--danger) / 0.625);
  --color__danger--semi: hsl(var(--color__hue--danger) / 0.25);
  --color__danger--light: hsl(var(--color__hue--danger) / 0.125);
  --color__danger--ghost: hsl(var(--color__hue--danger) / 0.0625);
}

.dangerBlockquote {
  --color__bg: var(--color__danger--ghost);
  --color__border: var(--color__danger--light);
}
```

You can always tweak the alpha values of the `hsla` structure to meet your project’s needs.

</info>

<style>
  .customBlockquote {
    --color__hue--danger: 0deg 90% 64%;
    --color__bg: hsl(var(--color__hue--danger)/0.0625);
    --color__border: hsl(var(--color__hue--danger)/0.25);
  }
</style>
