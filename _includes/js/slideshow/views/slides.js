Slides.Views.Slide = Backbone.Marionette.ItemView.extend({
  tagName: "section",
  slide: function(){
    return $(Slides.$views[this.options.index]);
  },
  className: function(){
    return "slide grid " + this.slide().attr('class');
  },

  render: function(){
    return this.$el.html(this.slide().html());
  },

  behaviors: {
    Controllable: {}
  }
});
