Slides.Views.Slide = Backbone.Marionette.ItemView.extend({
  className: "slide grid",
  tagName: "section",

  render: function(){
    var slide = $(Slides.$views[this.options.index]).html();
    return this.$el.html(slide);
  },

  behaviors: {
    Controllable: {}
  }
});
