import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import FilterDropdown from '../../../components/FilterDropdown';
import SortableTable from '../../../components/SortableTable';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChartWithTable({ data, currentData, onDataChange }) {
  // Prepare data for the Donut chart
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Columns for the table
  const columns = [
    { key: 'segment', label: currentData === 'revenue' ? 'Segment' : 'Expense Category' },
    { key: 'value', label: 'Value ($)' },
  ];

  // Transform data for the table
  const tableData = data
    ? data.labels.map((label, index) => ({
        segment: label,
        value: data.datasets[0].data[index],
      }))
    : [];

  return (
    <div>
      <h2>{currentData === 'revenue' ? 'Revenue by Segment' : 'Operating Expenses Breakdown'}</h2>
      <label htmlFor="data-filter">Select Data: </label>
      <FilterDropdown
        id="data-filter"
        options={['Revenue by Segment', 'Operating Expenses Breakdown']}
        onChange={(value) => onDataChange(value === 'Revenue by Segment' ? 'revenue' : 'expenses')}
      />
      <div style={{ width: '60%', height: '250px', margin: '0 auto' }}>
        {data ? (
          <Doughnut data={data} options={chartOptions} />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
      <SortableTable columns={columns} data={tableData} />
    </div>
  );
}

export default DonutChartWithTable;