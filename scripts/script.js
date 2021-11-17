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
/************************************************* */
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}