import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format, subDays, subMonths } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa"; // Importing a calendar icon
import "react-datepicker/dist/react-datepicker.css";

const datePickerButtonStyle = {
  background: "none",
  height: "28px",
  border: "1px solid grey",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px",
  fontSize: "16px", // Adjust icon size
  color: "grey", // Icon color
  // Any other styles you want to apply
};

const pastDateButtonStyle = {
  background: "none",
  height: "28px",
  border: "1px solid grey",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px",
  fontSize: "12px", // Adjust icon size
  color: "grey", // Icon color
  // Any other styles you want to apply
};

const iconStyle = {
  color: "#007bff", // This is a blue color, you can change it to any color you like
};

function DateSelector({ changeActiveComponent }) {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateInfo, setDateInfo] = useState(
    `Selected Date: ${format(new Date(), "PPP")}`
  );
  const handleDateChange = (date) => {
    setStartDate(date);
    setDateInfo(`Selected Date: ${format(date, "PPP")}`);
    setShowDatePicker(false); // Hide the DatePicker after a date is selected
    changeActiveComponent('floorPlan')

  };

  const handlePastSevenDays = () => {
    const newDate = subDays(new Date(), 7);
    setStartDate(newDate);
    setDateInfo(`Past 7 Days: ${format(newDate, "PPP")}`);
    changeActiveComponent('Past7')
  };

  const handlePastMonth = () => {
    const newDate = subMonths(new Date(), 1);
    setStartDate(newDate);
    setDateInfo(`Past Month: ${format(newDate, "PPP")}`);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={datePickerButtonStyle}
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          {showDatePicker ? (
            <FaCalendarAlt style={iconStyle} />
          ) : (
            <FaCalendarAlt />
          )}
        </button>
        <button
          style={pastDateButtonStyle}
          onClick={handlePastSevenDays}
          title="Past 7 Days"
        >
          Past 7 Days
        </button>
        <button
          style={pastDateButtonStyle}
          onClick={handlePastMonth}
          title="Past Month"
        >
          Past Month
        </button>
      </div>
      {/* Use a container to manage the layout more effectively */}
      <div style={{ position: "relative" }}>
        {showDatePicker && (
          <div style={{ position: "absolute", zIndex: 1000 }}>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
            />
          </div>
        )}
        {/* This ensures the information text does not move regardless of the DatePicker's visibility */}
        <div>
          <p>{dateInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
