var tabs = document.querySelectorAll('.tab');
var allPanels = document.querySelectorAll(".schedule");

function activateTab(tab) {
  //remove active de todas as outras tabs
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });
  //adiciona active em t
  tab.classList.add('active');
}

function openCourse(item, day) {
    for(var i=0;i<allPanels.length;i++){
        allPanels[i].style.display = 'none';
    }
    document.getElementById(day).style.display = 'block';
    activateTab(item);
}

function initMap() {
    var myLatlng = {lat: -23.482069, lng: -47.425131};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatlng,
	scrollwheel: false,
});

var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
});

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}
