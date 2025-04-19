let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -1.286389, lng: 36.817223 },
    zoom: 7,
    mapTypeId: "roadmap",
  });

  const heatmapData = [
    new google.maps.LatLng(-1.286389, 36.817223),
    new google.maps.LatLng(-0.023559, 37.906193),
    new google.maps.LatLng(-1.292066, 36.821946),
    new google.maps.LatLng(-0.919220, 34.692800),
  ];

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    map: map,
    radius: 20,
  });

  const searchInput = document.getElementById("search-bar");
  const autocomplete = new google.maps.places.Autocomplete(searchInput);
  autocomplete.bindTo("bounds", map);

  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    if (!place.geometry) return;
    map.setCenter(place.geometry.location);
    map.setZoom(10);
  });
}

google.maps.event.addDomListener(window, "load", initMap);
