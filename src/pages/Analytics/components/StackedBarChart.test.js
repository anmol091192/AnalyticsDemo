import React from 'react';
import { render } from '@testing-library/react';
import StackedBarChart from './StackedBarChart';

test('renders StackedBarChart component', () => {
  const { getByText } = render(<StackedBarChart />);
  
  // Check if the heading is rendered
  expect(getByText('Detailed Financial Statements & Cost Structure Analysis')).toBeInTheDocument();
  
  // Check if the chart is rendered (this checks for canvas element which Chart.js uses)
  expect(document.querySelector('canvas')).toBeInTheDocument();
});