
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(__dirname + "/app"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/app/index.html");

});

//listen for request
app.listen(process.env.port || 5000, function() {
  console.log("TestDashboard Service started");
});
