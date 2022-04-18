// declare the map
const map = L.map('the_map').setView([34.079,-118.444], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(33.68,-117.82,'Home','This is my hometown!')
addMarker(33.66,-117.81,'Work-OC','I work at 2 sites, but this is where I work at when I am in OC!')
addMarker(33.8,-118,'Work-LA','My other site is located in LA, and here it is!')
addMarker(34,-118,'School + Second Home','UCLA is my second home and will be for a few more years!')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title)
    return message
}
//another button
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}
