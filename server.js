var express = require("express");
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//..................................................

app.use("/homePage",express.static(__dirname));
//console.log(__dirname);
app.use(express.static('./public')); 	
//..........................................................registration
app.post("/data",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("users").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});
//..........................................................login
app.post("/login",function(request,response){
	 //console.log(request.body);
    response.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
     Mongo.connect(url,function(err,database){
		 
         if(err) throw err;
		 console.log("db reaching");
         var db = database.db("sharath");
         var data = request.body;
         console.log("user email sent is",data.userName);
		 console.log("user pass sent is",data.pass);
		 
         var res1 = db.collection("users");
		 
	//	 db.demo.find({$and:[{"name":"chandu","pass":"12345"}]})
	//here we are mathing email not username do not get confused by name its wrong ..but logic is working :)
         res1.find({$and : [{"email":data.userName,"pass":data.pass}]}).toArray(function(err,result){
             if(err) throw err;
			 
//console.log("bye",res2);
             if(result.length ==1){
				 console.log("bye*********************",result);
				 console.log("name issss",result.name);
				  console.log("email issss",result.email);
                 response.send(true);
             }
             else{
                 response.send(false);
             }
         });
         database.close();
     });
 
 });
 //..........................................................




//..................................................
app.listen(3000,function(){
    console.log("server running  @3000....");
});
