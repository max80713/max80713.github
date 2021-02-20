/* eslint-disable */

$(function () {
  $(".dot").click(function () {
    $(".dot").css("background-color", "white");
    $(this).css("background-color", "lightseagreen");
  });

  $(".dot-1").click(function () {
    $(".photo").fadeOut();
    $(".photo-1").fadeIn();
  });

  $(".dot-2").click(function () {
    $(".photo").fadeOut();
    $(".photo-2").fadeIn();
  });

  $(".dot-3").click(function () {
    $(".photo").fadeOut();
    $(".photo-3").fadeIn();
  });
});
