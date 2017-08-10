var express = require('express') //import express application
var app = express() //create express object
var unknown = require('./unknown'); //
var picture = require('./picture');
var savePicture = require('./savePicture');

app.set('port', (process.env.PORT || 5000))
app.use("/public", express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello Vaidehis World!')
  response.header("Access-Control-Allow-Origin")
})
app.get('/unknown', unknown.data);

app.get('/picture', picture.data);

app.post('/savePicture', savePicture.data);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
