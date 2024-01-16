import React, { useState } from 'react';
import TimeRangeSlider from './TimeRangeSlider';
import FloorPlan from './FloorPlan';
import './styles.css'; // Import your CSS file here


const App = () => {
  const [selectedTime, setSelectedTime] = useState('09:00')
  
  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const timeData = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00' ]; // Your discrete time data
  const roomData = {
    '09:00': 'Living Room',
    '10:00': 'Kitchen',
    '11:00': 'Bedroom',
    '12:00': 'Restroom',
    '13:00': 'Living Room',
    '14:00': 'Bedroom',
    '15:00': 'Kitchen',
    '16:00': 'Living Room',
    '17:00': 'Bedroom',
    '18:00': 'Restroom',
    '19:00': 'Kitchen',



  }; // Corresponding room data for each time

  return (
    <div className="app">
      <h1>Activity Monitoring in Each Room</h1>
      <TimeRangeSlider timeData={timeData} onTimeChange={handleTimeChange} />
      <FloorPlan selectedTime={selectedTime} roomData={roomData} />
    </div>
  );
};

export default App;














