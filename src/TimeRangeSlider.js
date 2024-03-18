import React, { useCallback } from "react";

const TimeRangeSlider = ({ timeData, onTimeChange }) => {
  const handleChange = useCallback(
    (e) => {
      const selectedTimeIndex = parseInt(e.target.value);
      const selectedTime = timeData[selectedTimeIndex];
      onTimeChange(selectedTime);
    },
    [timeData, onTimeChange]
  );

  return (
    <div className="time-range-slider">
      <input
        type="range"
        min={0}
        max={timeData.length - 1}
        onChange={handleChange}
        className="slider"
        alignContent="center"
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
