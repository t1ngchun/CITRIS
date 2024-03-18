import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./FloorPlan.css";
import TimeRangeSlider from "./TimeRangeSlider";
import RTData from "./data/room-transition.json";

const Rect = styled.rect`
  margin: 10px;
`;

const activitiesData = {
  'Living Room': ['Taking Medication', 'Finish Taking Medication'],
  'Restroom': ['Hand Washing', 'Toileting'],
  'Kitchen': ['Taking Medication', 'Finish Taking Medication'],
  'Bedroom': ['Taking Medication', 'Finish Taking Medication']
};

const FloorPlan = ({ showSlider = false }) => {
  const [selectedTime, setSelectedTime] = useState("21:50");
  const [selectedActivity, setSelectedActivity] = useState("");

  const timeData = RTData.map((item) => {
    const formattedTime = `${item.hour.toString().padStart(2, "0")}:${item.min
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  });

  const roomData = RTData.map((item) => {
    const time = `${item.hour.toString().padStart(2, "0")}:${item.min
      .toString()
      .padStart(2, "0")}`;
    const activities = activitiesData[item.To] || []; // Get activities for the room, if any
    return { To: item.To, time, activities };
  }).reduce((result, item) => {
    result[item.time] = { room: item.To, activities: item.activities };
    return result;
  }, {});

  useEffect(() => {
    const currentActivities = roomData[selectedTime] ? roomData[selectedTime].activities : [];
    if (currentActivities.length > 0) {
      // Select a random activity from the current room's activities
      const activity = currentActivities[Math.floor(Math.random() * currentActivities.length)];
      setSelectedActivity(activity);
    } else {
      setSelectedActivity("");
    }
  }, [selectedTime, roomData]);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const selectedRoom = roomData[selectedTime] ? roomData[selectedTime].room : '';

  console.log('xxx', roomData[selectedTime])

  return (
    <div>
      {showSlider && (
        <>
          <h1>Activity Monitoring in Each Room</h1>
          <TimeRangeSlider
            timeData={timeData}
            onTimeChange={handleTimeChange}
          />
          <div style={{ left: 0, position: "relative" }}>
            Selected Time: {selectedTime}
          </div>
          <div>Selected Room: {selectedRoom}</div>
        </>
      )}
      <div className="floor-plan">
        <svg width="500" height="300">
          {/* Bedroom */}
          <Rect
            x="150"
            y="30"
            width="300"
            height="80"
            fill={roomData[selectedTime].room === "Bedroom" ? "#F4CC65" : "#A2B6DE"}
          />
          <text x="290" y="80" fontSize="16" textAnchor="middle">
            Bedroom
          </text>

          {/* Restroom*/}
          <Rect
            x="50"
            y="30"
            width="100"
            height="200"
            fill={roomData[selectedTime].room === "Restroom" ? "#F4CC65" : "#A2B6DE"}
          />
          <text x="100" y="80" fontSize="16" textAnchor="middle">
            Restroom
          </text>

          {/* Kitchen */}
          <Rect
            x="50"
            y="110"
            width="100"
            height="180"
            fill={roomData[selectedTime].room === "Kitchen" ? "#F4CC65" : "#A2B6DE"}
          />
          <text x="100" y="200" fontSize="16" textAnchor="middle">
            Kitchen
          </text>

          {/* Living Room*/}
          <Rect
            x="350"
            y="110"
            width="100"
            height="180"
            fill={
              roomData[selectedTime].room === "Living room" ? "#F4CC65" : "#A2B6DE"
            }
          />
          <text x="400" y="200" fontSize="16" textAnchor="middle">
            Living Room
          </text>
        </svg>
        <h2>{selectedRoom}</h2>
        <h3>{`Current Activities: ${selectedActivity ? selectedActivity : 'None'}`}</h3>
        {/* Your floor plan layout with rooms */}
      </div>
    </div>
  );
};

export default FloorPlan;

