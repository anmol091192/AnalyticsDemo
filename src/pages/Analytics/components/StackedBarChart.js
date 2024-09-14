import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import SortableTable from '../../../components/SortableTable';

// Register the necessary components with Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function StackedBarChart() {
  // Sample financial data for each quarter
  const labels = ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'];
  const productSales = [8000, 9000, 10000, 12000];
  const serviceRevenue = [2000, 2500, 3000, 3500];
  const otherIncome = [1000, 1500, 2000, 2500];
  const cogs = [4000, 4500, 5000, 5500];
  const operatingExpenses = [3000, 3200, 3500, 3700];
  const taxes = [1000, 1200, 1300, 1500];

  // Data for the stacked bar chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Product Sales ($)',
        data: productSales,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Service Revenue ($)',
        data: serviceRevenue,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
      {
        label: 'Other Income ($)',
        data: otherIncome,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'COGS ($)',
        data: cogs,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Operating Expenses ($)',
        data: operatingExpenses,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Taxes ($)',
        data: taxes,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  // Options for the stacked bar chart
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Quarter',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount ($)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  // Table columns
  const columns = [
    { key: 'quarter', label: 'Quarter' },
    { key: 'productSales', label: 'Product Sales ($)' },
    { key: 'serviceRevenue', label: 'Service Revenue ($)' },
    { key: 'otherIncome', label: 'Other Income ($)' },
    { key: 'cogs', label: 'COGS ($)' },
    { key: 'operatingExpenses', label: 'Operating Expenses ($)' },
    { key: 'taxes', label: 'Taxes ($)' },
  ];

  // Table data
  const tableData = labels.map((label, index) => ({
    quarter: label,
    productSales: productSales[index],
    serviceRevenue: serviceRevenue[index],
    otherIncome: otherIncome[index],
    cogs: cogs[index],
    operatingExpenses: operatingExpenses[index],
    taxes: taxes[index],
  }));

  return (
    <div>
      <h2>Detailed Financial Statements & Cost Structure Analysis</h2>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>
      <SortableTable columns={columns} data={tableData} />
    </div>
  );
}

export default StackedBarChart;