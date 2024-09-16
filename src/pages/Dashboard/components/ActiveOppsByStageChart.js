import React from 'react';
import { Bar } from 'react-chartjs-2';

function ActiveOppsByStageChart({ data }) {

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Active Opps by Stage</h2>
      {data && data.labels.length > 0 ? (
        <Bar data={data} options={options} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ActiveOppsByStageChart;