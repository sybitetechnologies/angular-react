var express = require('express');
var bodyParser = require("body-parser");
var path=require("path")

var Router=require("./router");


var app = express();
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname,"../App")))
app.use('/', Router);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



