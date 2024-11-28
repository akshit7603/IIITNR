import React from 'react';

export function CampusLife() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Campus Life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Campus Life at IIIT Naya Raipur</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Student Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Hostels',
                description: 'Separate hostels for boys and girls with Wi-Fi, laundry, and recreational facilities.',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Sports Complex',
                description: 'Indoor and outdoor sports facilities including cricket, football, basketball, and gymnasium.',
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Central Library',
                description: '24/7 library with vast collection of books, journals, and digital resources.',
                image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((facility) => (
              <div key={facility.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Student Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Coding Club',
              'Robotics Club',
              'Cultural Club',
              'Sports Club',
              'Photography Club',
              'Literary Club'
            ].map((club) => (
              <div key={club} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{club}</h3>
                <p className="text-gray-600">Join our vibrant {club.toLowerCase()} and explore your interests with like-minded peers.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Campus Events</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Technical Fest</h3>
                <p>Annual technical festival featuring coding competitions, hackathons, and technical workshops.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cultural Fest</h3>
                <p>Celebration of art, music, dance, and creativity with performances and competitions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sports Meet</h3>
                <p>Inter-college sports competition showcasing athletic talent and team spirit.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}