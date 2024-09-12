import React, { useState, useEffect, useRef } from 'react';
import D3LineChart from './D3LineChart';
import D3BarChart from './D3BarChart';
import D3PieChart from './D3PieChart';
import { useTheme } from './ThemeProvider';
import { ArrowUpIcon, ArrowDownIcon, DollarSignIcon, UsersIcon, PercentIcon, TrendingUpIcon } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const FinancialDashboard = () => {
  const { isDarkMode } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const dashboardRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (dashboardRef.current) {
        setDimensions({
          width: dashboardRef.current.clientWidth,
          height: dashboardRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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

  const keyMetrics = [
    {
      title: "Total Revenue",
      value: "$19,600",
      icon: <DollarSignIcon className="h-6 w-6" />,
      status: "up",
      statusValue: "8%",
      description: "Higher than last month",
      historicalData: [
        { date: '2023-01-01', value: 15000 },
        { date: '2023-02-01', value: 16000 },
        { date: '2023-03-01', value: 17500 },
        { date: '2023-04-01', value: 18200 },
        { date: '2023-05-01', value: 19000 },
        { date: '2023-06-01', value: 19600 },
      ],
    },
    {
      title: "Average Order Value",
      value: "$245",
      icon: <TrendingUpIcon className="h-6 w-6" />,
      status: "up",
      statusValue: "5%",
      description: "Increased customer spending",
      historicalData: [
        { date: '2023-01-01', value: 220 },
        { date: '2023-02-01', value: 225 },
        { date: '2023-03-01', value: 230 },
        { date: '2023-04-01', value: 235 },
        { date: '2023-05-01', value: 240 },
        { date: '2023-06-01', value: 245 },
      ],
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: <PercentIcon className="h-6 w-6" />,
      status: "down",
      statusValue: "0.5%",
      description: "Slight decrease, needs attention",
      historicalData: [
        { date: '2023-01-01', value: 3.8 },
        { date: '2023-02-01', value: 3.7 },
        { date: '2023-03-01', value: 3.5 },
        { date: '2023-04-01', value: 3.4 },
        { date: '2023-05-01', value: 3.3 },
        { date: '2023-06-01', value: 3.2 },
      ],
    },
    {
      title: "Customer Acquisition Cost",
      value: "$50",
      icon: <UsersIcon className="h-6 w-6" />,
      status: "down",
      statusValue: "10%",
      description: "Improved efficiency in marketing",
      historicalData: [
        { date: '2023-01-01', value: 60 },
        { date: '2023-02-01', value: 58 },
        { date: '2023-03-01', value: 55 },
        { date: '2023-04-01', value: 53 },
        { date: '2023-05-01', value: 51 },
        { date: '2023-06-01', value: 50 },
      ],
    },
  ];

  return (
    <div ref={dashboardRef} className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} h-full`}>
      <h2 className="text-2xl font-bold mb-6">Advanced D3.js Financial Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100%-4rem)]">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full`}>
          <h3 className="text-xl font-semibold mb-2">Monthly Revenue</h3>
          <D3LineChart
            data={lineChartData}
            width={dimensions.width / 2 - 40}
            height={(dimensions.height - 100) / 2}
            margin={chartMargin}
            isDarkMode={isDarkMode}
          />
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full`}>
          <h3 className="text-xl font-semibold mb-2">Quarterly Sales</h3>
          <D3BarChart
            data={barChartData}
            width={dimensions.width / 2 - 40}
            height={(dimensions.height - 100) / 2}
            margin={chartMargin}
            isDarkMode={isDarkMode}
          />
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full`}>
          <h3 className="text-xl font-semibold mb-2">Product Revenue Distribution</h3>
          <D3PieChart
            data={pieChartData}
            width={dimensions.width / 2 - 40}
            height={(dimensions.height - 100) / 2}
            margin={chartMargin}
            isDarkMode={isDarkMode}
          />
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full overflow-hidden`}>
          <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)]">
            {keyMetrics.map((metric, index) => (
              <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-white'} flex flex-col justify-between`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{metric.title}</span>
                  {metric.icon}
                </div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold mr-2">{metric.value}</p>
                  <div className={`flex items-center ${metric.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.status === 'up' ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
                    <span className="text-sm ml-1">{metric.statusValue}</span>
                  </div>
                </div>
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">{metric.description}</p>
                <div className="mt-2 h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metric.historicalData}>
                      <Line type="monotone" dataKey="value" stroke={metric.status === 'up' ? '#10B981' : '#EF4444'} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;