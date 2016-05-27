Slides.Views.Slide = Backbone.Marionette.ItemView.extend({
  tagName: "section",

  behaviors: {
    Controllable: {}
  },

  slide: function(){
    return $(Slides.$views[this.options.index]);
  },

  className: function(){
    return "slide grid " + this.slide().attr('class');
  },

  render: function(){
    return this.$el.html(this.slide().html());
  },

  onShow: function(){
    this.set_duration_offset();

    if(this.slide().data()){
      var function_name = this.slide().data('invoke');
      if(function_name) Slides.examples[function_name]();
    }
  },

  set_duration_offset: function(){
    var delay = (Slides.start_time - Date.now()) % 60000;
    $('.slide, .lead-in').css('-webkit-animation-delay', delay+'ms');
  }
});
