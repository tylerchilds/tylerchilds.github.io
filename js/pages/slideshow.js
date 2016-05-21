---
---

{% include js/slideshow/app.js %}
{% include js/slideshow/views/slides.js %}
{% include js/slideshow/behaviors/controllable.js %}
{% include js/slideshow/router.js %}

Slides.app.addInitializer(function(options){
  Slides.app.router = new Slides.Router({controller: new Slides.Controller()});
});

Slides.app.on("start", function(){
  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start({
    root: "/presentations/frontend-toolkit/"
  });
});

$(document).on("keyup", function(e){
  e.preventDefault();
  e.stopPropagation();

  var key = e.which || e.keyCode || 0;

  switch(key){
    case 37: // left
      Slides.app.vent.trigger("slide:prev");
      break;
    case 13: // enter
    case 39: // right
      Slides.app.vent.trigger("slide:next");
      break;
    default:
      break;
  }
  console.log(key)
});

(function(){
  Slides.app.start();
})();
