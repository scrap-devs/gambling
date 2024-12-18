const WebSocket = require('ws');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model

// Set up MongoDB connection
mongoose.connect('mongodb://localhost:27017/leaderboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// On WebSocket connection, send leaderboard data
wss.on('connection', (ws) => {
  console.log('New client connected');
  
  // Send initial leaderboard data on connection
  User.find().then((users) => {
    ws.send(JSON.stringify(users)); // Send users data to the client
  });

  // Handle messages from the client (if needed)
  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  // Handle disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});