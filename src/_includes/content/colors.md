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

<colors-block webc:nokeep :colors="colors"></colors-block>

<info webc:nokeep>

To override any of the colors in your own project simply replace the custom property value with your desired color.

**Note:** adhereance to an HSL color model will maintain dynamic tinting, otherwise you’ll need to map over all color values in `root`.

```css
:root {
  --color__set--base: hsl(0deg 0% 0%);
  --color__set--highlight: hsl(0deg 90% 64%);
}
```

**Default values:**

```css
:root {
  --color__set--base: hsl(218deg 24% 24%);
  --color__set--highlight: hsl(158deg 32% 38%);
  /* This controls the default background color */
  --color__set--contrast: white;
}
```

</info>

### Custom colors

<blockquote class="styled customBlockquote"><p>Danger, Will Robinson!</p></blockquote>

<info webc:nokeep>

If you need to define a new color outside of `base` or `highlight`, but want to use the same dynamic tinting scale as those colors, the following snippet will help:

```css
:root {
  --color__set--danger: hsl(0deg 90% 64%);
  --color__danger: var(--color__set--danger);
  --color__danger--ish: color-mix(
    in oklab,
    var(--color__set--danger) 75%,
    var(--color__contrast)
  );
  --color__danger--mid: color-mix(
    in oklab,
    var(--color__set--danger) 62.5%,
    var(--color__contrast)
  );
  --color__danger--semi: color-mix(
    in oklab,
    var(--color__set--danger) 25%,
    var(--color__contrast)
  );
  --color__danger--light: color-mix(
    in oklab,
    var(--color__set--danger) 12.5%,
    var(--color__contrast)
  );
  --color__danger--ghost: color-mix(
    in oklab,
    var(--color__set--danger) 4%,
    var(--color__contrast)
  );
  --color__danger--contrast: color-mix(
    in oklab,
    var(--color__set--danger),
    var(--color__contrast-mix)
  );
}

.dangerBlockquote {
  --color__bg: var(--color__danger--ghost);
  --color__border: var(--color__danger--light);

  color: var(--color__danger--contrast);
}
```

Notice with the declaration of `--color__danger--contrast` we utilize the `--color__set--contrast-mix` variable—in Pasta this value flips to make mix with different percentages of white and black depending on `color-scheme`.

</info>

<style>
  :root {
    --color__set--danger: hsl(0deg 90% 64%);
    --color__danger: var(--color__set--danger);
    --color__danger--ish: color-mix(
      in oklab,
      var(--color__set--danger) 75%,
      var(--color__contrast)
    );
    --color__danger--mid: color-mix(
      in oklab,
      var(--color__set--danger) 62.5%,
      var(--color__contrast)
    );
    --color__danger--semi: color-mix(
      in oklab,
      var(--color__set--danger) 25%,
      var(--color__contrast)
    );
    --color__danger--light: color-mix(
      in oklab,
      var(--color__set--danger) 12.5%,
      var(--color__contrast)
    );
    --color__danger--ghost: color-mix(
      in oklab,
      var(--color__set--danger) 4%,
      var(--color__contrast)
    );
    --color__danger--contrast: color-mix(
      in oklab,
      var(--color__set--danger),
      var(--color__set--contrast-mix)
    );
  }
  .customBlockquote {
    --color__bg: var(--color__danger--light);
    --color__border: var(--color__danger--semi);

    color: var(--color__danger--contrast);
  }
</style>
