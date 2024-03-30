import React, { useState } from 'react';

function Cancel() {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  //test if this actually works
  // in order to get this to work you need to change searchText in the imput of response to the query I think
  const handleSearch = async () => {
    try {
      // Fetch booking data from the SQL database
      const response = await fetch(`/api/bookings?search=${searchText}`);
      if (!response.ok) {
        throw new Error('Failed to fetch booking data');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  }; 

  //for testing
  // const handleSearch = () => {
  //   const dummyData = [
  //     { name: 'Michael Mansions', city: 'Shurima', capacity: 111, price: 400 },
  //     { name: 'Threat Towers', city: 'Ishtar', capacity: 222, price: 9999 },
  //     { name: 'Hum Hotels', city: 'Demacia', capacity: 333, price: 1 }
  //   ];
  //   setResults(dummyData);
  // };

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  const handleClosePopup = () => {
    setSelectedResult(null);
  };

  const handleCancelPopup = () => {
    // cancelling the booking code goes here
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
              {result.name}, in {result.city}, at {result.capacity} capacity, for {result.price}$
            </li>
          ))}
        </ul>
      </div>

      {selectedResult && (
        <div className="popup-overlay">
          <div className="popup-content bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Selected Booking</h2>
            <p>{selectedResult.name}, {selectedResult.city}, {selectedResult.capacity}, {selectedResult.price}</p>
            <button
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onClick={handleClosePopup}
            > Close </button>
            <button
              className="mt-4 ml-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onClick={handleCancelPopup}
            > Cancel Booking</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cancel;
