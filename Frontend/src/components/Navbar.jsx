import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide cursor-pointer transition-transform transform hover:scale-110">
          Radiation Predictor
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 hidden sm:flex">
          <NavLink
            to="/"
            className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
            activeClassName="text-yellow-400 font-semibold"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/data"
            className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
            activeClassName="text-yellow-400 font-semibold"
          >
            Data Visualization
          </NavLink>
          <NavLink
          to="/correlation"
          className="text-lg font-medium text-white hover:text-accent transition-transform transform hover:scale-110"
          activeClassName="text-accent font-semibold"
        >
          Correlation Matrix
        </NavLink>
          <NavLink
            to="/predict"
            className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
            activeClassName="text-yellow-400 font-semibold"
          >
            Prediction
          </NavLink>
          <NavLink
            to="/upload"
            className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
            activeClassName="text-yellow-400 font-semibold"
          >
            Upload Data
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex items-center space-x-4">
          <button className="text-3xl p-2 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-primary transition-all duration-300">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Optional: Can be made functional later with state) */}
      <div className="sm:hidden flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 p-6 space-y-4 mt-4">
        <NavLink
          to="/"
          className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300"
          activeClassName="text-yellow-400 font-semibold"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/data"
          className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300"
          activeClassName="text-yellow-400 font-semibold"
        >
          Data Visualization
        </NavLink>
        <NavLink
          to="/correlation"
          className="text-lg font-medium text-white hover:text-accent transition-transform transform hover:scale-110"
          activeClassName="text-accent font-semibold"
        >
          Correlation Matrix
        </NavLink>

        <NavLink
          to="/predict"
          className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300"
          activeClassName="text-yellow-400 font-semibold"
        >
          Prediction
        </NavLink>
        <NavLink
          to="/upload"
          className="text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300"
          activeClassName="text-yellow-400 font-semibold"
        >
          Upload Data
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
