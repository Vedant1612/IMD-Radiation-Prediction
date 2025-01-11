import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import Navbar from './Navbar';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

function DataVisualization() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timePeriod, setTimePeriod] = useState("half-year");
  const [chartType, setChartType] = useState("bar");

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated delay for API response
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            // Dynamic data based on the selected time period
            if (timePeriod === "half-year") {
              resolve([
                { month: 'Jan', radiation: 12 },
                { month: 'Feb', radiation: 19 },
                { month: 'Mar', radiation: 8 },
                { month: 'Apr', radiation: 15 },
                { month: 'May', radiation: 22 },
                { month: 'Jun', radiation: 18 },
              ]);
            } else {
              resolve([
                { month: 'Jan', radiation: 5 },
                { month: 'Feb', radiation: 10 },
                { month: 'Mar', radiation: 13 },
                { month: 'Apr', radiation: 11 },
                { month: 'May', radiation: 16 },
                { month: 'Jun', radiation: 14 },
                { month: 'Jul', radiation: 19 },
                { month: 'Aug', radiation: 22 },
                { month: 'Sep', radiation: 17 },
                { month: 'Oct', radiation: 20 },
                { month: 'Nov', radiation: 25 },
                { month: 'Dec', radiation: 27 },
              ]);
            }
          }, 1000)
        );

        // Transform the response into chart data
        const labels = response.map(entry => entry.month);
        const data = response.map(entry => entry.radiation);
        const maxRadiation = Math.max(...data);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Radiation Levels (µSv)',
              data,
              backgroundColor: chartType === "bar" ? 'rgba(75, 192, 192, 0.4)' : 'transparent',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75, 192, 192, 0.6)',
              hoverBorderColor: 'rgba(75, 192, 192, 1)',
              fill: chartType === "line", // Only fill for line chart
            },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Months',
                },
              },
              y: {
                beginAtZero: true,
                max: maxRadiation + 5,
                title: {
                  display: true,
                  text: 'Radiation (µSv)',
                },
              },
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.raw} µSv`;
                  },
                },
              },
            },
          },
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [timePeriod, chartType]);

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
    setLoading(true);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full"></div>
          <div className="text-xl font-semibold text-gray-800 mt-4">Loading chart data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 min-h-screen p-6 pt-24">
        {/* Banger Header */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-800 mb-8 text-center">
          Radiation Data Visualization
        </h2>
        <div className="bg-purple-100 p-8 rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-3xl font-semibold mb-6 text-gray-700">Radiation Levels Over Time</h3>

          {/* Time Period and Chart Type Selectors */}
          <div className="flex mb-6 space-x-4 justify-center">
            <div className="flex items-center space-x-4">
              <label htmlFor="timePeriod" className="text-lg font-semibold text-gray-800">Select Time Period:</label>
              <select
                id="timePeriod"
                value={timePeriod}
                onChange={handleTimePeriodChange}
                className="p-3 border rounded-md bg-white text-gray-700 shadow-lg focus:outline-none"
              >
                <option value="half-year">First Half of the Year</option>
                <option value="full-year">Full Year</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="chartType" className="text-lg font-semibold text-gray-800">Select Chart Type:</label>
              <select
                id="chartType"
                value={chartType}
                onChange={handleChartTypeChange}
                className="p-3 border rounded-md bg-white text-gray-700 shadow-lg focus:outline-none"
              >
                <option value="bar">Bar Chart</option>
                <option value="line">Line Chart</option>
              </select>
            </div>
          </div>

          <div className="w-full h-96 mb-6">
            {/* Render the selected chart type dynamically */}
            {chartData && chartType === "bar" && <Bar data={chartData} options={chartData.options} />}
            {chartData && chartType === "line" && <Line data={chartData} options={chartData.options} />}
          </div>

        </div>
      </div>
    </div>
  );
}

export default DataVisualization;
