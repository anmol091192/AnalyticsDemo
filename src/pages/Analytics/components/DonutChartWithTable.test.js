import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DonutChartWithTable from './DonutChartWithTable';

test('renders DonutChartWithTable component with initial revenue data', () => {
  render(<DonutChartWithTable />);
  
  // Check if the heading is rendered using role
  expect(screen.getByRole('heading', { name: /Revenue by Segment/i })).toBeInTheDocument();
  
  // Check if the dropdown is present and has the correct default value
  expect(screen.getByLabelText(/Select Data:/i)).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toHaveValue('Revenue by Segment');

  // Check if the initial data is present in the table
  expect(screen.getByText('Product Sales')).toBeInTheDocument();
  expect(screen.getByText('12000')).toBeInTheDocument();
});