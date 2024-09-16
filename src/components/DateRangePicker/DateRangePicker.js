import React, { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './DateRangePicker.css';
import { AppContext } from '../../AppContext';

function DateRangePicker() {
  const { fromDate, setFromDate, toDate, setToDate } = useContext(AppContext);
  const [error, setError] = useState(null); // State to handle error message

  // Handle date changes and notify the parent component
  const handleFromDateChange = (date) => {
    if (toDate && date > toDate) {
      setError('From date cannot be later than To date');
    } else {
      setError(null);
      setFromDate(date);
    }
  };

  const handleToDateChange = (date) => {
    if (date < fromDate) {
      setError('To date cannot be earlier than From date');
    } else {
      setError(null);
      setToDate(date);
    }
  };

  return (
    <div className="date-range-picker-container">
      <div className="date-range-picker">
        <div className="date-picker-item">
          <label>From: </label>
          <DatePicker
            onChange={handleFromDateChange}
            value={fromDate}
            format="dd-MM-y"
            className="custom-date-picker"
            calendarIcon={null}
            clearIcon={null} // Remove the clear icon for a cleaner look
          />
        </div>
        <div className="date-picker-item">
          <label>To: </label>
          <DatePicker
            onChange={handleToDateChange}
            value={toDate}
            format="dd-MM-y"
            className="custom-date-picker"
            calendarIcon={null}
            clearIcon={null} // Remove the clear icon for a cleaner look
          />
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default DateRangePicker;