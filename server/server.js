const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io'); 

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'charlie@example.com',
        text: 'Hey, everyone',
        createAt: Date.now()
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User left');
    });
});

server.listen( port ,() => {
    console.log(`Starting on ${port}`);
});