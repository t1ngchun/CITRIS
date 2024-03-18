import React, { useState } from "react";
import FloorPlan from "./FloorPlan";
import "./styles.css"; // Import your CSS file here
import DateSelector from "./DateSelector"; // Adjust the import path as necessary
import Clock from "./Clock";
import BarChart from "./BarChart";

const buttonStyle = {
  margin: "10px",
  padding: "15px 15px", // Padding can be adjusted to increase the button size
  borderRadius: "50%", // This will make the button circular
  border: "1px solid #000",
  width: "80px", // Width of the button
  height: "80px", // Height of the button
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px", // Adjust font size as needed
  cursor: "pointer",
  outline: "none",
};

const activityButtonStyle = {
  margin: "10px",
  border: "1px solid #000",
  width: "175px", // Width of the button
  height: "40px", // Height of the button
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px", // Adjust font size as needed
  cursor: "pointer",
  outline: "none",
  borderRadius: "5px",
};

const data = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  datasets: [
    {
      label: "Number of Events",
      data: [12, 19, 3, 5, 2, 3, 7], // Replace with your actual data
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState("today"); // This state tracks the active component

  const changeActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  // Dummy function to handle button clicks
  const handleButtonClick = (label) => {
    console.log(`Button ${label} clicked!`);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "floorPlan":
        return <FloorPlan showSlider/>;
      case "Past7":
        return <BarChart data={data} />;
      default:
        return (
          <div>
            <h2>Today</h2>
            <Clock />
            <FloorPlan />
            <p>XXX should take 3 pills in the morning</p>
            
          </div>
        );
    }
  };

  return (
    <div className="app">
      <div style={{ marginRight: "50px", width: "270px", height: "540px" }}>
        <DateSelector changeActiveComponent={changeActiveComponent} />
        {/* Activity Levels Section */}
        <div style={{ marginTop: "80px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <button
              style={buttonStyle}
              onClick={() => handleButtonClick("Hygiene")}
            >
              Hygiene
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleButtonClick("Shower")}
            >
              Shower
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <button
              style={buttonStyle}
              onClick={() => handleButtonClick("Brush teeth")}
            >
              Brush teeth
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleButtonClick("Medication")}
            >
              Medication
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={activityButtonStyle}
              onClick={() => changeActiveComponent("floorPlan")}
            >
              Activity Level
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: "520px" }}>
        {/* Render the active component */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
