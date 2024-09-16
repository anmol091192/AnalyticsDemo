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

app.get('/api/chart', (req, res) => {
    const { chartType, fromDate, toDate } = req.query;
  
    // Convert to Date objects
    const from = new Date(fromDate);
    const to = new Date(toDate);
  
    let responseData;
  
    // Determine if the selected date range is in the first or second half of the year
    const isFirstHalf = from.getMonth() < 6;
  
    switch (chartType) {
      case 'active-opps-by-stage':
        // Example of changing data based on the half of the year
        responseData = {
          labels: ['Lead', 'Qualify', 'Solution', 'Proposal', 'Finalize'],
          datasets: [
            {
              label: 'Enterprise Sellers',
              data: isFirstHalf ? [0.3, 0.5, 0.4, 0.2, 0.1] : [0.2, 0.4, 0.3, 0.5, 0.2],
              backgroundColor: '#36A2EB',
            },
            {
              label: 'Marketing',
              data: isFirstHalf ? [0.2, 0.4, 0.3, 0.2, 0.05] : [0.1, 0.3, 0.4, 0.2, 0.1],
              backgroundColor: '#FF6384',
            },
            {
              label: 'Partners',
              data: isFirstHalf ? [0.1, 0.3, 0.2, 0.1, 0.05] : [0.2, 0.3, 0.1, 0.4, 0.2],
              backgroundColor: '#FFCE56',
            },
          ],
        };
        break;
  
      case 'sales-opportunities':
        responseData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sales',
              data: isFirstHalf
                ? [0.4, 0.6, 0.8, 0.3, 0.9, 0.4, 0.7, 0.8, 0.6, 0.9, 0.5, 0.7]
                : [0.7, 0.5, 0.9, 0.6, 0.8, 0.7, 0.3, 0.9, 0.8, 0.4, 0.6, 0.8],
              borderColor: '#36A2EB',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: true,
            },
            {
              label: 'No. Opportunities',
              data: isFirstHalf
                ? [10, 15, 20, 12, 22, 15, 18, 25, 17, 23, 19, 21]
                : [25, 17, 23, 19, 21, 18, 15, 20, 12, 22, 10, 15],
              borderColor: '#FF6384',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: false,
            },
          ],
        };
        break;

        case 'revenue':
        responseData = {
            labels: ['Product Sales', 'Service Revenue', 'Other Income'],
            datasets: [
            {
                data: [12000, 5000, 3000],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
            ],
        };
        break;
    
        case 'expenses':
        responseData = {
            labels: ['COGS', 'Marketing', 'R&D', 'General & Administrative'],
            datasets: [
            {
                data: [6000, 2000, 1500, 2500],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
            ],
        };
        break;
  
      // Add more case blocks for different chart types if needed
  
      default:
        responseData = { error: 'Invalid chart type' };
    }
  
    res.json(responseData);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});