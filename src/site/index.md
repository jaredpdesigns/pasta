---
title: Pasta—Simply Delicious
description: Pasta provides a great starting place for web projects. It combines light styling for common web elements, yummy
layout: layouts/base.njk
class: home
jsExtra: scripts/setIndeterminate.js
---

{% include "compositions/preamble.md" %}

{% include "compositions/colors.md" %}

{% include "compositions/typography.md" %}

{% include "compositions/buttons.njk" %}

{% include "compositions/form.njk" %}

{% Note %}

Overall sizing of form elements are controlled globally through the following variables:

```css
:root {
  --control__font-size: var(--type__size--m);
  --control__line-height: var(--type__lineheight--l);
  --control__padding--block: var(--size__s);
  --control__padding--inline: var(--size__m);
  --control__radius: var(--size__s);
  --control__size: clamp(var(--size__xl),var(--type__size--target),var(--size__xxl));
}
```

{% endNote%}