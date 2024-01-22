import React, { useState } from "react";
import TimeRangeSlider from "./TimeRangeSlider";
import FloorPlan from "./FloorPlan";
import "./styles.css"; // Import your CSS file here
import RTData from "./data/room-transition.json";

const App = () => {
  const [selectedTime, setSelectedTime] = useState("21:50");
  const roomData = RTData.map((item) => {
    const time = `${item.hour.toString().padStart(2, "0")}:${item.min
      .toString()
      .padStart(2, "0")}`;
    return { To: item.To, time };
  }).reduce((result, item) => {
    result[item.time] = item.To;
    return result;
  }, {}); // reformat the data into sth like {"14:55": "Living room"}
  console.log("xxx", roomData);

  const timeData = RTData.map((item) => {
    const formattedTime = `${item.hour.toString().padStart(2, "0")}:${item.min
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  });

  console.log("xxx", timeData);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  return (
    <div className="app">
      <div>
        <h1>Activity Monitoring in Each Room</h1>
        <TimeRangeSlider timeData={timeData} onTimeChange={handleTimeChange} />
        <div style={{ left: 0, position: "relative" }}>
          Selected Time: {selectedTime}
        </div>
        <div>Selected Room: {roomData[selectedTime]}</div>
        <FloorPlan selectedTime={selectedTime} roomData={roomData} />
      </div>
    </div>
  );
};

export default App;
