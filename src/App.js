import React, { useState, useEffect } from "react";
import "./App.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="clock-container">
      <div className="clock">
        {formatTime(time.getHours())}:
        {formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())}
      </div>
    </div>
  );
};

export default function App() {
  return <Clock />;
}
