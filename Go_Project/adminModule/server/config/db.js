var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/sharath');
 
module.exports = connection;