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

(function(){
  Slides.app.start();
})();
