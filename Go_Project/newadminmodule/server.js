var express = require("express");
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//..................................................


//console.log(__dirname);
app.use(express.static('./public'));
app.use(express.static('node_modules'));

//------------------------------------------------------------------------------------------------------
//..........................................................cart
app.get("/cart",function(request,response){
	console.log("reaching");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('products').find().toArray(function(err, docs){
            if(err) throw err;
            console.log("fetched");
			//console.log(docs);
			
		
			response.send(docs);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});


//..........................................................display
app.get("/display",function(request,response){
	console.log("reaching");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('category1').find().toArray(function(err, docs){
            if(err) throw err;
            console.log("fetched");
			//console.log(docs);
			
		
			response.send(docs);
			 console.log("sending back");
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//..........................................................display 2
app.get("/display2",function(request,response){
	console.log("reaching");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('category2').find().toArray(function(err, docs){
            if(err) throw err;
            console.log("fetched");
			//console.log(docs);
			
		
			response.send(docs);
			 console.log("sending back");
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//..........................................................display 3
app.get("/display3",function(request,response){
	console.log("reaching");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('category3').find().toArray(function(err, docs){
            if(err) throw err;
            console.log("fetched");
			//console.log(docs);
			
		
			response.send(docs);
			 console.log("sending back");
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//..........................................................display 4
app.get("/display4",function(request,response){
	console.log("reaching");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('category4').find().toArray(function(err, docs){
            if(err) throw err;
            console.log("fetched");
			//console.log(docs);
			
		
			response.send(docs);
			 console.log("sending back");
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//..........................................................display 5
app.get("/display5",function(request,response){
	console.log("reaching");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('category5').find().toArray(function(err, docs){
            if(err) throw err;
            console.log("fetched");
			//console.log(docs);
			
		
			response.send(docs);
			 console.log("sending back");
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});
//..........................................................admin
app.post("/data",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("category1").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in category1 db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//delete category1
//..........................................................admin
app.post("/deleteUser",function(request,response){
    console.log("displayed in server");
    console.log(request.body);
    Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
        /*Delete the first customers with the address "Mountain 21":*/
        var myquery = request.body;
        dbo.collection("category1").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    //console.log("reaching");
});
//..........................................................category 2
app.post("/data2",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("category2").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in category 2 db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//delete category2
//..........................................................
app.post("/deleteUser2",function(request,response){
    console.log("displayed in server");
    console.log(request.body);
    Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
        /*Delete the first customers with the address "Mountain 21":*/
        var myquery = request.body;
        dbo.collection("category2").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    //console.log("reaching");
});

//..........................................................category 3
app.post("/data3",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("category3").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in category 3 db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//delete category3
//..........................................................
app.post("/deleteUser3",function(request,response){
    console.log("displayed in server");
    console.log(request.body);
    Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
        /*Delete the first customers with the address "Mountain 21":*/
        var myquery = request.body;
        dbo.collection("category3").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    //console.log("reaching");
});
//..........................................................category 4
app.post("/data4",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("category4").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in category 4 db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//delete category4
//..........................................................
app.post("/deleteUser4",function(request,response){
    console.log("displayed in server");
    console.log(request.body);
    Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
        /*Delete the first customers with the address "Mountain 21":*/
        var myquery = request.body;
        dbo.collection("category4").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    //console.log("reaching");
});

//..........................................................category 5
app.post("/data5",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("category5").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in category 5 db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    //console.log("reaching");
});

//delete category5
//..........................................................
app.post("/deleteUser5",function(request,response){
    console.log("displayed in server");
    console.log(request.body);
    Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
        /*Delete the first customers with the address "Mountain 21":*/
        var myquery = request.body;
        dbo.collection("category5").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    //console.log("reaching");
});
//..................................................
app.listen(3000,function(){
    console.log("server running  @3000....");
});
