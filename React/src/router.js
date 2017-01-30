var qs = require('querystring');
var jsonfile = require('jsonfile')
var Router = require("express").Router();
var request = require('request');
var fs=require("fs-extra")



Router.route("/user").get(getuser);
Router.route("/postu").post(postuser);

function getuser(req,res){
	file= 'API/api'; 
    jsonfile.readFile(file, function(err, obj) {
        if (err)
            res.send(err);
        else
            res.json(obj);
    })
}

function postuser(req,res){
	file= 'API/api'; 
	fs.readFile(file, function (err, data) {
	    var json = JSON.parse(data);
	    json.push(req.body);    
	    fs.writeFile(file, JSON.stringify(json), function(err){
	      if (err) throw err;
	      console.log('The "data to append" was appended to file!');
	    });
	})
}

module.exports = Router;