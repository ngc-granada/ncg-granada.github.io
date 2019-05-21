/*
  This files includes the functions related with language html files
*/

$(document).ready(function () {
  $(".title").click(function(){
    $(this).toggleClass("list-group-item-light")
    $(this).find(".content").fadeToggle()
  });
});
