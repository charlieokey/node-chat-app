const socket = io();

socket.on('connect', () => {
    console.log('Connected to server!');

    socket.emit('createMessage', {
        from: 'Daniel',
        text: 'I finished the oreos'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server!');
});

socket.on('newMessage', (message) => {
    console.log('newMessage', message);
});