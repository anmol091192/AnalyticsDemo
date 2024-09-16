import React from 'react';

function SummaryCards() {
  return (
    <div className="summary-cards-container">
      <div className="summary-card">
        <div className="summary-card-icon">💰</div>
        <div className="summary-card-info">
          <p>Sales</p>
          <h3>$7.1M</h3>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-card-icon">📈</div>
        <div className="summary-card-info">
          <p>Opportunities</p>
          <h3>200</h3>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-card-icon">📊</div>
        <div className="summary-card-info">
          <p>Av. Opp Size</p>
          <h3>$35.3K</h3>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-card-icon">📅</div>
        <div className="summary-card-info">
          <p>Av. Velocity</p>
          <h3>63.75</h3>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;