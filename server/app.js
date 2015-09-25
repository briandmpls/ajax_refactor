/**
 * Created by briandaves on 9/25/15.
 */
var express = require('express');
var colors = require('../models/colors');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(require,response){
    console.log('hit empty route');
    response.sendfile(__dirname + '/public/views/index.html');
});

app.get('/getColors',function(require,response){
    console.log('hit getdata route');
    response.send(colors);
});


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port:',port);
});

module.exports = app;


