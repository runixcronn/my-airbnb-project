import React, { useState } from 'react';
import ApartmentListings from './ApartmentList';
import DataPicker from './DataPicker';
function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-6">Project 10 AirBnB</h1>
    <DataPicker setStartDate={setStartDate} setEndDate={setEndDate} />
    <ApartmentListings startDate={startDate} endDate={endDate} />
  </div>
  );
}

export default App;