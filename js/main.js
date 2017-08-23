var tabs = document.querySelectorAll('.tab');
var allPanels = document.querySelectorAll(".schedule");

function activateTab(tab) {
  //remove active de todas as outras tabs
  for (i = 0; i < tabs.length; ++i) {
    tabs[i].classList.remove('active');
  }
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

//Mapa
function initMap() {
  const myLatlng = {lat: -23.482069, lng: -47.425131};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatlng,
    scrollwheel: false,
  });

  const marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Fatec Sorocaba',
    icon: 'img/pin.png'
  });

  const infowindow = new google.maps.InfoWindow({
    content: '<strong>Fatec Sorocaba</strong> <br> Av. Eng. Carlos Reinaldo Mendes, 2015',
    maxWidth: 300
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  infowindow.open(map,marker);

  map.addListener('center_changed', function() {
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });
}