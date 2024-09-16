import React from 'react';
import { Bar } from 'react-chartjs-2';

function ActiveOppsByStageChart() {
  const data = {
    labels: ['Lead', 'Qualify', 'Solution', 'Proposal', 'Finalize'],
    datasets: [
      {
        label: 'Enterprise Sellers',
        data: [0.3, 0.5, 0.4, 0.2, 0.1],
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Marketing',
        data: [0.2, 0.4, 0.3, 0.2, 0.05],
        backgroundColor: '#FF6384',
      },
      {
        label: 'Partners',
        data: [0.1, 0.3, 0.2, 0.1, 0.05],
        backgroundColor: '#FFCE56',
      },
    ],
  };

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
      <Bar data={data} options={options} />
    </div>
  );
}

export default ActiveOppsByStageChart;