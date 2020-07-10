var L = require('leaflet');
const axios  = require('axios');

var map = L.map('map',{

    center: [33.456,-12.453],
    zoom: 8

});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



axios.get('http://localhost:4000/pnt/all/').then((response)=>{
    L.geoJSON(response.data,{
		style:myStyle
	}).addTo(map);
   }).catch(e=>{
    console.log(e);
   });