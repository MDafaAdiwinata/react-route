import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // untuk cek halaman aktif

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-gray-200 bg-blue-900 fixed top-0 left-0 right-0">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-white">React</span>
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-blue-400" // warna saat aktif (biru)
                  : "text-white" // warna default (putih)
              } hover:text-blue-300`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-blue-400" : "text-white"
              } hover:text-blue-300`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
