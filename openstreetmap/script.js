let mapOptions = {
    center: [51.958, 9.141],
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.bindPopup("<b>Kristis Parcel Shop</b><br>24/7 parcel").openPopup();
marker.addTo(map);

let marker2 = new L.Marker([51.988, 9.141]);
marker2.bindPopup("<b>Apex Parcel Shop</b><br>Yet another parcel").openPopup();
marker2.addTo(map);
