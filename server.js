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

// ..................................................


// console.log(__dirname);
app.use(express.static('./public'));
app.use(express.static('./public/view'));
app.use(express.static('node_modules'));
app.use(express.static('./service/apiService'));


// ------------------------------------------------------------------------------------------------------
// ..........................................................cart
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
			// console.log(docs);
			
		
			response.send(docs);
			
			 
			
        });
    database.close();
    });
    // console.log("reaching");
});

// ..........................................................my cart
app.get("/mycart",function(request,response){
	console.log("reaching mycart");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		data = '';
		// console.log("db connected");
	    var db = database.db("sharath");
	   db.collection('cart').find().toArray(function(err, docs){
            if(err) throw err;
           // console.log("fetched");
			// console.log(docs);
			
		
			response.send(docs);
			
			 
			
        });
    database.close();
    });
    // console.log("reaching");
});

// ..........................................................delete a item in
// cart
app.post("/deleteitem",function(request,response){
    console.log("delete in server");
       Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
         var myquery = request.body;
		console.log('dat cmg is',myquery.pid);
        dbo.collection("cart").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    // console.log("reaching");
});


// ..........................................................displaycat1
app.post("/displaycat1",function(request,response){	
    Mongo.connect(url, function(err,database){
       if(err) {  console.log(err); throw err;  }
		 var x=request.body.name;
		  console.log('object coming is ',x);
	    var db = database.db("sharath");
	   db.collection('category1').find({"ptype":x}).toArray(function(err, docs){
            if(err) throw err;
			response.send(docs);
		 });
    database.close();
    });
    // console.log("reaching");
});
// ..........................................................my cart
app.post("/mycart",function(request,response){	
    Mongo.connect(url, function(err,database){
       if(err) {  console.log(err); throw err;  }
		 var x=request.body;
		 console.log('am inside my cart server');
		 // console.log('object coming is ',x);
	    var db = database.db("sharath");
	   db.collection('cart').find().toArray(function(err, docs){
            if(err) throw err;
			console.log('my cart server',docs);
			response.send(docs);
		 });
    database.close();
    });
    // console.log("reaching");
});


// ..........................................................Display product
// deatails
app.post("/PD",function(request,response){	
console.log('reaching cart server');

    Mongo.connect(url, function(err,database){
       if(err) {  console.log(err); throw err;  }
	   var x=request.body.pid;
		// var x=request.body.name;
		  // console.log('object coming is ',x);
	    var db = database.db("sharath");
	   db.collection('category1').find({"pid":x}).toArray(function(err, docs1){
            if(err) throw err;
			// console.log('reaching cart db display');
			// console.log('reaching cart server',docs1);
			response.send(docs1);
		 });
    database.close();
    });
    // console.log("reaching");
});

// add to cart ..............
app.post("/addtocart",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("cart").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted to cart db");
			console.log("-------------");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    
});
// ..........................................................admin
app.post("/admin",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("admin").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in admin db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    // console.log("reaching");
});
// ..........................................................registration
app.post("/regi",function(request,response){
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
    // console.log("reaching");
});
// ..........................................................login
app.post("/login",function(request,response){
	 // console.log(request.body);
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
		 
	// db.demo.find({$and:[{"name":"chandu","pass":"12345"}]})
	// here we are mathing email not username do not get confused by name its
	// wrong ..but logic is working :)
         res1.find({$and : [{"email":data.userName,"pass":data.pass}]}).toArray(function(err,result){
             if(err) throw err;
			 
// console.log("bye",res2);
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
 // ..........................................................


// ..................................................
app.listen(3000,function(){
    console.log("server running  @3000....");
});
