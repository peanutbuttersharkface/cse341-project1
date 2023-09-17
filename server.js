const express = require('express');
console.log(express);
const mongodb = require('./data/database');
console.log(mongodb);
const app = express();
console.log(app);
const port = process.env.PORT || 3000;
console.log(port);
app.use('/', require('./routes'));

//app.listen(port,() => {console.log(`Contacts is listening and node Running on port ${port}`)}); 
mongodb.initDb((err) =>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port,() => {console.log(`Database is listening and node Running on port ${port}`)}); 
    }
});

