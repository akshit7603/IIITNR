import React from 'react';

export function Academics() {
  const programs = [
    {
      title: 'B.Tech in Computer Science',
      description: 'Four-year undergraduate program focusing on core computer science and engineering principles.',
      duration: '4 years',
      seats: 120,
    },
    {
      title: 'M.Tech in Data Science',
      description: 'Advanced program covering machine learning, big data analytics, and artificial intelligence.',
      duration: '2 years',
      seats: 60,
    },
    {
      title: 'Ph.D. Program',
      description: 'Research-oriented doctoral program in various computer science domains.',
      duration: '3-5 years',
      seats: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl">Discover our comprehensive range of academic programs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="border-t pt-4">
                <p><strong>Duration:</strong> {program.duration}</p>
                <p><strong>Available Seats:</strong> {program.seats}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Academic Calendar</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Odd Semester</h3>
                <ul className="space-y-2">
                  <li>Classes Begin: July 15</li>
                  <li>Mid-term Exams: September 1-7</li>
                  <li>End-term Exams: November 20-30</li>
                  <li>Winter Break: December 1-31</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Even Semester</h3>
                <ul className="space-y-2">
                  <li>Classes Begin: January 2</li>
                  <li>Mid-term Exams: February 15-21</li>
                  <li>End-term Exams: May 1-15</li>
                  <li>Summer Break: May 16 - July 14</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}