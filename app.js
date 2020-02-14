const express = require('express');
const app = express();
const port= process.env.PORT ||3000;
const path=require('path');

app.use(express.static(path.join(__dirname,"path")));

app.listen(port,function () {
    console.log("Listening to port " +port);
});

app.get('/',function(req,res){
  res.send('Hello Sandali')
})

app.get('/users',function(req,res){
  res.send('Hello Users')
})

app.get('/sandali',function(req,res){
  res.send('Hello Sooti')
})