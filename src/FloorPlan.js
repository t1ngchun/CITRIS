import React from "react";
import styled from "styled-components";
import "./FloorPlan.css";

const Rect = styled.rect`
  margin: 10px;
`;

const FloorPlan = ({ selectedTime, roomData }) => {
  return (
    <div className="floor-plan">
      <svg width="500" height="300">
        {/* Bedroom */}

        <Rect
          x="150"
          y="30"
          width="300"
          height="80"
          fill={roomData[selectedTime] === "Bedroom" ? "#F4CC65" : "#A2B6DE"}
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
          fill={roomData[selectedTime] === "Restroom" ? "#F4CC65" : "#A2B6DE"}
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
          fill={roomData[selectedTime] === "Kitchen" ? "#F4CC65" : "#A2B6DE"}
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
            roomData[selectedTime] === "Living room" ? "#F4CC65" : "#A2B6DE"
          }
        />
        <text x="400" y="200" fontSize="16" textAnchor="middle">
          Living Room
        </text>
      </svg>
      <h2>Selected Room: {roomData[selectedTime]}</h2>
      {/* Your floor plan layout with rooms */}
    </div>
  );
};

export default FloorPlan;
