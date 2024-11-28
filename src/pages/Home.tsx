import React from 'react';

export function Home() {
  return (
    <div className="space-y-16">
      <div className="relative h-[600px]">
        <img
          src="../assets/images/home.jpg"
          alt="IIIT Naya Raipur Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to IIIT Naya Raipur</h1>
            <p className="text-xl">Nurturing Innovation, Fostering Excellence</p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Love IIIT Naya Raipur?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
            <p>World-class faculty and cutting-edge curriculum designed to create future leaders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Research Focus</h3>
            <p>State-of-the-art research facilities and collaboration opportunities with industry leaders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Campus Life</h3>
            <p>Vibrant community, modern amenities, and endless opportunities for personal growth.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '../assets/images/new1.jpg',
                title: 'Research Achievement',
                description: 'Our students won the national robotics competition'
              },
              {
                image: '../assets/images/new2.jpg',
                title: 'Campus Development',
                description: 'New research lab inauguration ceremony'
              },
              {
                image: '../assets/images/new3.jpg',
                title: 'Academic Excellence',
                description: 'IIIT NR ranks among top technical institutes'
              }
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600">{news.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}