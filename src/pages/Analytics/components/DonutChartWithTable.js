import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import FilterDropdown from '../../../components/FilterDropdown';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChartWithTable() {
  // Sample data for total sales
  const salesData = [
    { store: 'Walmart', sales: 5000 },
    { store: 'Target', sales: 3000 },
    { store: 'Instacart', sales: 2000 },
    { store: 'Amazon', sales: 7000 },
    { store: 'Others', sales: 1000 },
  ];

  const [filteredStore, setFilteredStore] = useState('');

  // Filter data based on selected store
  const filteredData = filteredStore
    ? salesData.filter((item) => item.store === filteredStore)
    : salesData;

  // Prepare data for the Donut chart
  const chartData = {
    labels: filteredData.map((item) => item.store),
    datasets: [
      {
        data: filteredData.map((item) => item.sales),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>Sales Data</h2>
      <FilterDropdown
        options={salesData.map((item) => item.store)}
        onChange={setFilteredStore}
      />
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <table style={{ width: '50%', margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Store</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.store}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonutChartWithTable;