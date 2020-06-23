const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connection', (socket) => {
	console.log('Connection established');

	socket.on('join', ({ name, room }, callback) => {
		console.log(`${name} has joined the chat room ${room}.`);
	});

	socket.on('disconnect', () => {
		console.log('Chat disconnected');
	});
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
