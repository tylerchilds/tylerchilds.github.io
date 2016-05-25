var Slides = {};
Slides.Views = {};
Slides.Behaviors = {};

Slides.start_time = Date.now();
Slides.$views = $('#js-slides').remove().find("> *");
Slides.app = new Marionette.Application();

Slides.app.addRegions({
  container: "#app-container"
});

Marionette.Behaviors.behaviorsLookup = function() {
  return Slides.Behaviors;
}
