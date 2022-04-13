// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 3); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker = L.marker([47.6062, -122.3321]).addTo(map) 
        .bindPopup('I visited Seattle over Winter Break of 2021!')
        .openPopup();
        
        let markers = L.marker([40.7128, -74.0060]).addTo(map) 
        .bindPopup('I went to New York over Spring Break!')
        .openPopup();   

        let markerss = L.marker([35.2828, -120.6596]).addTo(map) 
        .bindPopup('I went to Cal Poly Slo for a tennis tournament with Bruin Club Tennis!')
        .openPopup();  
        
        let markersss = L.marker([33.7176, -116.3408]).addTo(map) 
        .bindPopup('I went to Palm Desert to watch Indian Wells for the day!')
        .openPopup();  


function add_marker(lat,long,popup){
    L.marker([lat, long]).addTo(map) 
    .bindPopup(popup)
}

add_marker(47.6062, -122.3321, "I visited Seattle over Winter Break of 2021 to visit my cousins!")
add_marker(40.7128, -74.0060, "I went to New York over Spring Break with some friends and it was my first time at the East Coast!")
add_marker(35.2828, -120.6596, "I went to Cal Poly Slo for a tennis tournament with Bruin Club Tennis!")
add_marker(33.7176, -116.3408, "I went to Palm Desert to watch Indian Wells for the day!")