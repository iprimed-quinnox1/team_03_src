var express = require("express"),
 router = express.Router(),
 user = require("../models/user.js");
 
router.get("/", function(req, res) {
 user.find({}, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
 res.send(data);
 });
}).get("/:id", function(req, res) {
 var id = req.params.id;
 user.find({ _id: id }, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
 res.send(data[0]);
 });
}).post("/", function(req, res) {
 var obj = req.body;
 var model = new user(obj);
 model.save(function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("created");
 });
}).put("/:id", function(req, res) {
 var id = req.params.id;
 var obj = req.body;
 
 user.findByIdAndUpdate(id, { img: obj.img, category: obj.category, type: obj.type,product_name: obj.product_name, product_id: obj.product_id, product_desc: obj.product_desc ,price: obj.price, brand: obj.brand, colour: obj.colour,size: obj.size,product_spec: obj.product_spec}, 
function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("updated");
 });
}).delete("/:id", function(req, res) {
 var id = req.params.id;
 user.findByIdAndRemove(id, function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("deleted");
 });
});
 
module.exports = router;