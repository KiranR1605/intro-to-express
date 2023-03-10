const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var result = weight / (height * height);

  res.send("Result = " + result);
});

app.listen(3000, function(){
  console.log("server is running in port 3000.");
});
