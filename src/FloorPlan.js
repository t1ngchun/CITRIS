import React from 'react';
import './FloorPlan.css';


  

const FloorPlan = ({ selectedTime, roomData }) => {
  return (
    <div className="floor-plan">
      <svg width="500" height="300">
       {/* Bedroom */}

        <rect x="150" y="30" width="300" height="80" fill={selectedTime === '11:00' || selectedTime === '14:00' || selectedTime === '17:00' ? 'yellow' : 'white'}  stroke="black" stroke-width="1px" />
        <text x="290" y="80" fontSize="16" textAnchor="middle">Bedroom</text>

    

        {/* Restroom*/}
       <rect x="50" y="30" width="100" height="200" fill={selectedTime === '12:00' || selectedTime === '18:00'  ? 'yellow' : 'white'} stroke="black" stroke-width="1px"/>
       <text x="100" y="80" fontSize="16" textAnchor="middle">Restroom</text>

       

       {/* Kitchen */}
       <rect x="50" y="110" width="100" height="180" fill={selectedTime === '10:00'  || selectedTime === '15:00'  || selectedTime === '19:00' ? 'yellow' : 'white'} stroke="black" stroke-width="1px"/>
       <text x="100" y="200" fontSize="16" textAnchor="middle">Kitchen</text>

      
       {/* Living Room*/}
       <rect x="350" y="110" width="100" height="180" fill={selectedTime === '9:00' || selectedTime === '13:00' || selectedTime === '16:00' ? 'yellow' : 'white'} stroke="black" stroke-width="1px"/>
       <text x="400" y="200" fontSize="16" textAnchor="middle">Living Room</text>

        
        
        
        
        </svg>
      <h2>Selected Room: {roomData[selectedTime]}</h2>
      {/* Your floor plan layout with rooms */}
    </div>
  );
};

export default FloorPlan;









