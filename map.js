var L = require('leaflet');
const axios  = require('axios');

var map = L.map('map',{

    center: [33.456,-12.453],
    zoom: 8

});



axios.get('http://localhost:4000/ply/all/').then((response)=>{
    L.GeoJSON(response.data,{}).addTo(map);
   }).catch(e=>{
    console.log(e);
   });
      