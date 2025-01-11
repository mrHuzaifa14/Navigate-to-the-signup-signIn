import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <img 
        src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80" 
        alt="BMW Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">THE NEW BMW i7</h1>
            <p className="text-xl md:text-2xl mb-8">Pure Electric Luxury</p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-sm hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-sm hover:bg-gray-100 transition">
                Build Yours
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}