// src/DateRangePicker.js

import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './DateRangePicker.css';


function DateRangePicker({ onDateChange }) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  // Handle date changes and notify the parent component
  const handleFromDateChange = (date) => {
    setFromDate(date);
    onDateChange(date, toDate);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
    onDateChange(fromDate, date);
  };

  return (
    <div className="date-range-picker-container">
      <div className="date-range-picker">
        <div className="date-picker-item">
          <DatePicker
            onChange={handleFromDateChange}
            value={fromDate}
            format="MM-dd-y"
            className="custom-date-picker"
            calendarIcon={null}
          />
        </div>
        <div> - </div>
        <div className="date-picker-item">
          <DatePicker
            onChange={handleToDateChange}
            value={toDate}
            format="MM-dd-y"
            className="custom-date-picker"
            calendarIcon={null}
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangePicker;