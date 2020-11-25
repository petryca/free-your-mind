(function () {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';
    
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://style/mapbox/dark-v10',
        center: [5.885268, 51.983398],
        zoom: 13
    });
    
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());
    
    var marker = document.createElement('div');
    marker.className = 'marker';
    
    new mapboxgl.Marker(marker)
        .setLngLat([5.878166, 51.986035])
        .addTo(map);
    
    
})();