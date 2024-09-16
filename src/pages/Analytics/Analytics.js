import React from 'react';
import './Analytics.css';
import Toggle from '../../components/Toggle/Toggle';
import DonutChartWithTable from './components/DonutChartWithTable';
import AmazonLineChart from './components/LineChart';
import StackedBarChart from './components/StackedBarChart';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';

function Analytics() {

  const handleDateChange = (fromDate, toDate) => {
    // Handle the date range change for analytics filtering
    console.log('Analytics - From:', fromDate);
    console.log('Analytics - To:', toDate);
  };

  return (
    <div className='analytics-wrapper'>
      <DateRangePicker onDateChange={handleDateChange} />
      <h1>Analytics</h1>
      <div className='toggle-section'>
        <Toggle label="Operating Expenses Breakdown">
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