---

## Colors

Color is a powerful communicator in any design project. After defining core colors in your project, you’ll then have access to the following class structure throughout your project to access the different colors below:

- `.color__bg--${colorName}`
- `.color__border--${colorName}`
- `.color__type--${colorName}`

{% include "compositions/colors.njk" %}

{% Note %}

To override any of the colors in your own project simply replace the custom property value with your desired color.

**Note:** adhereance to an HSL color model will maintain dynamic tinting, otherwise you’ll need to map over all color values in `root`.

```css
:root {
  --color__hue--base: 0, 0%, 0%;
  --color__hue--highlight: 0, 90%, 64%;
}
```

**Options include:**

- `color__hue--base`
- `color__hue--highlight`
- `color__hue--contrast`
- `color__hue--contrast--extra`

{% endNote %}

### Override highlight

<div class="error border__all color__bg--highlight--ghost color__border--highlight--light color__type--highlight padding__all--m radius__s"><p>Oops, I did something wrong :(</p></div>

{% Note %}

If you’d like to map over one color in a specific instance—for example a box with an error—but don’t want to define a whole new color you can temporarily map over `color__highlight` by using the following mixin:

```scss
@include colorHighlight(0, 90%, 50%);
```

{% endNote %}

### Custom colors

<div class="border__all color__bg--success--ghost color__border--success--light color__type--success padding__all--m radius__s"><p>Woo-hoo! I did something right!</p></div>

{% Note %}

If you’d like to include new colors in your project that are built on top of `base` and `highlight` you can use use the following mixin:

```scss
@include buildColor(success, 158, 64%, 50%);
```

They are now universally available in the same ways `base` and `highlight` are including `.color__bg--success`.

{% endNote %}
