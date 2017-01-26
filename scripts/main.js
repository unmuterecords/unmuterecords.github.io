(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function hoverColor(className, color){
  $(className).mouseenter(function(){
    $(this).animate({ color: color }, { duration: 200, queue: false});
  });

  $(className).mouseleave(function(){
    $(this).animate({ color: "white" }, { duration: 200, queue: false});
  });
}

function centerVertical(parent, subject) {
  $(parent).css( "paddingTop", 0); //resets size of div
  var parent_height = $(parent).height();
  var subject_height = $(subject).outerHeight();

  var padding_amount = (parent_height - subject_height) / 2;

  if ($(".is-home-page").height()){ // is a dirty fix for mobile, tried using a script to adjust height but typekit loading fucks with it. Only loads on homepage
    console.log("is home page");
    padding_amount = padding_amount;
  }

  console.log("subject height: " + subject_height);
  console.log("parent height: " + parent_height);
  $(parent).css( "paddingTop", padding_amount);
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}




$(document).ready(function(){

  if ($(".index-screen").length > 0) {
    $(".index-screen").css({"display": "none"})

     $(window).on("load", function(){
       $(".index-screen").fadeIn();
     })

  }

  hoverColor(".facebook", "#3b5998");
  hoverColor(".twitter", "#4099ff");
  hoverColor(".youtube", "#cc181e");

  var menu_open = false;

  $(".hamburger-container").click(function(){
    if (menu_open == false) {
      $(".navbar-links").slideDown();
      menu_open = true;
    }
    else if (menu_open == true) {
      $(".navbar-links").slideUp();
      menu_open = false;
    }
  })

  if (isMobile()) {

    centerVertical(".index-screen", ".center-container"); //home page text
    centerVertical(".cover-picture", ".center-text-page"); //home page text



  }


})

},{}]},{},[1]);
