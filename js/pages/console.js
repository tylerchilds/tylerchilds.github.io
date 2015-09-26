var current = JSON.parse(localStorage.getItem('player'));
var player;
var engine;

$(function(){
  initialize();

  $('form').on('submit', function(ev){
    ev.preventDefault();
    engine.submit(ev);
    return false;
  });
});

function initialize(){
  var $prompt = $('.js-prompt');
  var $output = $('.js-output');

  player = _.isNull(current) ? new Player() : new Player(current)

  engine = new Engine({
    prompt: $prompt, 
    output: $output,
    player: player
  });

  engine.append("Welcome " + player.name);

  setInterval(function(){
    engine.focus();
  });
}

function Player(options){
  var defaults = {
    name: "Link",
    theme: "dark"
  };

  _.extend(defaults, options);
  this.name = options.name;
  this.theme = options.theme;
  this.initialize();
};

Player.prototype.initialize = function(){
  this.draw();
};

Player.prototype.draw = function(){
  $('body').removeClass('theme--dark theme--light').addClass('theme--'+this.theme);
}

Player.prototype.set_name = function(name) {
  this.name = name;
  engine.append("Name changed to: " + name);
  this.save();
};

Player.prototype.get_name = function() {
  engine.append("Your name is: " + this.name);
};

Player.prototype.set_theme = function(theme) {
  if(theme == 'dark' || theme == 'light'){
    this.theme = theme;
    this.draw();
    this.save();
    return engine.append("Theme updated")
  }

  engine.append("Only themes available are `dark` or `light`.");
};

Player.prototype.save = function() {
  localStorage.setItem('player', JSON.stringify(this));
};

function Engine (options) {
  this.prompt = options.prompt;
  this.output = options.output;
  this.player = options.player;
};

Engine.prototype.submit = function(ev) {
  var value = this.prompt.val();

  this.append("$ "+ value);
  this.prompt.val("");
  
  this.process(value);
  
  // scroll down
  $("html, body").animate({ scrollTop: $(document).height() }, 0);
  
};

Engine.prototype.focus = function() {
  var self = this;
  setTimeout(function() {
    self.prompt.focus();
  }, 1);
};

Engine.prototype.append = function(value) {
  this.output.append("<div>" + value + "</div>");
};

Engine.prototype.process = function(value) {
  var command = value.split(' ')[0];
  var arg = value.split(' ')[1];
  
  switch(true){
    case /^name$/.test(command):
      if(arg) this.player.set_name(arg);
      else this.player.get_name();
      break;
    case /^theme/.test(command):
      this.player.set_theme(arg);
      break;
    case /^clear$/.test(command):
      this.clear();
      break;
    case /^help$/.test(command):
      this.help();
      break;
    default:
      this.error();
  }
};


Engine.prototype.clear = function() {
  this.output.empty();
};

Engine.prototype.help = function() {  
  var help_table = Formatter.table([
    ["name [(string)]:", "set or view your player name"],
    ["theme [dark|light]:", "set or view your player name"],
    ["help:", "display possible commands"], 
    ["clear:", "clear the output console"]
  ]);
  
  var help = "Commands:<br />" + help_table;
  this.append(help);
};

Engine.prototype.error = function(){
  this.append("Didn't quite catch that. Try `help` if you need it.");
};

function Formatter () {};

Formatter.table = function(data) {
  var table = "<table>";
  _.each(data, function(row){
    table += "<tr>";
    _.each(row, function(cell){
      table += "<td>" + cell + "</td>";
    })
    table += "</tr>"
  })
  table += "</table>";
  
  return table;
};