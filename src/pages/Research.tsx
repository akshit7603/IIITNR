import React from 'react';

export function Research() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Research at IIIT Naya Raipur</h1>
          <p className="text-xl">Pushing the boundaries of technology and innovation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Artificial Intelligence',
                description: 'Machine learning, deep learning, computer vision, and natural language processing.',
                projects: 12
              },
              {
                title: 'Cybersecurity',
                description: 'Network security, cryptography, and cyber threat detection systems.',
                projects: 8
              },
              {
                title: 'IoT & Embedded Systems',
                description: 'Smart devices, sensor networks, and real-time systems.',
                projects: 10
              },
              {
                title: 'Big Data Analytics',
                description: 'Data mining, predictive analytics, and large-scale data processing.',
                projects: 15
              },
              {
                title: 'Quantum Computing',
                description: 'Quantum algorithms, quantum cryptography, and quantum information theory.',
                projects: 5
              },
              {
                title: 'Robotics',
                description: 'Autonomous systems, robot learning, and human-robot interaction.',
                projects: 7
              }
            ].map((area) => (
              <div key={area.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <p className="text-sm text-blue-600">Active Projects: {area.projects}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Research Publications</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold mb-2">Research Paper Title {i}</h3>
                  <p className="text-gray-600 mb-2">Authors: Dr. John Doe, Dr. Jane Smith</p>
                  <p className="text-gray-600 mb-2">Published in: International Journal of Computer Science</p>
                  <p className="text-gray-600">Year: 2023</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Research Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Advanced Computing Lab</h3>
              <p className="text-gray-600">State-of-the-art computing infrastructure for high-performance computing and AI research.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">IoT Research Center</h3>
              <p className="text-gray-600">Dedicated facility for Internet of Things research and development.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}