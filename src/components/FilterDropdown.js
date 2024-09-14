import React from 'react';

function FilterDropdown({ options, onChange }) {
  return (
    <div>
      <label htmlFor="filter">Filter by Store: </label>
      <select id="filter" onChange={(e) => onChange(e.target.value)}>
        <option value="">All Stores</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterDropdown;