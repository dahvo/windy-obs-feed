document.addEventListener('DOMContentLoaded', function () {
    // Your Windy API key
    const windyKey = WINDY_API_KEY;

    // Windy API initialization options
    const options = {
        key: windyKey,
        lat: 50.4, // You can change this to your desired latitude
        lon: 14.3, // You can change this to your desired longitude
        zoom: 5, // Adjust the zoom level as needed
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
});
