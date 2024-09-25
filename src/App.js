import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics/Analytics';
import Portfolio from './pages/Portfolio/Portfolio';
import Dashboard from './pages/Dashboard/Dashboard';
import { AppProvider } from './AppContext';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;