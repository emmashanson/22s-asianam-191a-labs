// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5};

let retirehere = L.featureGroup();
let retireelsewhere = L.featureGroup();

let layers = {
    "Will retire where they live now": retirehere,
    "Will retire elsewhere": retireelsewhere
};

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT6eLIunN6D1XqWjWPN4LokHFRMHou0OFkWyhuGCpm7c-DI0HnCXf__DmPx0ft_8FiT1FrPZWlY-D5H/pub?output=csv"

const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

// add layer control box
L.control.layers(null,layers).addTo(map);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

function addMarker(data){
    if(data['Is where you want to retire the same as where you currently live'] == "yes") {
        circleOptions.fillColor = "red"
        retirehere.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Will retire where they live now</h2>`))
        createButtons(data.lat,data.lng,data.location)
        }
    else{
        circleOptions.fillColor = "blue"
        retireelsewhere.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Will retire elsewhere</h2>`))
        createButtons(data.lat,data.lng,data.location)
    }
    return data
};

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
};

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
};

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    retirehere.addTo(map) // add our layers after markers have been made
    retireelsewhere.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([retirehere,retireelsewhere]);
    map.fitBounds(allLayers.getBounds());
};

loadData(dataUrl)
