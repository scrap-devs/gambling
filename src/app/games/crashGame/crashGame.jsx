import React, { useState, useEffect } from 'react';

export default function CrashGame() {
  const [multiplier, setMultiplier] = useState(1);
  const [isCrashed, setIsCrashed] = useState(false);
  const [bet, setBet] = useState(0);
  const [cashOut, setCashOut] = useState(false);

  useEffect(() => {
    let crashPoint = Math.random() * (100 - 2) + 2; // Random crash point between 2x and 100x
    let rate = 0.1; // Growth rate for exponential increase
    let time = 0;

    const interval = setInterval(() => {
      if (!isCrashed && !cashOut) {
        time += 0.1;
        let currentMultiplier = 1 * Math.exp(rate * time); // Exponential increase
        setMultiplier(currentMultiplier);

        if (currentMultiplier >= crashPoint) {
          setIsCrashed(true); // The game crashes
          clearInterval(interval);
        }
      }
    }, 100); // Update every 100 ms

    return () => clearInterval(interval);
  }, [isCrashed, cashOut]);

  const handleCashOut = () => {
    setCashOut(true);
    alert(`You cashed out at ${multiplier.toFixed(2)}x`);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div id="Header Container">
          <h1>Crash Game</h1>
        </div>
        <div id="Game Container" className="flex-row justify-between align-middle">
          <div id="Betting Container">
            <p>Bet: {bet}</p>
          </div>
          <div id="Display Crash Container">
            <p>Current Multiplier: {multiplier.toFixed(2)}x</p>
            <p>Status: {isCrashed ? "Crashed!" : "Live"}</p>
          </div>
        </div>

        <button onClick={handleCashOut} disabled={isCrashed || cashOut}>
          Cash Out
        </button>
      </div>
    </div>
  );
};