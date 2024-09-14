// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors()); // Enable CORS for cross-origin requests

// Dummy data for the search
const data = [
  { id: 1, category: 'Revenue', name: 'Product Sales', value: 12000 },
  { id: 2, category: 'Revenue', name: 'Service Revenue', value: 5000 },
  { id: 3, category: 'Revenue', name: 'Other Income', value: 3000 },
  { id: 4, category: 'Expenses', name: 'COGS', value: 6000 },
  { id: 5, category: 'Expenses', name: 'Marketing', value: 2000 },
  { id: 6, category: 'Expenses', name: 'R&D', value: 1500 },
  { id: 7, category: 'Expenses', name: 'General & Administrative', value: 2500 },
];

// Search API endpoint
app.get('/api/search', (req, res) => {
  const { query, category } = req.query;

  // Filter the data based on the query and category
  let filteredData = data;

  if (category) {
    filteredData = filteredData.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    filteredData = filteredData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  res.json(filteredData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});