var express = require('express'),
 router = express.Router(),
 path = require("path");
 
var absPath = path.join(__dirname, "../../app");
 
// route to handle home page
router.get('/', function(req, res, next) {
 res.sendFile(absPath + "/app.html");
});
 
module.exports = router;