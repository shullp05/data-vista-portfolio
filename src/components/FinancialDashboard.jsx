import React from 'react';
import D3LineChart from './D3LineChart';
import D3BarChart from './D3BarChart';
import D3PieChart from './D3PieChart';
import { useTheme } from './ThemeProvider';

const FinancialDashboard = () => {
  const { isDarkMode } = useTheme();

  const lineChartData = [
    { date: '2023-01-01', value: 1000 },
    { date: '2023-02-01', value: 1500 },
    { date: '2023-03-01', value: 1300 },
    { date: '2023-04-01', value: 1700 },
    { date: '2023-05-01', value: 2000 },
    { date: '2023-06-01', value: 1800 },
  ];

  const barChartData = [
    { category: 'Q1', value: 3800 },
    { category: 'Q2', value: 5500 },
    { category: 'Q3', value: 4200 },
    { category: 'Q4', value: 6100 },
  ];

  const pieChartData = [
    { category: 'Product A', value: 4000 },
    { category: 'Product B', value: 3000 },
    { category: 'Product C', value: 2000 },
    { category: 'Product D', value: 1000 },
  ];

  const chartMargin = { top: 20, right: 30, bottom: 30, left: 40 };

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6">Advanced D3.js Financial Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-2">Monthly Revenue</h3>
          <D3LineChart
            data={lineChartData}
            width={500}
            height={300}
            margin={chartMargin}
            isDarkMode={isDarkMode}
          />
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-2">Quarterly Sales</h3>
          <D3BarChart
            data={barChartData}
            width={500}
            height={300}
            margin={chartMargin}
            isDarkMode={isDarkMode}
          />
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-2">Product Revenue Distribution</h3>
          <D3PieChart
            data={pieChartData}
            width={500}
            height={300}
            margin={chartMargin}
            isDarkMode={isDarkMode}
          />
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-2">Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <p className="text-sm font-medium">Total Revenue</p>
              <p className="text-2xl font-bold">$19,600</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <p className="text-sm font-medium">Average Order Value</p>
              <p className="text-2xl font-bold">$245</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <p className="text-sm font-medium">Conversion Rate</p>
              <p className="text-2xl font-bold">3.2%</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <p className="text-sm font-medium">Customer Acquisition Cost</p>
              <p className="text-2xl font-bold">$50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;