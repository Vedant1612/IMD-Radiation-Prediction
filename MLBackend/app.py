from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Define a dummy ML model prediction function
def predict_radiation(temp, cloud, pollution):
    # Dummy logic for prediction (replace with your actual model)
    return {
        "radiation_level": np.random.uniform(0, 100),  # Random value for demo
        "recommendation": "Moderate caution is advised."
    }

# Define API route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    temp = data.get('temperature')
    cloud = data.get('cloudCover')
    pollution = data.get('pollutionIndex')

    if temp is None or cloud is None or pollution is None:
        return jsonify({"error": "Invalid input"}), 400

    prediction = predict_radiation(temp, cloud, pollution)
    return jsonify(prediction)

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
