

// Hintergrundlayer Satellitenbild
let startLayer = L.tileLayer.provider("Esri.WorldImagery")

// Blick auf Innsbruck
const map = L.map("map", {
    center: [48.137222, 11.575556],
    zoom: 13,
    layers: [
        startLayer
    ]
});


// Maßstab
L.control.scale({
    imperial: false
}).addTo(map);

