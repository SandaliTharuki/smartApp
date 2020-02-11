const express = require('express');
const app = express();
const port= process.env.PORT ||3000;


app.listen(port,function () {
    console.log("listening to port"+port);
});

app.get('/', function (req, res) {
    res.send('hello world')
  })

  app.get('/sandali', function (req, res) {
    res.send('hello sandali')
  })

  app.get('/s', function (req, res) {
    res.send('hello ')
  })

  app.get('/a', function (req, res) {
    res.send('hello ')
  })

  
