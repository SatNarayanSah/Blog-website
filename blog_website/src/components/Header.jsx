import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { Link, Links } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-b border-b-white p-4 flex justify-between container mx-auto items-center">
        <div className="flex items-center ">
          <img
            className="w-24"
            src="https://satnarayansah.github.io/images/t-logo.png"
            alt="logo"
          />
          Satyam Blog
        </div>
        <div className="list-none font-semibold text-blue-950 flex gap-10 relative">
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* Features List Item */}
          <li
            className="hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
            // onMouseLeave={() => setIsOpen(false)}
          >
            Features
          </li>
          {/* Dropdown Menu */}
          <div
            className={`flex flex-col gap-3 ${
              isOpen ? "block" : "hidden"
            } absolute top-8 left-20 p-4 rounded-xl bg-white shadow-lg z-10`}
            onMouseEnter={() => setIsOpen(true)} // Keep open when hovering over dropdown
            onMouseLeave={() => setIsOpen(false)} // Close when not hovering
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
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className="flex items-center gap-5 text-3xl">
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
