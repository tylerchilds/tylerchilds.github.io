# CSS and Javascript
*Best friends forever*

-

## Objective

To learn the basics of the front end "stack" and how they should and shouldn't work together.

* HTML
* CSS
* Javascript

## The Stack

### HTML: Content Structure

Hy·per·Text Mark·up Lan·guage
/ˈhīpərˌtekst ˈmärˌkəp ˈlaNGɡwij/

* Content Structure
  * Heirarchy
  * Semantics
* Form Controls
* Hooks for CSS and Javascripts

### CSS: Design (User Interface)

Cas·cad·ing Style Sheet
/kaˈskādiNG stīl SHēt/

* Classes and IDs to style HTML
* Layout and Positioning
* Design and Styling
* Simple animations and interactions

### Javascript: Interaction (User Experience)

Ja·va·Script
/ˈjävəskript,ˈjavə-/

* Interaction with a back end
  * APIs
  * Track the action
* Complex animations
* Event handling

## The Overlap

_Law of the instrument_

"I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail." - Abraham Maslow

Basic actions involving certain click, hover, and focus can all be handled by CSS, Javascript or both together.

So how do you know which one to use?

### Usually both

Just try to keep your javascript clear of manually changing CSS. You should just use your javascript to toggle CSS classes or to utilize animation libraries, such as Velocity.

jQuery is the perfect example of blending CSS and javascript, since you use CSS selectors to interact with your javascript.

#### With/without jQuery

Expanding/Collapsing a content section: Event listeners and selectors.

## Side by Side CSS vs Javascript

### Hover vs Mouseover

Show simple button animations

## Progressive Enhancement

#### Pure HTML

Just links to other pages

#### AJAX Requests

Calls the other pages

#### jQuery show/hide

Just shows and hides the content that's already on the page.

#### Javascript and CSS

Javascript that adds/removes classes to show/hide the content. This is my reccomendation, 99% of the time.

#### Pure CSS

Just because we can do this, does it mean we should?

## Resources

30 CSS Selectors
Bootstrap
Cutestrap