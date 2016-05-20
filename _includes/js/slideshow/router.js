Slides.Router = Marionette.AppRouter.extend({
  appRoutes: {
    ":index(/:slug)": "render",
    "*all": "render"
  }
});

Slides.Controller = Marionette.Object.extend({
  render: function(index){
      var i = parseInt(index);

      if(0 <= i && i < Slides.$views.length){
        Slides.app.container.show(new Slides.Views.Slide({index: i}));
      }else if(i < 0){
        Backbone.history.navigate("0", {trigger: true});
      } else {
        Backbone.history.navigate(String(Slides.$views.length - 1), {trigger: true});
      }

  },
});
