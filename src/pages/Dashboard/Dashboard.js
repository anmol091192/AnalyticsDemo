import React from 'react';
import SummaryCards from './components/SummaryCards';
import SalesOpportunitiesChart from './components/SalesOpportunitiesChart';
import ActiveOppsByStageChart from './components/ActiveOppsByStageChart';
import TotalSalesByOpportunitySizeChart from './components/TotalSalesByOpportunitySizeChart';
import './Dashboard.css'; // Create this file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Sales Dashboard</h1>
      <SummaryCards />
      <div className="charts-container">
        <SalesOpportunitiesChart />
        <ActiveOppsByStageChart />
        <TotalSalesByOpportunitySizeChart />
      </div>
    </div>
  );
}

export default Dashboard;