//var http = require('http');
var express=require('express');
var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app=express();

app.get('/',function (req, res) {
		res.set({'Content-Type': 'application/json',
		"Access-Control-Allow-Origin" : "*","Access-Control-Allow-Credentials" : true});
	Mongo.connect(url,function(err,database){
		if(err) throw err;
		var dbase = database.db("GreatoutCart");
		var res1 = dbase.collection("order");
		res1.find().toArray(function(err,result){
			if(err) throw err;
			res.write(JSON.stringify(result));
	console.log('data',result);
			res.end();
		});
		database.close();
	});
	
	});
	
//Address 

app.get('/abc',function (req, res) {
		res.set({'Content-Type': 'application/json',
		"Access-Control-Allow-Origin" : "*","Access-Control-Allow-Credentials" : true});
	Mongo.connect(url,function(err,database){
		if(err) throw err;
		var dbase = database.db("sharath");
		var res1 = dbase.collection("users");
		res1.find().toArray(function(err,result){
			if(err) throw err;
			res.write(JSON.stringify(result));
	console.log('data1',result);
			res.end();
		});
		database.close();
	});
	
	});
	
	app.post('/setData',function (req, res) {
		res.set({'Content-Type': 'application/json',
		"Access-Control-Allow-Origin" : "*","Access-Control-Allow-Credentials" : true});
	Mongo.connect(url,function(err,database){
		if(err) throw err;
		var dbase = database.db("sharath");
		var res1 = dbase.collection("users");
		var addr = req.body;
		console.log('addr');
		var id1= "5a6d3d06341f3b276837f3dd";
		res1.updateOne({"_id":id1},{"sadd1": addr}).toArray(function(err,result){
			if(err) throw err;
			res.write(JSON.stringify(result));
	console.log('updated',result);
			res.end();
		});
		database.close();
	});
	
	});
	
	
	
app.listen(8085, function(){
console.log("server running")
});
