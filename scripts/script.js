$(function(){

var pozadie = $(".hero");
var tabulka = $(".form-box")

pozadie.hide().delay(3000).show("fade", 2000);
tabulka.hide().delay(4000).show("clip", 1000);



setTimeout(function() {
    $('body')
      .removeClass('loading')
      .addClass('loaded');
  }, 3000);


});