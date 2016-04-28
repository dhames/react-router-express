'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

var server = http.listen(3000, function() {
  console.log('Listening @ port: ' + 3000);
});
app.use(express.static('files'));
app.use('/static', express.static(__dirname + '/public'));


app.get('/home/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', function(req, res) {
  res.redirect('/home/');
});
