// https://youtu.be/CELj-DCB0go?si=96yka_czyn7n6kwo Simplilearn
// at 37:20

var express = require('express');
var app=express();

app.get('/', function(eq,res){
    res.send('Hello World from Simplilearn');
})
var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Example app listening at http://%s:%s",host,port);
})