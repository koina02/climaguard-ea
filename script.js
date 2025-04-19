let map;
let mapAlt;

function initMap() {
  map = L.map('map').setView([0.0236, 37.9062], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      map.setView(userCoords, 8);
      L.marker(userCoords).addTo(map)
        .bindPopup("You are here")
        .openPopup();
    });
  }
}

function initAltMap() {
  mapAlt = L.map('map-alt').setView([0.0236, 37.9062], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(mapAlt);
}

function searchLocation() {
  const query = document.getElementById('location-search').value;
  if (!query) return;

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const loc = [data[0].lat, data[0].lon];
        map.setView(loc, 10);
        L.marker(loc).addTo(map)
          .bindPopup(`${query}`)
          .openPopup();
      } else {
        alert("Location not found!");
      }
    });
}

// Swipe feature
let startX = 0;
document.body.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.body.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    document.getElementById('analysis-panel').classList.add('active');
    if (!mapAlt) initAltMap();
  }
});

function closePanel() {
  document.getElementById('analysis-panel').classList.remove('active');
}

document.addEventListener("DOMContentLoaded", initMap);
