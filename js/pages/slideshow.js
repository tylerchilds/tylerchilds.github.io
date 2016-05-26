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

  var key = e.which || e.keyCode || -1;
  navigate(key);
});

$(document).on("click", function(e){
  e.preventDefault();
  e.stopPropagation();
console.log(e.which);
  navigate(e.button);
});

var navigate = function(key){
  //console.log(key);
  switch(key){
    case 1: // mouse back
    case 33: // page down
    case 37: // left
    case 38: // up
      Slides.app.vent.trigger("slide:prev");
      break;
    case 0: // mouse click
    case 13: // enter
    case 34: // page up
    case 39: // right
    case 40: // down
      Slides.app.vent.trigger("slide:next");
      break;
    default:
      break;
  }
};

(function(){
  Slides.app.start();
})();


/*

Examples!

*/

// javascript hover example
$(document).on('mouseover', '#js-hover', function(){
  $(this).animate({opacity: 0}, 2000);
}).on('mouseout', '#js-hover', function(){
  $(this).animate({opacity: 1}, 2000);
})


// coin toss
$(document).on('click', '#coin-toss-button', function(e){
  e.stopPropagation();
  $('#result').text(tossCoin());
});

function tossCoin(){
  return Math.floor(Date.now()) % 2 ? 'heads' : 'tails';
}
