import React from 'react';

function DatePicker({ setStartDate, setEndDate }) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <input type="date" onChange={(e) => setStartDate(e.target.value)} className="border p-2 rounded" />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} className="border p-2 rounded" />
    </div>
  );
}

export default DatePicker;