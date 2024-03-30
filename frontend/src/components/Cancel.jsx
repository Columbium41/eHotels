import React, { useState } from 'react';

function Cancel() {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = () => {
    // fetch the database information from here and store it in a array like the example
    const dummyData = ["Michael", "Threat", "Hum"];
    setResults(dummyData);
  };

  // handles clicking search
  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  // handles clicking close
  const handleClosePopup = () => {
    setSelectedResult(null);
  };

  // BIG function !!! Will handle the removal of the booking from the database
  const handleCancelPopup = () => {
    //does nothing rn
  };

  return (
    <div className="w-1/2 mx-auto my-8 py-12 px-8 bg-slate-100 rounded-lg">
      <div className="search-form">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter your SSN here..."
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button
          onClick={handleSearch}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Check Current Bookings
        </button>
      </div>

      <div className="search-results mt-8">
        <ul className="scrollable-list">
          {results.map((result, index) => (
            <li
              key={index}
              className="mb-2 cursor-pointer"
              onClick={() => handleResultClick(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      </div>

      {selectedResult && (
        <div className="popup-overlay">
          <div className="popup-content bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Selected Booking</h2>
            <p>{selectedResult}</p>
            <button
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onClick={handleClosePopup}
            > Close </button>
            <button
              className="mt-4 ml-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onClick={handleCancelPopup}
            > Cancel </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cancel;