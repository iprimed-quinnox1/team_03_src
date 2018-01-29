var express = require('express'),
 router = express.Router();
 
//routes for user api
router.use("/user", require("../controllers/user.api"));


 
//add here other api routes
 
module.exports = router;