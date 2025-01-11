import Navbar from './Navbar';

function UploadData() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 min-h-screen p-6 pt-24">
        {/* Added pt-20 to create space for the fixed navbar */}
        <h2 className="text-5xl font-extrabold text-purple-300 mb-8 text-center tracking-tight">Upload Data</h2>
        <form className="bg-purple-100 p-8 rounded-xl shadow-lg space-y-6 max-w-3xl mx-auto">
          <div>
            <label className="block text-lg font-medium text-gray-700">Select File</label>
            <input
              type="file"
              className="block w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Description (Optional)</label>
            <textarea
              placeholder="Enter a description for the data (Optional)"
              className="block w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Upload Date</label>
            <input
              type="date"
              className="block w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white text-lg font-semibold py-3 rounded-lg hover:bg-secondary transition transform hover:scale-105"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadData;
