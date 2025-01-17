import React, { useState, useEffect } from 'react';

export default function CrashGame() {

  const [start, setStart] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [isCrashed, setIsCrashed] = useState(false);
  const [bet, setBet] = useState(0);
  const [cashOut, setCashOut] = useState(false);
  const [currentMoney, setCurrentMoney] = useState(1);

  useEffect(() => {
    let crashPoint = Math.random() * (100 - 2) + 2; // Random crash point between 2x and 100x
    let rate = 0.1; // Growth rate for exponential increase
    let time = 0;

    const interval = setInterval(() => {
      if (!isCrashed && !cashOut) {
        time += 0.1;
        let currentMultiplier = 1 * Math.exp(rate * time); // Exponential increase
        let x = currentMultiplier * bet
        setMultiplier(currentMultiplier);
        setCurrentMoney(x.toFixed(2))

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
    return <>
      <p>You cashed out at {bet * multiplier}</p>
    </>
  };

  const restart = () => {
    setMultiplier(1)
    setIsCrashed(false)
    setBet(0)
  }

  const handleSubmit = async (formData) => {
    let num = formData.get("number")
    setBet(num);
  };

  useEffect(() => {
     setStart(true)
  }, [handleSubmit])

  return (
    <div>
      <div className="flex flex-col">
        <div id="Header Container">
          <h1>Crash Game</h1>
        </div>
        <div className="flex-row">
          <div>
            <form action={handleSubmit} className="flex flex-col">
              <div>
                <label>bet amount</label>
                <input type="number" name="number" default="0"></input>
              </div>
              <button type="submit" >submit</button>
            </form>
            <p>Bet: {bet}</p>
          </div>
          <div id="Display Crash Container">
            <p>Current Multiplier: {multiplier.toFixed(2)}x</p>
            <p>Status: {isCrashed ? "Crashed!" : "Live"}</p>
          </div>
        </div>

        <button onClick={handleCashOut} disabled={isCrashed || cashOut}>
          Cash Out: current money : {currentMoney}
        </button>
        <button onClick={restart}>restart</button>
      </div>
    </div>
  );
};