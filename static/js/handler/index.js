/*
  This files includes the functions related with index html files
*/

function initMap() {
  var uluru = {lat: 37.164471, lng: -3.60338};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(function () {
  initMap();
});
