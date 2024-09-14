import React from 'react';
import './Analytics.css';
import Toggle from '../../components/Toggle/Toggle';
import DonutChartWithTable from './components/DonutChartWithTable';
import AmazonLineChart from './components/LineChart';
import StackedBarChart from './components/StackedBarChart';

function Analytics() {
  return (
    <div className='analytics-wrapper'>
      <h1>Analytics Page</h1>
      <div className='toggle-section'>
        <Toggle label="Sales data">
          <DonutChartWithTable />
        </Toggle>
        <Toggle label="Financial Performance Metrics - 2023">
          <AmazonLineChart />
        </Toggle>
        <Toggle label="Detailed Financial Statements & Cost Structure Analysis">
          <StackedBarChart />
        </Toggle>
      </div>
    </div>
  );
}

export default Analytics;