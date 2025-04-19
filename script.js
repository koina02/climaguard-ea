let map, heatmap;

// Initialize the map
function initMap() {
    // Create the map centered on Nairobi, Kenya
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -1.286389, lng: 36.817223}, // Nairobi as default center
        zoom: 7,
        mapTypeId: 'roadmap'
    });

    // Sample heatmap data (replace with actual climate data)
    const heatmapData = [
        new google.maps.LatLng(-1.286389, 36.817223),
        new google.maps.LatLng(-0.023559, 37.906193),
        new google.maps.LatLng(-1.292066, 36.821946),
        new google.maps.LatLng(-0.919220, 34.692800),
    ];

    // Create the heatmap layer
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map,
        radius: 20
    });

    // Search bar logic
    const searchInput = document.getElementById('search-bar');
    const autocomplete = new google.maps.places.Autocomplete(searchInput);
    autocomplete.bindTo('bounds', map);

    // When a place is selected, center the map on that location
    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        // Set map view to the selected location
        map.setCenter(place.geometry.location);
        map.setZoom(10);
    });
}

// Initialize the map when the page loads
google.maps.event.addDomListener(window, 'load', initMap);

