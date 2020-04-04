const express = require('express');
const app = express();
const port  = process.env.PORT ||3000;
const path =require('path');
const user = require('./routes/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const connection = mongoose.connect(config.database);
if(connection){
  console.log("Database connected");
}else {
  console.log("Database not connected")
}

app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);

app.listen(port,function () {
    console.log("Listening to port " +port);
});

app.get('/',function(req,res){
  res.send('Hello Sandali')
})


