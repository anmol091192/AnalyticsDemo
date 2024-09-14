import React from 'react';
import { render } from '@testing-library/react';
import RevenueGrowthChart from './LineChart';

test('renders RevenueGrowthChart component', () => {
  const { getByText } = render(<RevenueGrowthChart />);
  
  // Check if the heading is rendered
  expect(getByText('Financial Performance Metrics - 2023')).toBeInTheDocument();
  
  // Check if the chart is rendered (this checks for canvas element which Chart.js uses)
  expect(document.querySelector('canvas')).toBeInTheDocument();
});