import React from 'react';
import './Analytics.css';
import Toggle from '../../components/Toggle/Toggle';
import DonutChartWithTable from './components/DonutChartWithTable';

function Analytics() {
  return (
    <div className='analytics-wrapper'>
      <h1>Analytics Page</h1>
      <div className='toggle-section'>
        <Toggle label="Sales data">
          <DonutChartWithTable />
        </Toggle>
        <Toggle label="Section 2">
          <p>This is the content for Section 2.</p>
        </Toggle>
        <Toggle label="Section 3">
          <p>This is the content for Section 3.</p>
        </Toggle>
      </div>
    </div>
  );
}

export default Analytics;