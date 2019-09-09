---
layout: post
title:  Practical CSS Custom Properties and Patterns
date:   2019-09-08 2:41:00 -0800
categories: development
---

I've been playing around with CSS Custom Properties to discover their power,
since browser support is finally at a place where we all as _web workers_ can
use them in our production code bases now. It's cool I give you permission and
you can show your boss this article.

All of the examples in this article are simplified and condensed patterns from
[Cutestrap](https://www.cutestrap.com). The goal of this article is to share what I've learned over the past
few months and to get you excited about Custom Properties because they are so
powerful and they'll make you strong too, _like eating vegetables_.

## Single Variable (brand color)

When first approaching Custom Properties, a common question is "What's the browser
support?" and then maybe, "How do I set my brand color?"

For browser support: It does not matter since you can set a fallback, if you need one.
If that doesn't convice your co-workers, here are the facts:

Global market share is 85% ([Chrome + Firefox + Edge + Safari + Opera](https://www.netmarketshare.com/browser-market-share.asp)),
but you should cross-reference [caniuse](https://caniuse.com/#search=custom%20properties)
with your user base to determine how much progressive enhancement you should
consider for your project.

For setting your brand color, let's tackle that with setting a variable and then
using it on an SVG. We'll also use a fallback to cover users on trailing browsers.

```
html {
    --brand-color: hsl(350, 80%, 60%);
}

.logo {
    fill: pink; // fallback
    fill: var(--brand-color);
}
```

Here we've declared a variable, `--brand-color` in our `html` ruleset. The
variable itself cascades to every element on the page, since our ruleset matches
our `<html>` element. Long story short, we can use that variable in our `.logo` ruleset.

First we declared the fill color to be pink, which is to provide a default value
for trailing browsers. In the second fill declaration, we pass `--brand-color` into
the `var()` function, which will give us back the value we set for that Custom
Property.

## Default Value (border-radius)

The `var()` function we used in the first example can also provide default values
in case the Custom Property it is trying to access is not set.

For this example, we'll give our buttons a border radius, but we won't set
`--roundness`, so the default value will be used.

```
.button {
    border-radius: var(--roundness, 10px);
}
```

## Cascading Value (theme colors)

Now that we've got the basics under our belt, let's start building the future we
owe ourselves. I really miss the personality that AIM and MySpace had by letting
users express themselves with text and background colors.

For this example, we'll build a school message board. Each student can set their
font, background color and text color for the messages they post on the message
board.

We'll set the students' theme configurations inside of data-attribute rulesets,
so that any descendants, in this case `.message`, that consume the student's
themes will have access to those Custom Properties.

```
[data-student="tyler"] {
    --student-background: blue;
    --student-color: yellow;
    --student-font: "Comic Sans MS", "Comic Sans", cursive;
}

.message {
    background-color: var(--student-background, #fff);
    color: var(--student-color, #000);
    font-family: var(--student-font, Arial, sans-serif);
}
```

<style type="text/css">
.message {
    background-color: var(--student-background, #fff);
    color: var(--student-color, #000);
    font-family: var(--student-font, Arial, sans-serif);
}
[data-student="tyler"] {
    --student-background: blue;
    --student-color: yellow;
    --student-font: "Comic Sans MS", "Comic Sans", cursive;
}
</style>
<article data-author="chris">
    <p class="message">
        I am a message and I should be Arial.
    </p>
</article>
<article data-student="tyler">
    <p class="message">
        This was literally my AIM configuration, but also bold.
    </p>
</article>

_Author's note:_ While writing this article, I discovered Comic Sans is not availble
on Ubuntu by default and installed it to verify the above CSS was correct.




## Scoped Variables (link variations)

## Mixins (vertical rhythm)

## Inline custon props (grid)

```
Code
```
