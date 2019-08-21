const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route');

mongoose.connect(config.DB,{useNewUrlParser: true}).then(
    ()=>{
        console.log('Database is conneceted')
    },
    err => {console.log('Can not connect to the database'+err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/business',businessRoute);

app.listen(PORT, ()=>{
    console.log('server is running on Port:',PORT);
})
