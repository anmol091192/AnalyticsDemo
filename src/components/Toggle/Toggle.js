import React, { useState } from 'react';
import './Toggle.css';

function ToggleSwitch({ label, children }) {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch-container">
    <div className="toggle-header">
      {label && <span className="toggle-label">{label}</span>}
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
    </div>
    {isOn && <div className="toggle-content">{children}</div>}
  </div>
  );
}

export default ToggleSwitch;