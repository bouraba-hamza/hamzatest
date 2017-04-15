var express = require("express");
var path = require("path");
var static = require("serve-static");
var cookieParser = require("cookie-parser");


var server = express();

server.use(cookieParser());



var index = require(path.join(__dirname,"routes/index.js"));


server.use("/",index);



server.listen(8080,function() {

  console.log("host : http://localhost:8080");

});
