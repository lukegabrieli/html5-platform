function initialize() {
  var myLatlng = new google.maps.LatLng(47.615175, -122.318403);
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'The Stranger'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
