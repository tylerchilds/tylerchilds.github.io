---
layout: blog/post
title:  "The Perfect Button"
date:   2019-04-03 00:01:00 -0800
categories: development
permalink: /posts/the-perfect-button
description: >
  If you've ever worked in a shared codebase with more than a handful of
  engineers, you've probably come across at least a few buttons that look the same
  but are very different once you get to know them. The Perfect Button will help solve
  or help you prevent this problem in a few quick lines of CSS.
---

## The Lifecycle of Styling a Button

Your design calls for a button. The copy will always be short, they say. Just a single word or two, they say. And maybe it is.
But then you translate it and it definitely isn't.

And then there's a variation with a border. So you add one, but then the alignment of the one with the border is off from the one without.
And you need a big one, a little one, and another like a link.

Defeated, you reach for a library or a framework that has buttons included.  
_Next time, steal this code I'm about to give you for free instead._

## Features

Let's break down exactly what our perfect button is going to need to do.

* Allow vertically centered copy
* Potentially wrap multiple lines with normal line-height
* Variant with a border
* Variant as a link
* Consistent height between variations
* Animated hover/focus states

### Example

<iframe id="perfect-button-example"></iframe>

<div class="u-hidden" id="perfect-button-html">
    <div class="container">
      <button class="button">
        The Perfect Button
      </button>

      <input type="submit" class="button -outlined" value="Outlined">

      <input type="button" class="button -secondary" value="Secondary">

      <a href="#" class="button -link">Link</a>

      <button class="button" disabled>
        Disabled
      </button>

      <button class="button -small -outlined">
        Small Outlined
      </button>

      <button class="button -large -secondary">
        Large Secondary
      </button>
    </div>

    <div class="container">
      <a href="#" class="button -link">
        One Line Link
      </a>
      <button class="button -outlined">
        A Two Line<br />Button
      </button>

      <button class="button">
        A Three<br/>Line<br />Button
      </button>

    </div>
</div>

<pre id="perfect-button-css-setup" class="u-hidden">
      html {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        text-align: center;
        padding: 20px;
      }
</pre>

<pre><xmp id="perfect-button-css">.button {
  --border-color: transparent;
  --border-color-hover: transparent;
  --border-radius: 4px;
  --border-thickness: 2px;
  --background-color: #216a9e;
  --background-color-hover: #184f76;
  --font-size: 16px;
  --line-height: 1.5;
  --margin: 5px;
  --min-height: 48px;
  --padding: 10px 20px;
  --text-color: #fff;
  --text-color-hover: #fff;

  align-items: center;
  align-content: center;
  background-color: var(--background-color);
  border: var(--border-thickness) solid var(--border-color);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  color: var(--text-color);
  cursor: pointer;
  display: inline-flex;
  font-size: var(--font-size);
  justify-content: center;
  line-height: var(--line-height);
  min-height: var(--min-height);
  margin: var(--margin);
  max-width: 100%;
  padding: var(--padding);
  text-align: center;
  transition-duration: 250ms;
  transition-property: background-color, border-color, color;
  user-select: none;
  width: auto;
  vertical-align: middle;
}

.button:link,
.button:visited {
  color: var(--text-color);
}

.button:focus,
.button:hover {
  background-color: var(--background-color-hover);
  border-color: var(--border-color-hover);
  color: var(--text-color-hover);
}

.button:focus {
  outline: 2px dotted #999;
  outline-offset: 2px;
}

.button:active {
  background-color: var(--background-color);
  color: var(--text-color);
}

.button:disabled {
  opacity: .5;
  pointer-events: none;
}

.button::-moz-focus-inner {
  border: 0;
}

.button.-outlined {
  --background-color: transparent;
  --background-color-hover: #184f76;
  --border-color: #216a9e;
  --border-color-hover: #184f76;
  --text-color: #216a9e;
  --text-color-hover: #fff;
}

.button.-secondary {
  --background-color: #ccc;
  --background-color-hover: #999;
  --border-color: #ccc;
  --border-color-hover: #999;
  --text-color: #333;
  --text-color-hover: #333;
}

.button.-link {
  --background-color: transparent;
  --background-color-hover: transparent;
  --border-color: transparent;
  --border-color-hover: transparent;
  --text-color: #216a9e;
  --text-color-hover: #184f76;
}

.button.-small {
  --border-thickness: 1px;
  --font-size: 12px;
  --line-height: 1.5;
  --min-height: 32px;
  --padding: 4px 8px;
}

.button.-large {
  --border-thickness: 4px;
  --font-size: 32px;
  --line-height: 1.5;
  --min-height: 72px;
  --padding: 20px 40px;
}</xmp></pre>

<script type="text/javascript">
    window.tychi.queues.flyFrames.push([
        'perfect-button-example',
        {
            markupIDs: ['perfect-button-html'],
            styleIDs: ['perfect-button-css-setup', 'perfect-button-css']
        }
    ]);
</script>

### Explanation

I won't touch on all of the CSS directly used for this button, but there are a few key players worth calling out on this Dream Team of a ruleset.

* `box-sizing: border-box;`: When working with designers this is helpful in maintaining a consistent design language. Designers will expect a button to be a certain height that matches their design. This allows padding and border thickness to get wrapped up into a single value.
* `min-height`: This is the minimum height of the button, which matches what our design has exactly.
* `display: inline-flex;`: When setting a link to be a button and specifying a height and width greater than the size of the text, we need to center the text horizontally and vertically. Without this, the text is aligned in the top left corner.
* `border`: The secret to having a consistent height between a normal and an outlined button variant is to always have a border. This enables us to side-step math and tedious to update styles later. When we don't want a border to display, we can just set `border-color: transparent;` and maintain the spacing of it.

### Going Beyond

We're using **CSS Custom Properties** to keep the button variations maintainable. Using different classes for the variations enables us to have a single location to update our **CSS variables** for all of the different button states, like `:hover` and `:focus`, as well as link states for when our button is actually a hyperlink, like `:visited`, `:hover`, and `:active`.

With CSS Variables, we're able to declare our default values in our main ruleset for our button. By adding rulesets for the different variations and overriding the variables, we can leverage the `var()` declarations inside rulesets that are lower in the **Cascade**. This works because Custom Properties in `var()` resolve at computed-value time.

Without CSS Variables, we'd have to create additional selectors for each of these states and set their values. These immediately makes our CSS more challenging to follow and to maintain.

### Wrap Up

It's worth mentioning a potential downside about CSS Custom Properties: They don't work in Internet Explorer.

The good news is that all of the other CSS has good browser support, if you actually want to use this button. You can get more familiar with the code by refactoring to support legacy browsers. You can add vendor prefixes on the flexbox properties to support down to IE10.
