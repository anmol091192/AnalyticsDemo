import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'; // Create this file for styling

function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/search', {
        params: { query, category },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div className="home-container">
      <h1>Search Data</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Revenue">Revenue</option>
          <option value="Expenses">Expenses</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>: ${item.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Home;