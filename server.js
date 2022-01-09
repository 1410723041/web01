var express = require("express");
var bodyParser = require("body-parser");

var fs = require("fs");
server = express();

server.use(express.static("web"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
var DB = require("nedb-promises");
var Users = DB.create("users.db");


const formidable = require('formidable');

server.get("/users", function(req, res){
   console.log(req.query);
   Users.insert(req.query);
   res.redirect("/");
})

server.post("/users", function(req, res){
   Users.insert(req.query);
   res.redirect("/BackEnd");
    //var form = formidable({maxFileSize:300*1024});
    //form.parse(req, function(err, fields, files){
     //   if(err){
      //      res.status(400).send({error: err.message})
       // }
       // else{
         //  var uploadPath="web/upload";
            //move file to uploaded file path
         //  fs.renameSync(files.file.filepath, uploadPath+"/"+files.file.originalFilename);
            //write fields to db

         //   res.end();
        //}
    //})
})


server.listen(8080, function(){
    console.log("Server is running at port 8080!")
})