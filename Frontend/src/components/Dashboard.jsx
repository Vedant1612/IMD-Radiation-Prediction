import Navbar from './Navbar';

function Dashboard() {
  const stats = [
    { label: "Current Radiation Level", value: "Low", icon: "🌞" },
    { label: "Average Temperature", value: "28°C", icon: "🌡️" },
    { label: "Cloud Cover", value: "15%", icon: "☁️" },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-50 via-purple-200 to-pink-100 min-h-screen p-6 pt-20">
        {/* Added pt-20 to create space for the fixed navbar */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Dashboard</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex flex-col justify-between"
            >
              {/* Icon Section */}
              <div className="text-6xl text-primary mb-4 flex justify-center">{stat.icon}</div>

              {/* Label Section */}
              <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">{stat.label}</h3>

              {/* Value Section */}
              <p className="text-4xl font-bold text-blue-600 text-center mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mt-8 text-center text-gray-700 text-lg leading-relaxed">
          The dashboard provides a quick overview of important environmental metrics such as radiation levels, temperature, and cloud cover. These values are updated in real-time for your convenience.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
