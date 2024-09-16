import React from 'react';
import { Line } from 'react-chartjs-2';

function SalesOpportunitiesChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [0.4, 0.6, 0.8, 0.3, 0.9, 0.4, 0.7, 0.8, 0.6, 0.9, 0.5, 0.7],
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'No. Opportunities',
        data: [10, 15, 20, 12, 22, 15, 18, 25, 17, 23, 19, 21],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
    ],
  };

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
      <Line data={data} options={options} />
    </div>
  );
}

export default SalesOpportunitiesChart;