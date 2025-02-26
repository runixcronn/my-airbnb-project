import React from 'react';
import apartments from '../app/apartments.json';

function ApartmentListings({ startDate, endDate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {apartments.map(apartment => (
        <div key={apartment.id} className="border rounded-lg overflow-hidden shadow-md">
          <img src={apartment.image} alt={apartment.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{apartment.title}</h2>
            <p className="text-gray-600">{apartment.description}</p>
            <p className="text-lg font-bold mt-2">${apartment.price} / Night</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApartmentListings;