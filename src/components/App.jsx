import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  const time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setCount(newTime);
    setInterval(getTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
