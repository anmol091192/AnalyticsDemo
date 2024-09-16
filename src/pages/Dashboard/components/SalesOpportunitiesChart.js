import React from 'react';
import { Line } from 'react-chartjs-2';

function SalesOpportunitiesChart({ data }) {

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Sales & Opportunities</h2>
      {data && data.labels.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default SalesOpportunitiesChart;