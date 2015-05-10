var bingo_options = [];
var bingo_days = ['mon', 'wed', 'fri'];
var days_length = bingo_days.length;

var prefix = "shirt";

var shirt_length = 15;

for(var i = 0; i < shirt_length; i++){
  for(var day = 0; day < days_length; day++){
    bingo_options.push({
      shirt: prefix + "_" + i,
      day: bingo_days[day]
    });
  }
}

$(function(){
  for(var i = 25; i > 0; i--){
    var random = Math.floor((Math.random() * i) + 1);

    var shirt = bingo_options[random].shirt;
    var day = bingo_options[random].day;

    bingo_options.splice(random, 1);

    $('.bingo-board').append('<div class="cell" data-day="'+ day +'"><img src="/img/shirts/'+ shirt +'.jpg" /></div>');
  }

  $(document).trigger('board_loaded');
});


$(window).on('load resize board_loaded', function(){
  var $cell = $('.bingo-board .cell');
  var cell_width = $cell.width();

  $cell.css('height', cell_width);
});