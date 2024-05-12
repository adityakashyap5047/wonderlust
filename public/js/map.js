mapboxgl.accessToken = mapToken;
coordinate = coordinates.split(",")
const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinate,
    zoom: 9
});


const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(coordinate)
    .setPopup(new mapboxgl.Popup({offsrt: 25})
    .setHTML(`<h4>${listingLocation}</h4><p>Exact location will be provided after booking</p>`))
    .addTo(map);