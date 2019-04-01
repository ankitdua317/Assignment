var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT || 5000);
console.log('Server running at port 5000');


app.get('/' , function(req,res){
  res.sendFile(__dirname + '/index.html');
});