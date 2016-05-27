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

  navigate(e.button);
});

var navigate = function(key){
  console.log(key);
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


/*

Examples!

*/

Slides.examples = {};

Slides.examples.js_tabs = function(){
  $('.example--js-tabs .js-tab-content').not(':first').hide();

  $('.js-tab').on('click', function(e){
    e.stopPropagation();

    $('.example--js-tabs .js-tab-content').hide();

    var content = $(this).data('tab');

    $('#' + content).show();
  });
};

Slides.examples.css_and_js_tabs = function(){

  $('.js-tab').on('click', function(e){
    e.stopPropagation();

    $('.example--css-and-js-tabs .tab-content').removeClass('active');

    var content = $(this).data('tab');

    $('#' + content).addClass('active');
  });
};

Slides.examples.css_tabs = function(){
  $('label, input').on('click', function(e){
    e.stopPropagation();
  });
};

Slides.examples.js_hover = function(){
  // javascript hover example
  $('.js-hover').on('mouseover', function(){
    $(this).animate({opacity: 0}, 2000);
  }).on('mouseout', function(){
    $(this).animate({opacity: 1}, 2000);
  })
};

Slides.examples.js_coin_toss = function(){
  $(document).on('click', '#coin-toss-button', function(e){
    e.stopPropagation();
    $('#result').text(tossCoin());
  });

  function tossCoin(){
    return Math.floor(Date.now()) % 2 ? 'heads' : 'tails';
  }
};

Slides.examples.js_coin_toss_no_jquery = function(){

};

(function(){
  Slides.app.start();
})();
