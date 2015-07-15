var express = require('express');
// var bodyParser = require('body-parser');
var spawn = require('child_process').spawn;
// var fs = require('fs');

app = new express();
// app.use(bodyParser.json());
app.listen(8888);

app.post('/webhook', function(req, res) {
  console.log("Received push request");
  var pull = spawn("sh", ["/home/ubuntu/webhook/pull.sh", "/home/ubuntu/crosspromotool/"], {stdio: 'inherit'});
  res.status(200).send();
});
