import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';
import profile from './assets/profile.jpg';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="ml-4 text-xl font-semibold text-gray-800">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <img
              src={profile}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;