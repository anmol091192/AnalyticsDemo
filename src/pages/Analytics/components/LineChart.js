import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import SortableTable from '../../../components/SortableTable';

// Register the necessary components with Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function RevenueGrowthChart() {
  // Sample data for each metric over the quarters
  const labels = ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'];
  const revenueData = [12000, 15000, 18000, 22000];
  const operatingIncomeData = [3000, 4000, 4500, 5000];
  const netIncomeData = [2000, 3000, 3500, 4000];

  // Data for the line chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Revenue ($ in Thousands)',
        data: revenueData,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Operating Income ($ in Thousands)',
        data: operatingIncomeData,
        fill: false,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.1,
      },
      {
        label: 'Net Income ($ in Thousands)',
        data: netIncomeData,
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  // Options for the line chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Amount in Thousands ($)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Quarter',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toLocaleString()}k`;
          },
        },
      },
    },
  };

  // Table columns
  const columns = [
    { key: 'quarter', label: 'Quarter' },
    { key: 'revenue', label: 'Revenue ($ in Thousands)' },
    { key: 'operatingIncome', label: 'Operating Income ($ in Thousands)' },
    { key: 'netIncome', label: 'Net Income ($ in Thousands)' },
  ];

  // Table data
  const tableData = labels.map((label, index) => ({
    quarter: label,
    revenue: revenueData[index],
    operatingIncome: operatingIncomeData[index],
    netIncome: netIncomeData[index],
  }));

  return (
    <div>
      <h2>Financial Performance Metrics - 2023</h2>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <Line data={data} options={options} />
      </div>
      <SortableTable columns={columns} data={tableData} />
    </div>
  );
}

export default RevenueGrowthChart;