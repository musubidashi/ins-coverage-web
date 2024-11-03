import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="text-white font-bold text-xl mb-8">Test Coverage</div>
      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          <LayoutDashboard className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link
          to="/coverage-cards"
          className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          <FileText className="mr-3 h-5 w-5" />
          Coverage Cards
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;