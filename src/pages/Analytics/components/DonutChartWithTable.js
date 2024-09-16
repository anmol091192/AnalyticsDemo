import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import FilterDropdown from '../../../components/FilterDropdown';
import SortableTable from '../../../components/SortableTable';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChartWithTable() {
  // Sample data for Revenue by Segment and Operating Expenses Breakdown
  const revenueData = [
    { segment: 'Product Sales', value: 12000 },
    { segment: 'Service Revenue', value: 5000 },
    { segment: 'Other Income', value: 3000 },
  ];

  const operatingExpensesData = [
    { category: 'COGS', value: 6000 },
    { category: 'Marketing', value: 2000 },
    { category: 'R&D', value: 1500 },
    { category: 'General & Administrative', value: 2500 },
  ];

  const [currentData, setCurrentData] = useState('revenue');

  const dataToDisplay = currentData === 'revenue' ? revenueData : operatingExpensesData;

  // Prepare data for the Donut chart
  const chartData = {
    labels: dataToDisplay.map((item) => item.segment || item.category),
    datasets: [
      {
        data: dataToDisplay.map((item) => item.value),
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

  // Columns for the table
  const columns = [
    { key: 'segment', label: currentData === 'revenue' ? 'Segment' : 'Expense Category' },
    { key: 'value', label: 'Value ($)' },
  ];

  // Table data
  const tableData = dataToDisplay.map((item) => ({
    segment: item.segment || item.category,
    value: item.value,
  }));

  return (
    <div>
      <h2>{currentData === 'revenue' ? 'Revenue by Segment' : 'Operating Expenses Breakdown'}</h2>
      <label htmlFor="data-filter">Select Data: </label> {/* Ensure correct association */}
      <FilterDropdown
        id="data-filter" // Ensure the ID matches the htmlFor
        options={['Revenue by Segment', 'Operating Expenses Breakdown']}
        onChange={(value) => setCurrentData(value === 'Revenue by Segment' ? 'revenue' : 'expenses')}
      />
      <div style={{ width: '60%', height: '250px', margin: '0 auto' }}>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <SortableTable columns={columns} data={tableData} />
    </div>
  );
}

export default DonutChartWithTable;