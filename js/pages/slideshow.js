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

$(document).on("click", 'a', function(e){
  e.stopPropagation();
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

    var content_id = $(this).data('tab');

    $('#' + content_id).show();
  });
};

Slides.examples.css_and_js_tabs = function(){

  $('.js-tab').on('click', function(e){
    e.stopPropagation();

    $('.example--css-and-js-tabs .tab-content').removeClass('active');

    var content_id = $(this).data('tab');

    $('#' + content_id).addClass('active');
  });
};

Slides.examples.css_tabs = function(){
  $('label, input').on('click', function(e){
    e.stopPropagation();
  });
};

Slides.examples.js_hover = function(){
  $('.hidden').css('opacity', 0);
  $('.js-hover').on('mouseover', function(){
    $('.hidden').stop(true).animate({opacity: 1}, 2000);
  }).on('mouseout', function(){
    $('.hidden').stop(true).animate({opacity: 0}, 2000);
  });
};

Slides.examples.js_coin_toss = function(){
  $(document).on('click', '#coin-toss-button', function(e){
    e.stopPropagation();
    $('#result').text(Date.now() % 2 ? 'heads' : 'tails');
  });
};

Slides.examples.js_coin_toss_no_jquery = function(){
  var button = document.getElementById('coin-toss-button');
  var result = document.getElementById('result');

  button.addEventListener('click', function(e){
    e.stopPropagation();
    result.textContent = Date.now() % 2 ? 'heads' : 'tails';
  });
};

(function(){
  Slides.app.start();
})();
