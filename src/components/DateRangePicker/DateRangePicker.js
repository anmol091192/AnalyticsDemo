import React, { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './DateRangePicker.css';
import { AppContext } from '../../AppContext';

function DateRangePicker({ onDateChange }) {
  const { toDate, setToDate, fromDate, setFromDate } = useContext(AppContext);
  const [error, setError] = useState(null); // State to handle error message

  // Handle date changes and notify the parent component
  const handleFromDateChange = (date) => {
    if (toDate && date > toDate) {
      setError('From date cannot be later than To date');
    } else {
      setError(null);
      setFromDate(date);
      onDateChange(date, toDate);
    }
  };

  const handleToDateChange = (date) => {
    if (date < fromDate) {
      setError('To date cannot be earlier than From date');
    } else {
      setError(null);
      setToDate(date);
      onDateChange(fromDate, date);
    }
  };

  return (
    <div className="date-range-picker-container">
      <div className="date-range-picker">
        <div className="date-picker-item">
          <label>Select Date: </label>
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
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default DateRangePicker;