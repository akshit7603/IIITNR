import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Plot No. 7, Sector 24, Naya Raipur, Chhattisgarh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-771-2474040</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@iiitnr.edu.in</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/src/pages/Academics.tsx" className="hover:text-blue-300">Admissions</a></li>
              <li><a href="/src/pages/Contact.tsx" className="hover:text-blue-300">Placements</a></li>
              <li><a href="/src/pages/Contact.tsx" className="hover:text-blue-300">Student Portal</a></li>
              <li><a href="/src/pages/Contact.tsx" className="hover:text-blue-300">Faculty Portal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="mb-4">Follow us on social media to stay updated with the latest news and events.</p>
            <div className="flex space-x-4">
              <a href="https://x.com/iiitnayaraipur" className="hover:text-blue-300">Twitter</a>
              <a href="https://www.linkedin.com/school/iiitnrofficial/posts/?feedView=all" className="hover:text-blue-300">LinkedIn</a>
              <a href="https://x.com/iiitnayaraipur" className="hover:text-blue-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} IIIT Naya Raipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}