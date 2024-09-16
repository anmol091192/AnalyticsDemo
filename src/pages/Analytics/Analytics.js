import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './Analytics.css';
import Toggle from '../../components/Toggle/Toggle';
import DonutChartWithTable from './components/DonutChartWithTable';
import AmazonLineChart from './components/LineChart';
import StackedBarChart from './components/StackedBarChart';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import { AppContext } from '../../AppContext';

function Analytics() {

  const handleDateChange = (fromDate, toDate) => {
    // Handle the date range change for analytics filtering
    console.log('Analytics - From:', fromDate);
    console.log('Analytics - To:', toDate);
  };

  const { fromDate, toDate } = useContext(AppContext);
  const [donutChartData, setDonutChartData] = useState(null); // State for Donut Chart data
  const [currentData, setCurrentData] = useState('revenue'); // Track current data type for Donut Chart

  // Fetch chart data based on type
  const fetchChartData = async (chartType, setData) => {
    try {
      const response = await axios.get('http://localhost:3002/api/chart', {
        params: {
          chartType,
          fromDate: fromDate.toISOString(),
          toDate: toDate.toISOString(),
        },
      });

      const data = response.data;
      if (!data.error) {
        const transformedData = {
          labels: data.labels,
          datasets: data.datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor,
            backgroundColor: dataset.backgroundColor,
            fill: dataset.fill || false, // Optional fill property
          })),
        };

        setData(transformedData);
      } else {
        console.error('Error fetching data:', data.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data for the donut chart when the component mounts or currentData changes
  useEffect(() => {
    fetchChartData(currentData, setDonutChartData);
  }, [currentData, fromDate, toDate]);

  return (
    <div className='analytics-wrapper'>
      <h1 className='analytics-title'>Analytics</h1>
      <div className='toggle-section'>
      <div className='analytics-date-picker'>
        <DateRangePicker onDateChange={handleDateChange} />
      </div>
        <Toggle label="Operating Expenses Breakdown">
          <DonutChartWithTable
            data={donutChartData}
            currentData={currentData}
            onDataChange={setCurrentData}
          />
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