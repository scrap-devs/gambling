import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3000'); // Replace with your WebSocket server URL

    // Listen for updates from the server
    socket.on('leaderboardUpdate', (data) => {
      setPlayers(data);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Original Amount</th>
              <th className="border border-gray-300 px-4 py-2">Multiplier</th>
              <th className="border border-gray-300 px-4 py-2">Percentage Up</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{player.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">${player.originalAmount.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{player.multiplier}x</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{player.percentageUp}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
