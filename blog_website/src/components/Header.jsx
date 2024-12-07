import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For dropdown menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu toggle

  return (
    <>
      <div className="border-b  w-full border-b-white p-4 flex justify-between items-center bg-white shadow-md z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-24"
            src="https://satnarayansah.github.io/images/t-logo.png"
            alt="logo"
          />
          <span className="font-bold text-xl ml-2">Satyam Blog</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex list-none font-semibold text-blue-950 gap-10 relative">
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* Features List Item */}
          <li
            className="hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            // onMouseLeave={() => setIsOpen(false)}
          >
            Features
          </li>
          {/* Dropdown Menu */}
          <div
            className={`flex flex-col gap-3 ${
              isOpen ? "block" : "hidden"
            } absolute top-8 left-20 p-4 rounded-xl bg-white shadow-lg z-10`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link to="technology" className="hover:text-blue-500">
              Technology
            </Link>
            <Link to="travel" className="hover:text-blue-500">
              Travel
            </Link>
            <Link to="sports" className="hover:text-blue-500">
              Sports
            </Link>
            <Link to="business" className="hover:text-blue-500">
              Business
            </Link>
            <Link to="management" className="hover:text-blue-500">
              Management
            </Link>
            <Link to="trends" className="hover:text-blue-500">
              Trends
            </Link>
            <Link to="startups" className="hover:text-blue-500">
              Startups
            </Link>
            <Link to="news" className="hover:text-blue-500">
              News
            </Link>
          </div>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-lg z-40 md:hidden`}
        >
          <ul className="flex flex-col gap-5 p-4 list-none font-semibold text-blue-950">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <li>Home</li>
            </Link>
            <li
              className="hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              Features
            </li>
            {/* Dropdown in Mobile */}
            {isOpen && (
              <div className="flex flex-col gap-3 bg-gray-100 p-4 rounded-xl">
                <Link to="technology" className="hover:text-blue-500">
                  Technology
                </Link>
                <Link to="travel" className="hover:text-blue-500">
                  Travel
                </Link>
                <Link to="sports" className="hover:text-blue-500">
                  Sports
                </Link>
                <Link to="business" className="hover:text-blue-500">
                  Business
                </Link>
                <Link to="management" className="hover:text-blue-500">
                  Management
                </Link>
                <Link to="trends" className="hover:text-blue-500">
                  Trends
                </Link>
                <Link to="startups" className="hover:text-blue-500">
                  Startups
                </Link>
                <Link to="news" className="hover:text-blue-500">
                  News
                </Link>
              </div>
            )}
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <li>About</li>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        {/* Theme Toggle and Search */}
        <div className="hidden md:flex items-center gap-5 text-3xl">
          <div className="border-r-2 pr-4">
            <CiSearch />
          </div>
          <div className="flex gap-5 bg-slate-200 p-2 rounded-3xl">
            <CiLight className="bg-white rounded-full p-2" />
            <IoMoon />
          </div>
          <div className="font-sm font-bold bg-blue-700 text-white p-2 rounded-xl">
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
