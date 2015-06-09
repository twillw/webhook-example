var express = require('express');
// var bodyParser = require('body-parser');
var spawn = require('child_process').spawn;
// var fs = require('fs');

app = new express();
// app.use(bodyParser.json());
app.listen(8888);

app.post('/githook', function(req, res) {
  var pull = spawn("sh", ["/home/githook/pull.sh", "/home/aquamobile/"]);
  res.status(200);
});
