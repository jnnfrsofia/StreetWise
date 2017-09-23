  $("#gmimap0").click(function() {
      $('form').css('display', 'block');
      console.log("mapclicked");
      $('#currentLocMap').css('display', 'none');

  });

  // function displayForm() {
  //     $('form').css('display', 'block');
  //       console.log("marker clicked");
  //       $('#currentLocMap').css('display', 'none');
  // }

  $('#submitForm').click(function() {
      $('#currentLocMap').css('display', 'block');
      $('form').css('display', 'none');
  })

  var map, infoWindow;

  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15
      });
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
          }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
          });
      } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
  }
  $(document).ready(function() {

      // Google maps that shows where you are at

      function initMap(latitude, longitude) {
          console.log(latitude)
          console.log(longitude)
          var currentLocation = { lat: latitude, lng: longitude };
          var map = new google.maps.Map(document.getElementById('currentLocMap'), {
              zoom: 15,
              center: currentLocation
          });
          var marker = new google.maps.Marker({
              map: map,
              draggable: true,
              animation: google.maps.Animation.DROP,
              position: currentLocation

          });
          marker.addListener('click', toggleBounce);

          function toggleBounce() {
              if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
              } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
              }
          }
      }



      //Set geo location lat and long

      var currgeocoder;

      navigator.geolocation.getCurrentPosition(function(position, html5Error) {

          geo_loc = processGeolocationResult(position);
          currLatLong = geo_loc.split(",");
          initializeCurrent(currLatLong[0], currLatLong[1]);

      });

      //Get geo location result

      function processGeolocationResult(position) {
          html5Lat = position.coords.latitude; //Get latitude
          html5Lon = position.coords.longitude; //Get longitude
          html5TimeStamp = position.timestamp; //Get timestamp
          html5Accuracy = position.coords.accuracy; //Get accuracy in meters
          return (html5Lat).toFixed(8) + ", " + (html5Lon).toFixed(8);
      }

      //Check value is present or not & call google api function

      function initializeCurrent(latcurr, longcurr) {
          console.log(latcurr)
          console.log(longcurr)
          var latitude = parseFloat(latcurr);
          var longitude = parseFloat(longcurr);
          initMap(latitude, longitude);
          currgeocoder = new google.maps.Geocoder();
          console.log(latcurr + "-- ######## --" + longcurr);

          if (latcurr != '' && longcurr != '') {
              var myLatlng = new google.maps.LatLng(latcurr, longcurr);
              return getCurrentAddress(myLatlng);
          }
      }

      //Get current address

      function getCurrentAddress(location) {
          currgeocoder.geocode({
              'location': location

          }, function(results, status) {

              if (status == google.maps.GeocoderStatus.OK) {
                  console.log(results[0]);
                  $("#location_input").text(results[0].formatted_address);

              } else {
                  alert('Geocode was not successful for the following reason: ' + status);
              }
          });
      }


  });