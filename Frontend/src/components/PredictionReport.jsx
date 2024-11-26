// PredictionReport.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Warning icon

// Function to determine the heat warning based on radiation level
const getHeatWarning = (radiationLevel) => {
  if (radiationLevel < 20) {
    return { level: 'Low', color: 'green', message: 'No immediate danger. Safe levels of radiation.' };
  } else if (radiationLevel < 60) {
    return { level: 'Moderate', color: 'yellow', message: 'Caution advised. Limit exposure.' };
  } else if (radiationLevel < 80) {
    return { level: 'High', color: 'orange', message: 'Significant radiation. Avoid long exposure.' };
  } else {
    return { level: 'Very High', color: 'red', message: 'Dangerous levels of radiation. Immediate action required!' };
  }
};

function PredictionReport({ radiationLevel, recommendation, onBack }) {
  const heatWarning = getHeatWarning(radiationLevel);

  return (
    <div className="mt-8 p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-2xl shadow-2xl space-y-6 max-w-3xl w-full mx-auto">

      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-center p-6 rounded-t-2xl">
        <h2 className="text-4xl font-semibold">Radiation Prediction Report</h2>
        <p className="text-lg mt-2">Assessing radiation levels based on real-time data to ensure safety and health</p>
      </div>

      {/* Radiation Level Visualization */}
      <div className="space-y-6">
        <p className="text-lg text-gray-800">
          Radiation Level: <span className="font-bold">{radiationLevel.toFixed(2)}%</span>
        </p>
        
        {/* Progress Bar */}
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className={`text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-${heatWarning.color}-600 bg-${heatWarning.color}-200`}>
              {heatWarning.level}
            </span>
            <span className="text-sm font-semibold inline-block py-1 px-2 uppercase text-gray-600">
              {radiationLevel.toFixed(2)}%
            </span>
          </div>
          <div className="flex mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full`}
                style={{
                  width: `${radiationLevel}%`,
                  backgroundColor: heatWarning.color === 'green' ? '#48bb78' :
                                   heatWarning.color === 'yellow' ? '#fbbf24' :
                                   heatWarning.color === 'orange' ? '#f97316' : '#ef4444',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Heat Warning Section */}
      <div className={`flex items-center space-x-2 text-${heatWarning.color}-600`}>
        <FaExclamationTriangle size={28} />
        <div>
          <p className="text-lg font-semibold">Heat Warning: {heatWarning.level}</p>
          <p className="text-gray-700">{heatWarning.message}</p>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-800">
          Recommendation: <span className="font-semibold text-indigo-600">{recommendation}</span>
        </p>
      </div>

      {/* Back to Form Button */}
      <button
        onClick={onBack}
        className="w-full bg-indigo-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
      >
        Back to Form
      </button>
    </div>
  );
}

export default PredictionReport;
