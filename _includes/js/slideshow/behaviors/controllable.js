Slides.Behaviors.Controllable = Marionette.Behavior.extend({
  ui: {
    next: '.js-next',
    prev: '.js-prev',
  },

  events: {
    'click @ui.next' : "next",
    'click @ui.prev' : "prev",
    'keydown' : "keypress"
  },

  prev: function(e){
    this.navigate(this.find_prev());
  },

  next: function(e){
    this.navigate(this.find_next());
  },

  keypress: function(e){
    debugger;
    console.log(e.keyCode || e.which)
  },

  navigate: function(i){
    Backbone.history.navigate(i, {trigger: true});
  },

  current_index: function(){
    return parseInt(Backbone.history.getFragment().split('/')[0]);
  },

  find_next: function(){
    return String(this.current_index() + 1);
  },

  find_prev: function(){
    return String(this.current_index() - 1);
  }

});
