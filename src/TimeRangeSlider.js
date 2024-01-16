import React from 'react';

const TimeRangeSlider = ({ timeData, onTimeChange }) => {
  const handleChange = (e) => {
    const selectedTimeIndex = parseInt(e.target.value);
    const selectedTime = timeData[selectedTimeIndex];
    onTimeChange(selectedTime);
  };

  return (
    <div className="time-range-slider">
      <label>Select Time:</label>
      <input 
        type="range" 
        min={0} 
        max={timeData.length - 1} 
        onChange={handleChange} 
        className="slider"
      />
    </div>
  );
};

export default TimeRangeSlider;




// import React from 'react';

// const TimeRangeSlider = ({ timeData, onTimeChange }) => {
//   const handleRangeChange = (e) => {
//     const selectedIndex = parseInt(e.target.value);
//     const selectedTime = timeData[selectedIndex];
//     onTimeChange(selectedTime);
//   };

//   return (
//     <div className="time-range-slider">
//       <input
//         type="range"
//         min="0"
//         max={timeData.length - 1}
//         onChange={handleRangeChange}
//         className="range-slider"
//       />
//     </div>
//   );
// };

// export default TimeRangeSlider;



