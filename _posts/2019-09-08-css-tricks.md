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
powerful and they'll make you strong too, _like when you eat your vegetables_.

## Getting Started

When first approaching Custom Properties, a common question is "What's the browser
support?" and then maybe, "How do I set my brand color?"

For browser support: It does not matter since you can set a fallback, if you need one.
If that doesn't convice your co-workers, here are the facts:

Global market share is 85% ([Chrome + Firefox + Edge + Safari + Opera](https://www.netmarketshare.com/browser-market-share.asp)),
but you should cross-reference [caniuse](https://caniuse.com/#search=custom%20properties)
with your user base to determine how much and where you should progressively
enhance your project.

## Variables

For setting your brand color, let's tackle that with setting a variable as a
Custom Property and then set it on an SVG. We'll also use a fallback to cover
users on trailing browsers.

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

## Default Values

The `var()` function we used in the first example can also provide default values
in case the Custom Property it is trying to access is not set.

For this example, we'll give our buttons a border radius, but we won't set
`--roundness`, so the default value will be used.

```
.button {
    border-radius: var(--roundness, 10px);
}
```

## Cascading Values

Now that we've got the basics under our belt, let's start building the future we
owe ourselves. I really miss the personality that AIM and MySpace had by letting
users express themselves with text and background colors.

For this example, we'll build a school message board. Each student can set their
font, background color and text color for the messages they post on the message
board.

### User Based Themes

We'll set the students' theme configurations inside of data-attribute rulesets,
so that any descendants, in this case `.message`, that consume the student's
themes will have access to those Custom Properties.

```
.message {
    background-color: var(--student-background, #fff);
    color: var(--student-color, #000);
    font-family: var(--student-font, "Times New Roman", serif);
    margin-bottom: 10px;
    padding: 10px;
}
[data-student-theme="rachel"] {
    --student-background: rgb(43, 25, 61);
    --student-color: rgb(252, 249, 249);
    --student-font: ff-tisa-sans-web-pro, sans-serif;
}
[data-student-theme="jen"] {
    --student-background: #d55349;
    --student-color: #000;
    --student-font: Avenir, Helvetica, sans-serif;
}
[data-student-theme="tyler"] {
    --student-background: blue;
    --student-color: yellow;
    --student-font: "Comic Sans MS", "Comic Sans", cursive;
}
```

<style type="text/css">
.message {
    background-color: var(--student-background, #fff);
    color: var(--student-color, #000);
    font-family: var(--student-font, "Times New Roman", serif);
    margin-bottom: 10px;
    padding: 10px;
}
[data-student-theme="rachel"] {
    --student-background: rgb(43, 25, 61);
    --student-color: rgb(252, 249, 249);
    --student-font: Arial, sans-serif;
}
[data-student-theme="jen"] {
    --student-background: #d55349;
    --student-color: #000;
    --student-font: Avenir, Helvetica, sans-serif;
}
[data-student-theme="tyler"] {
    --student-background: blue;
    --student-color: yellow;
    --student-font: "Comic Sans MS", "Comic Sans", cursive;
}
</style>
<section>
    <div data-student-theme="chris">
        <p class="message">
            I've spoken at events and given workshops all over the world at conferences.
        </p>
    </div>
    <div data-student-theme="rachel">
        <p class="message">
            I prefer email over other forms of communication.
        </p>
    </div>
    <div data-student-theme="jen">
        <p class="message">
            This is why I immediately set up my new team with Slack for real-time chat.
        </p>
    </div>
    <div data-student-theme="tyler">
        <p class="message">
            I miss AIM and MySpace, but this message board is okay.
        </p>
    </div>
</section>

Here we've got all of our student themes set using `[data-student-theme]` selectors
for our student theme rulesets. The Custom Properties for background, color, and font
will apply to our `.message` ruleset, if they are set for that student, otherwise
the default values we provided will be used instead.

### Readable Theme Override

As fun and cool as it is for users to control colors, what users pick won't always
be accessible with considerations for contrast, color vision deficiency, or
anyone that prefers their eyes to not bleed when reading.

Let's add a class to provide a readable theme that will override any student
themes when its present.

```
.readable-theme [data-student-theme] {
    --student-background: hsl(50, 50%, 90%);
    --student-color: hsl(200, 50%, 10%);
    --student-font: Verdana, Geneva, sans-serif;
}
```
<style type="text/css">
.readable-theme [data-student-theme]{
    --student-background: hsl(50, 50%, 90%);
    --student-color: hsl(200, 50%, 10%);
    --student-font: Verdana, Geneva, sans-serif;
}
</style>
<section class="readable-theme">
    <div data-student-theme="chris">
        <p class="message">
            I've spoken at events and given workshops all over the world at conferences.
        </p>
    </div>
    <div data-student-theme="rachel">
        <p class="message">
            I prefer email over other forms of communication.
        </p>
    </div>
    <div data-student-theme="jen">
        <p class="message">
            This is why I immediately set up my new team with Slack for real-time chat.
        </p>
    </div>
    <div data-student-theme="tyler">
        <p class="message">
            I miss AIM and MySpace, but this message board is okay.
        </p>
    </div>
</section>

For our readable theme, we are utilizing the cascade to override the student
themes by setting a higher specificity so our background, color, and font will
be in scope and will apply to every `.message` ruleset.

## Scoped Variables

Speaking of scope, we can also scope our Custom Properties and use them to
streamline what is otherwise boilerplate CSS, such as setting all the four
link states.

```
a {
    --link: hsl(230, 60%, 50%);
    --link-visited: hsl(290, 60%, 50%);
    --link-hover: hsl(230, 80%, 60%);
    --link-active: hsl(350, 60%, 50%);
}

a:link {
    color: var(--link);
}

a:visited {
    color: var(--link-visited);
}

a:hover {
    color: var(--link-hover);
}

a:active {
    color: var(--link-active);
}
```

<style type="text/css">
a {
    --link: #4763eb;
    --link-visited: #4763eb;
    --link-hover: #334dcc;
    --link-active: #cc334d;
}

a:link {
    color: var(--link);
}

a:visited {
    color: var(--link-visited);
}

a:hover {
    color: var(--link-hover);
}

a:active {
    color: var(--link-active);
}
</style>

<a href="#foo">Link Example</a>

Now that we've written out all of our link related Custom Properties and set them
for our link states, we don't need to write them anymore. These are scoped to our
`a` ruleset so they are only set on our anchor tags and their children. This
allows us to not pollute the global namespace.

### Grayscale Link

Going forward, we'll control the links for our site by changing the Custom
Properties for our different use cases, such as creating a gray link.

```
.grayscale {
    --link: LightSlateGrey;
    --link-visited: Silver;
    --link-hover: DimGray;
    --link-active: LightSteelBlue;
}
```

<style type="text/css">
.grayscale {
    --link: DimGray;
    --link-visited: Silver;
    --link-hover: LightSlateGrey;
    --link-active: LightSteelBlue;
}
</style>

<a href="#bar" class="grayscale">Link Example</a>

Here we declared a `.grayscale` ruleset, that contains the colors for our
different link states. Since the selector for this ruleset has a greater
specificity then the default, these variables are used and then applied to
the pseudo-class rulesets for our link states.

### Custom Links

If these four custom properties still feel like too much work to set for each link
you want on your site, what if we could set just a single hue?

```
.custom-link {
    --hue: 30;
    --link: hsl(var(--hue), 60%, 50%);
    --link-visited: hsl(calc(var(--hue) + 60), 60%, 50%);
    --link-hover: hsl(var(--hue), 80%, 60%);
    --link-active: hsl(calc(var(--hue) + 120), 60%, 50%);
}

.danger {
    --hue: 350;
}
```


<style type="text/css">
.custom {
    --hue: 90;
    --link: hsl(var(--hue), 60%, 40%);
    --link-visited: hsl(calc(var(--hue) + 60), 60%, 40%);
    --link-hover: hsl(var(--hue), 80%, 20%);
    --link-active: hsl(calc(var(--hue) + 120), 60%, 40%);
}
.danger {
    --hue: 350;
}
</style>

<a href="#box" class="custom">Link Example</a>
<a href="#box?foo" class="custom danger">Link Example</a>

Sweet! For this `.custom` ruleset, we've created a scope where we can
just set a hue and we'll calculate the four link states off of it. This is super
awesome because we can be lazy and accomplished.

Calculations are powerful in combination with Custom Properties since they let
your styles be more expressive with less effort.

## Mixins

A Mixin, in regards to Custom Properties, is a function declared as a
Custom Property value. The arguments for the mixin are other Custom
Properties that will recalculate our mixin when they are changed. This
recalculation will then cause our styles to update.

The `.custom` ruleset above is a Mixin, since we can set the `--hue`
and then our four link states recalculate and get styled.

### Baseline Grid Foundation

Let's learn more about mixins by creating a Baseline Grid to help with Vertical
Rhythm. This way our content has a pleasant cadence by utilizing a consistent
spacing.

```
.baseline,
.baseline * {
    --rhythm: 2rem;
    --line-height: var(--sub-rhythm, var(--rhythm));
    --line-height-ratio: 1.4;
    --font-size: calc(var(--line-height) / var(--line-height-ratio));
}
```

<style type="text/css">
.baseline,
.baseline * {
    --rhythm: 2rem;
    --line-height: var(--sub-rhythm, var(--rhythm));
    --line-height-ratio: 1.4;
    --font-size: calc(var(--line-height) / var(--line-height-ratio));
}

.baseline {
    font-size: var(--font-size);
    line-height: var(--line-height);
}
</style>


We've applied the ruleset for our baseline grid to `.baseline` elements and all
of their children. Setting our Mixins using a wildcard selector gives all of
the matching elements access to the mixins, so that we can use them anywhere.

#### A quick breakdown of the Custom Properties for our Baseline Grid

* `--rhythm` the foundation of our Baseline and can be used for spacing as needed
* `--line-height` is set to our`--rhythm` by default, since `--sub-rhythm` is not set here
  * `--sub-rhythm` allows us to alter our `--line-height` and subsequently `--font-size`, while maintaining the overall Baseline Grid.
* `--line-height-ratio` helps us have a nice spacing between lines of text
* `--font-size` is calculated by dividing our `--line-height` by our `--line-height-ratio`

We also set our `.baseline` ruleset to use the `--font-size` and `--line-height` from our Baseline Grid.

### Baseline Grid Usage

To get started with our baseline grid let's create a tiny webpage. We'll use our
`--rhythm` Custom Property for all of the spacing between our elements.

```
.baseline h2,
.baseline p,
.baseline ul {
    padding: 0 var(--rhythm);
    margin: 0 0 var(--rhythm);
}

.baseline p {
    --line-height-ratio: 1.2;
    font-size: var(--font-size);
    line-height: var(--line-height);
}

.baseline h2 {
    --sub-rhythm: calc(3 * var(--rhythm));
    --line-height-ratio: 1;
    font-size: var(--font-size);
    line-height: var(--line-height);
}

.baseline ul {
    margin-left: var(--rhythm);
}
```

<style type="text/css">
.baseline h2,
.baseline p,
.baseline ul {
    padding: 0 var(--rhythm);
    margin: 0 0 var(--rhythm);
}

.baseline h2,
.baseline p {
    font-size: var(--font-size);
    line-height: var(--line-height);
}

.baseline p {
    --line-height-ratio: 1.2;
}

.baseline h2 {
    --sub-rhythm: calc(3 * var(--rhythm));
    --line-height-ratio: 1;
}

.baseline ul {
    margin-left: var(--rhythm);
}
</style>

<section class="baseline">
    <h2>A Tiny<br/>Webpage</h2>
    <p>
        This is the tiniest webpage. It has three noteworthy features:
    </p>
    <ul>
        <li>Tiny</li>
        <li>Exemplary</li>
        <li>Identifies as Hufflepuff</li>
    </ul>
</section>

For this example, we're essentially utilizing two mixins: `--line-height` and
`--font-size`. For our `h2` and `p`, we need to set the properties `font-size`
and `line-height` to their Custom Property counterparts. This is because our
mixins have been recalculated in those rulesets, but they need to be
set before the updated styling will be applied to them.

#### Word of Caution

When applying Mixins using a wildcard selector, you
**probably do not want** use the Custom Property values in the ruleset itself.
This is because it makes your styles really sticky, since they now have a higher
specificity than any other inheritance that comes along with the cascade.

## Inline Custom Properties

When using Custom Properties, you can also declare them inline and they'll be
used in whatever ruleset that uses them, since they'll have a higher specificity
than whatever the default is.

To demonstrate this, let's build a lightweight Grid System.

```
.grid {
    --columns: auto-fit;

    display: grid;
    column-gap: var(--rhythm);
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
}
```

<style type="text/css">
.super-grid {
    --columns: auto-fit;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
}
</style>

This grid system by default has equal sized columns that will automatically fit
themselves into a single row.

<div class="super-grid">
    <img src="https://www.fillmurray.com/900/600" alt="Bill Murray" />
    <img src="https://www.placecage.com/900/600" alt="Nic Cage" />
    <img src="https://www.placecage.com/g/900/600" alt="Nic Cage gray" />
    <img src="https://www.fillmurray.com/g/900/600" alt="Bill Murray gray" />
    <img src="https://www.placecage.com/c/900/600" alt="Nic Cage crazy" />
    <img src="https://www.placecage.com/gif/900/600" alt="Nic Cage gif" />
</div>

To control the number of columns we can set our `--columns` Custom Property
inline on our grid element.

<div class="super-grid" style="--columns: 3;">
    <img src="https://www.fillmurray.com/900/600" alt="Bill Murray" />
    <img src="https://www.placecage.com/900/600" alt="Nic Cage" />
    <img src="https://www.placecage.com/g/900/600" alt="Nic Cage gray" />
    <img src="https://www.fillmurray.com/g/900/600" alt="Bill Murray gray" />
    <img src="https://www.placecage.com/c/900/600" alt="Nic Cage crazy" />
    <img src="https://www.placecage.com/gif/900/600" alt="Nic Cage gif" />
</div>

## Wrap Up

In conclusion, Custom Properties are very powerful, especially when you use them
with different patterns.

* Variables
* Default Values
* Cascading Values
* Scoped Properties
* Mixins
* Inline Custom Properties

If you know of any other patterns, let us know in the comments.

### Send Off

For our closing cermony, let's animate the color of each character of a phrase
and let's use inline Custom Properties as our offsets.

```
@keyframes rainbow-link {
    0% {
        color: hsl(calc(360 - var(--offset)), 60%, 50%);
    }
    25% {
        color: hsl(calc(450 - var(--offset)), 60%, 50%);
    }
    50% {
        color: hsl(calc(540 - var(--offset)), 60%, 50%);
    }
    75% {
        color: hsl(calc(630 - var(--offset)), 60%, 50%);
    }
    100% {
        color: hsl(calc(720 - var(--offset)), 60%, 50%);
    }
}

.rainbow {
    animation: rainbow-link 6s infinite;
}
```

<style type="text/css">
@keyframes rainbow-link {
    0% {
        color: hsl(calc(360 - var(--offset)), 60%, 50%);
    }
    25% {
        color: hsl(calc(450 - var(--offset)), 60%, 50%);
    }
    50% {
        color: hsl(calc(540 - var(--offset)), 60%, 50%);
    }
    75% {
        color: hsl(calc(630 - var(--offset)), 60%, 50%);
    }
    100% {
        color: hsl(calc(720 - var(--offset)), 60%, 50%);
    }
}

.rainbow {
    --offset: 0;
    animation: rainbow-link 5000ms linear infinite;
    font-weight: bold;
}
</style>

<h2>
    <span
        class="rainbow" style="--offset:   0">T</span><span
        class="rainbow" style="--offset:  19">h</span><span
        class="rainbow" style="--offset:  38">a</span><span
        class="rainbow" style="--offset:  57">n</span><span
        class="rainbow" style="--offset:  76">k</span>
    
    <span
        class="rainbow" style="--offset:  95">y</span><span
        class="rainbow" style="--offset: 114">o</span><span
        class="rainbow" style="--offset: 133">u</span>
    
    <span
        class="rainbow" style="--offset: 152">f</span><span
        class="rainbow" style="--offset: 171">o</span><span
        class="rainbow" style="--offset: 180">r</span>
    
    <span
        class="rainbow" style="--offset: 199">R</span><span
        class="rainbow" style="--offset: 218">e</span><span
        class="rainbow" style="--offset: 237">a</span><span
        class="rainbow" style="--offset: 256">d</span><span
        class="rainbow" style="--offset: 275">i</span><span
        class="rainbow" style="--offset: 294">n</span><span
        class="rainbow" style="--offset: 313">g</span><span
        class="rainbow" style="--offset: 332">!</span>
</h2>
