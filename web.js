var express = require('express');

var app = express.createServer(express.logger());

var indexF = "./index.html";
var fs = require('fs');  

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //var buf = new Buffer( fs.readFileSync(indexF) );
  //response.send(buf.toString);
  var buf = new Buffer( fs.readFileSync(indexF, 'utf8' ) );
  var outstr = buf.toString('utf8');
  response.send(outstr);
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
