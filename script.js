document.addEventListener('DOMContentLoaded', function () {
    // Your Windy API key
    const windyKey = 'x1xLatrDTSn7Lyz3qv5N2nnSz2x5q38S';

    // Windy API initialization options
    const options = {
        key: windyKey,
        lat: 50.4,
        lon: 14.3,
        zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // Use the API to create and display the map
    const { map } = windyAPI;
    L.popup()
        .setLatLng([options.lat, options.lon])
        .setContent('Hello from Windy API')
        .openOn(map);
});
