const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow React app
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Example: Send leaderboard updates
  setInterval(() => {
    socket.emit('leaderboardUpdate', [
      { name: "Player 1", originalAmount: 100, multiplier: 2, percentageUp: 50 },
      { name: "Player 2", originalAmount: 200, multiplier: 3, percentageUp: 75 }
    ]);
  }, 5000);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('WebSocket server running on http://localhost:3000');
});