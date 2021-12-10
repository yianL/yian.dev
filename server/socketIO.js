const { Server } = require('socket.io');

module.exports = (httpServer, config) => {
  const io = new Server(httpServer, config);

  io.on('connection', socket => {
    console.log('a user connected');

    socket.on('greet', data => {
      console.log(`${data.name} in the house!`);
      socket.emit('greet', `Server says hi ${data.name}`);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  return io;
};
