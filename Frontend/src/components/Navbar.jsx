import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <NavLink to="/" className="text-white hover:text-gray-300 no-underline">
            Radiation Predictor
          </NavLink>
        </h1>
        <div className="hidden sm:flex space-x-4">  {/* Changed space-x-1 to space-x-4 */}
          <Button
            variant="text"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
            component={NavLink}
            to="/"
          >
            Dashboard
          </Button>
          <Button
            variant="text"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
            component={NavLink}
            to="/data"
          >
            Data Visualization
          </Button>
          <Button
            variant="text"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
            component={NavLink}
            to="/correlation"
          >
            Correlation Matrix
          </Button>
          <Button
            variant="text"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
            component={NavLink}
            to="/predict"
          >
            Prediction
          </Button>
          <Button
            variant="text"
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
            component={NavLink}
            to="/upload"
          >
            Upload Data
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex items-center space-x-4">
          <button className="text-3xl p-2 bg-transparent border-2 border-white rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Optional: Can be made functional later with state) */}
      <div className="sm:hidden flex flex-col items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6 space-y-4 mt-4">
        <NavLink
          to="/"
          className="text-lg font-medium text-white hover:text-gray-300 transition-all duration-300"
          activeClassName="text-gray-300 font-semibold"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/data"
          className="text-lg font-medium text-white hover:text-gray-300 transition-all duration-300"
          activeClassName="text-gray-300 font-semibold"
        >
          Data Visualization
        </NavLink>
        <NavLink
          to="/correlation"
          className="text-lg font-medium text-white hover:text-gray-300 transition-transform transform hover:scale-110"
          activeClassName="text-gray-300 font-semibold"
        >
          Correlation Matrix
        </NavLink>
        <NavLink
          to="/predict"
          className="text-lg font-medium text-white hover:text-gray-300 transition-all duration-300"
          activeClassName="text-gray-300 font-semibold"
        >
          Prediction
        </NavLink>
        <NavLink
          to="/upload"
          className="text-lg font-medium text-white hover:text-gray-300 transition-all duration-300"
          activeClassName="text-gray-300 font-semibold"
        >
          Upload Data
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
