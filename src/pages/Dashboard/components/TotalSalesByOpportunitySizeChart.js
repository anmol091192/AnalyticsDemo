import React from 'react';
import { Bar } from 'react-chartjs-2';

function TotalSalesByOpportunitySizeChart() {
  const data = {
    labels: ['20K or less', '20K to 40K', '40K to 60K', 'More than 60K'],
    datasets: [
      {
        label: 'Sales',
        data: [0.5, 1.5, 2.5, 1.0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Total Sales by Opportunity Size</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TotalSalesByOpportunitySizeChart;