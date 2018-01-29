var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var userSchema = new Schema({
 _id: { type: objectId, auto: true },
 img: { type: String, required: true },
 category: { type: String, required: true },
 type: { type: String, required: true },
 product_name: { type: String, required: true },
 product_id: { type: String, required: true },
 product_desc: { type: String, required: true },
 price: { type: String, required: true },
 brand: { type: String, required: true },
 colour: { type: String, required: true },
 size: { type: String, required: true },
 product_spec: { type: String, required: true }
 
 
 
 
},
 {
 versionKey: false
});
 
var user = mongoose.model('products', userSchema);
 
module.exports = user;