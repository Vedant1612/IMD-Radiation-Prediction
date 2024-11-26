// PredictionForm.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import PredictionReport from './PredictionReport';  // Import the PredictionReport component

function PredictionForm() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    temperature: '',
    cloudCover: '',
    pollutionIndex: '',
  });

  // State to hold the prediction result
  const [prediction, setPrediction] = useState(null);

  // State to toggle between form and report view
  const [viewReport, setViewReport] = useState(false);

  // Handle change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a dummy prediction based on form data
    const dummyPrediction = {
      radiationLevel: Math.random() * 100, // Random radiation level for demo
      recommendation: 'Moderate caution is advised.', // Dummy recommendation
    };

    // Set the prediction result and toggle view to report
    setPrediction(dummyPrediction);
    setViewReport(true);
  };

  // Handle going back to the form view
  const handleBack = () => {
    setViewReport(false);
    setFormData({
      temperature: '',
      cloudCover: '',
      pollutionIndex: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-indigo-200 to-pink-300">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-24">
        {/* Conditional rendering for form and report */}
        {!viewReport ? (
          <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">Predict Radiation</h2>

            {/* Form for input */}
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-lg font-medium text-gray-800">Temperature (°C)</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  placeholder="Enter temperature"
                  onChange={handleInputChange}
                  className="block w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800">Cloud Cover (%)</label>
                <input
                  type="number"
                  name="cloudCover"
                  value={formData.cloudCover}
                  placeholder="Enter cloud cover"
                  onChange={handleInputChange}
                  className="block w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800">Pollution Index</label>
                <input
                  type="number"
                  name="pollutionIndex"
                  value={formData.pollutionIndex}
                  placeholder="Enter pollution index"
                  onChange={handleInputChange}
                  className="block w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Predict
              </button>
            </form>
          </div>
        ) : (
          // Pass prediction data and handleBack function to PredictionReport
          <PredictionReport
            radiationLevel={prediction.radiationLevel}
            recommendation={prediction.recommendation}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

export default PredictionForm;
