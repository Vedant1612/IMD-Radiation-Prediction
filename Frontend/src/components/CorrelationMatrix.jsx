import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter, Line, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function CorrelationMatrix() {
  const [chartType, setChartType] = useState("scatter");
  const [selectedDataset, setSelectedDataset] = useState("temperature");

  // Dummy Data
  const dataPoints = [
    { radiation: 12, temperature: 25, humidity: 45, pressure: 1010, fog: 3, windSpeed: 10 },
    { radiation: 19, temperature: 30, humidity: 55, pressure: 1008, fog: 4, windSpeed: 12 },
    { radiation: 8, temperature: 22, humidity: 61, pressure: 1012, fog: 1, windSpeed: 10 },
    { radiation: 15, temperature: 28, humidity: 50, pressure: 1015, fog: 2, windSpeed: 9 },
    { radiation: 22, temperature: 35, humidity: 65, pressure: 1005, fog: 5, windSpeed: 15 },
    { radiation: 18, temperature: 32, humidity: 60, pressure: 1007, fog: 3, windSpeed: 13 },
  ];

  // Y-Axis Labels with Units
  const yAxisLabels = {
    temperature: "Temperature (°C)",
    humidity: "Humidity (%)",
    pressure: "Pressure (hPa)",
    fog: "Fog Intensity (scale)",
    windSpeed: "Wind Speed (km/h)",
  };

  // Chart Data
  const chartData = {
    labels: dataPoints.map((_, i) => `Point ${i + 1}`),
    datasets: [
      {
        label: `Radiation vs ${yAxisLabels[selectedDataset]}`,
        data: dataPoints.map((point) => ({
          x: point.radiation,
          y: point[selectedDataset],
        })),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        datalabels: {
          display: true,
          color: "black",
          font: { weight: "bold", size: 14 },
          formatter: function (value) {
            return value.x; // Display radiation values as labels
          },
        },
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 16, family: "Poppins" },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `(${context.raw.x}, ${context.raw.y})`;
          },
        },
      },
      datalabels: {
        color: "black",
        font: {
          size: 14,
        },
        formatter: function (value) {
          return value.x; // Display radiation values in the tooltip
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Radiation (µSv)",
          font: { size: 18, family: "Poppins", weight: "bold" },
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisLabels[selectedDataset],
          font: { size: 18, family: "Poppins", weight: "bold" },
        },
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 min-h-screen p-6 pt-24">
        {/* Banger Header */}
        <header className="text-center mb-5">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Radiation & Environmental Data Correlation
          </h2>
        </header>

        {/* Main Content */}
        <div className="bg-purple-100 p-8 rounded-xl shadow-xl max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-semibold text-gray-800">Correlation Analysis</h3>
            <div className="flex space-x-4">
              {/* Dataset Dropdown */}
              <div className="relative">
                <select
                  className="bg-indigo-100 text-gray-700 border border-indigo-300 p-4 rounded-xl focus:outline-none transition-all hover:bg-indigo-200"
                  value={selectedDataset}
                  onChange={(e) => setSelectedDataset(e.target.value)}
                >
                  <option value="temperature">Temperature (°C)</option>
                  <option value="humidity">Humidity (%)</option>
                  <option value="pressure">Pressure (hPa)</option>
                  <option value="fog">Fog Intensity</option>
                  <option value="windSpeed">Wind Speed (km/h)</option>
                </select>
              </div>
              {/* Chart Type Dropdown */}
              <div className="relative">
                <select
                  className="bg-indigo-100 text-gray-700 border border-indigo-300 p-4 rounded-xl focus:outline-none transition-all hover:bg-indigo-200"
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                >
                  <option value="scatter">Scatter Plot</option>
                  <option value="line">Line Chart</option>
                  <option value="bar">Bar Chart</option>
                </select>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 text-center text-xl">
            Select a dataset and chart type to visualize the relationship between Radiation and other environmental
            parameters.
          </p>

          {/* Chart Display */}
          <div className="w-full h-96 flex justify-center items-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg shadow-md transition-all">
            {chartType === "scatter" && <Scatter data={chartData} options={options} />}
            {chartType === "line" && <Line data={chartData} options={options} />}
            {chartType === "bar" && <Bar data={chartData} options={options} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorrelationMatrix;
