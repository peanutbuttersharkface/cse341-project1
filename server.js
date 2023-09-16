const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

//app.listen(port,() => {console.log(`Contacts is listening and node Running on port ${port}`)}); 
mongodb.initDb((err) =>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port,() => {console.log(`Contacts is listening and node Running on port ${port}`)}); 
    }
});

