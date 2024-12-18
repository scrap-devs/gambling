import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    // When WebSocket connection is open
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    // When message is received from the server (leaderboard update)
    socket.onmessage = (event) => {
      const updatedUsers = JSON.parse(event.data);
      setUsers(updatedUsers);
    };

    // Clean up WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="container mx-auto p-4 bg-zinc-700">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-zinc-800 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Original Amount</th>
              <th className="border border-gray-300 px-4 py-2">Multiplier</th>
              <th className="border border-gray-300 px-4 py-2">Percentage Up</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const finalAmount = user.originalAmount * user.multiplier;
              return (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.originalAmount}</td>
                  <td>{user.multiplier}</td>
                  <td>{finalAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
