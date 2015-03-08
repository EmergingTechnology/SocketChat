var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.listen(3000, function() {
    console.log('Server is Running at http://localhost:3000/');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.socket.on('connection', function(socket){
	socket.on('send message', function(data){
		io.socket.emit('new message', data);
	});
});