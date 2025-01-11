import React from 'react';

const vehicles = [
  {
    name: 'BMW X5',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    type: 'SUV',
  },
  {
    name: 'BMW M4',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80',
    type: 'Coupe',
  },
  {
    name: 'BMW i4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURWO_NTSFsqGBmTvnrnnMK0M5EuNnZmmpFA&s',
    type: 'Electric',
  },
];

export default function FeaturedVehicles() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.type}</p>
                <button className="mt-2 text-blue-600 font-semibold hover:text-blue-800">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}