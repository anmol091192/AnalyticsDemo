import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortableTable from './SortableTable';

test('renders SortableTable with data', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'value', label: 'Value' },
  ];
  
  const data = [
    { name: 'Product A', value: 100 },
    { name: 'Product B', value: 200 },
  ];
  
  const { getByText, getByRole } = render(<SortableTable columns={columns} data={data} />);
  
  // Check if the table headers are rendered
  expect(getByText('Name')).toBeInTheDocument();
  expect(getByText('Value')).toBeInTheDocument();
  
  // Check if the table data is rendered
  expect(getByText('Product A')).toBeInTheDocument();
  expect(getByText('100')).toBeInTheDocument();
});

test('sorts table data when column header is clicked', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'value', label: 'Value' },
  ];
  
  const data = [
    { name: 'Product A', value: 100 },
    { name: 'Product B', value: 200 },
  ];
  
  const { getByText, getAllByRole } = render(<SortableTable columns={columns} data={data} />);
  
  // Find the table header for "Value"
  const valueHeader = getByText('Value');
  
  // Sort by Value ascending
  fireEvent.click(valueHeader);
  
  const rows = getAllByRole('row');
  expect(rows[1].textContent).toContain('Product A'); // Sorted order should place Product A first
  
  // Sort by Value descending
  fireEvent.click(valueHeader);
  
  const sortedRows = getAllByRole('row');
  expect(sortedRows[1].textContent).toContain('Product B'); // Sorted order should place Product B first
});