import React from 'react';

function FilterDropdown({ id, options, onChange }) {
  return (
    <select id={id} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default FilterDropdown;