import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import SummaryCards from './components/SummaryCards';
import SalesOpportunitiesChart from './components/SalesOpportunitiesChart';
import ActiveOppsByStageChart from './components/ActiveOppsByStageChart';
import TotalSalesByOpportunitySizeChart from './components/TotalSalesByOpportunitySizeChart';
import './Dashboard.css';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import { AppContext } from '../../AppContext';

function Dashboard() {
  const { fromDate, toDate } = useContext(AppContext);
  const [ activeOppsData, setActiveOppsData ] = useState({
    labels: [],
    datasets: []
  });
  const [salesOpportunitiesData, setSalesOpportunitiesData] = useState({
    labels: [],
    datasets: []
  });

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

  // Fetch data for both charts when the component mounts or date range changes
  useEffect(() => {
    fetchChartData('active-opps-by-stage', setActiveOppsData);
    fetchChartData('sales-opportunities', setSalesOpportunitiesData);
  }, [fromDate, toDate]);

  const handleDateChange = (fromDate, toDate) => {
    // Handle the date range change for analytics filtering
    console.log('Analytics - From:', fromDate);
    console.log('Analytics - To:', toDate);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Sales Dashboard</h1>
      <div className='dashboard-date-picker-container'>
        <DateRangePicker onDateChange={handleDateChange}/>
      </div>
      <SummaryCards />
      <div className="charts-container">
        <SalesOpportunitiesChart data={salesOpportunitiesData} />
        <ActiveOppsByStageChart data={activeOppsData} />
        <TotalSalesByOpportunitySizeChart />
      </div>
    </div>
  );
}

export default Dashboard;