Slides.Behaviors.Controllable = Marionette.Behavior.extend({

  onShow: function(){
    _.bindAll(this, 'prev', 'next');

    Slides.app.vent.on("slide:prev", this.prev);
    Slides.app.vent.on("slide:next", this.next);
  },

  onDestroy: function(){
    Slides.app.vent.off("slide:prev");
    Slides.app.vent.off("slide:next");
  },

  prev: function(){
    this.slide(this.find_prev());
  },

  next: function(){
    this.slide(this.find_next());
  },

  find_next: function(){
    return this.current_index() + 1;
  },

  find_prev: function(){
    return this.current_index() - 1;
  },

  current_index: function(){
    return parseInt(Backbone.history.getFragment().split('/')[0]);
  },

  slide: function(i){
    if(this.within_bounds(i)) Backbone.history.navigate(String(i), {trigger: true});
  },

  within_bounds: function(i){
    if(0 <= i && i < Slides.$views.length) return true;
  }

});
