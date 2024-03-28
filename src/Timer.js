import { useState, useEffect } from "react";
import "./App.css";

function Timer() {
  const [presentTime, setPresentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [presentDate, setPresentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const intervalTimeId = setInterval(() => {
      setPresentTime(new Date().toLocaleTimeString());
    }, 1000);

    const intervalDateId = setInterval(() => {
      let date = new Date().getDate();
      let month = new Date().toLocaleString("en-US", { month: "long" });
      let year = new Date().getFullYear();
      setPresentDate(`${date} ${month} ${year}`);
    }, 1000);

    return () => {
      clearInterval(intervalTimeId);
      clearInterval(intervalDateId);
    };
  }, []);

  return (
    <>
      <div className="card" id="card">
        <div className="card-body">
          <p id="presenttime">{presentTime}</p>
          <div id="today">Today : </div>
          <div id="presentdate">{presentDate}</div>
        </div>
      </div>
    </>
  );
}

export default Timer;
