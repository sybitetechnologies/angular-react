var express = require('express');
var path= require("path");
var bodyParser = require("body-parser");
var Router=require("./src/router")


var app = express();
	app.use(bodyParser.json())
	app.use(express.static(path.join(__dirname,'./public')));
	app.use("/",Router );


    app.listen(8770, function () {
        console.log('Example app listening on port 8770    !');
  });