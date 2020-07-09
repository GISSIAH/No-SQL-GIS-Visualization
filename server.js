const express = require('express');
const ejs = require('ejs');
const router = require('./routes/index.js');


var app = express();

app.set('view engine','ejs');
app.use('/',router);
app.use('/',express.static('public'));


app.listen(3000,()=>{
    console.log('listening to port 3000');
});