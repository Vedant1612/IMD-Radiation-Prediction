import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DataVisualization from './components/DataVisualization';
import PredictionForm from './components/PredictionForm';
import UploadData from './components/UploadData';
import CorrelationMatrix from './components/CorrelationMatrix';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<DataVisualization />} />
        <Route path="/predict" element={<PredictionForm />} />
        <Route path="/upload" element={<UploadData/>} />
        <Route path="/correlation" element={<CorrelationMatrix />} />
      </Routes>
    </Router>
  );
}

export default App;
