import React from "react";
import { Link } from "react-router-dom";
import { FiUpload, FiSearch } from "react-icons/fi"; // Importing icons from React Icons

const Navbar = () => {
  const handleUpload = () => {
    console.log("Upload clicked!");
    // Add your upload functionality here
  };

  const handleSearch = () => {
    console.log("Search clicked!");
    // Add your search functionality here
  };

  const handleLogout = () => {
    console.log("Logout clicked!");
    // Add your logout functionality here
  };

  return (
    <nav className="flex h-[80px] items-center justify-between px-8 bg-white text-gray-800 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
        <h1 className="text-xl font-bold">Find My Notes</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-lg">
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-500 transition">
          About
        </Link>

        {/* Icons */}
        <button
          onClick={handleUpload}
          className="text-gray-800 hover:text-blue-500 transition"
          title="Upload"
        >
          <Link to="/upload" className="text-gray-800 hover:text-blue-500 transition" title="Upload"> <FiUpload size={24} /> </Link>
          
          
        </button>
        <button
   onClick={handleSearch}
  className="text-gray-800 hover:text-blue-500 transition"
  title="Search"
>
</button>
<Link to="/search" className="text-gray-800 hover:text-blue-500 transition" title="Search">
  <FiSearch size={24} />
</Link>


        {/* Profile and Logout */}
        <Link
          to="/profile"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
