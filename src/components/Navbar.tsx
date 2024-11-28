import React from 'react';
import { GraduationCap, Home, BookOpen, Users, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8" />
            <span className="font-bold text-xl">IIIT Naya Raipur</span>
          </div>
          <div className="flex space-x-8">
            {[
              { path: '/', icon: Home, label: 'Home' },
              { path: '/academics', icon: BookOpen, label: 'Academics' },
              { path: '/campus-life', icon: Users, label: 'Campus Life' },
              { path: '/research', icon: GraduationCap, label: 'Research' },
              { path: '/contact', icon: Phone, label: 'Contact' },
            ].map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 hover:text-blue-200 transition-colors ${
                  isActive(path) ? 'text-blue-300' : ''
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}