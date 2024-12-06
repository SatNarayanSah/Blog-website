import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-t container mx-auto flex fle-wrap justify-between px-5 mt-10 py-5">
        <div className="px-4">
          <div className="flex items-center ">
            <img
              className="w-24"
              src="https://satnarayansah.github.io/images/t-logo.png"
              alt="logo"
            />
            Satyam Blog
          </div>
          <div className="ml-6">
          Welcome to ultimate source for fresh perspectives! Explore <br /> curated content to enlighten, entertain and engage <br /> global readers.
          </div>
          <div className="flex gap-5 text-3xl text-blue-950 opacity-70 mt-5 ml-5">
            <Link to="/"> <FaFacebook/> </Link>
            <Link to="/"> <FaInstagram /> </Link>
            <Link to="/"> <FaYoutube /> </Link>
            <Link to="/"><FaTwitter /></Link>
          </div>
        </div>
        <div className="flex  gap-20">
          <div className=" flex flex-col gap-5">
            <h1 className="font-bold tracking-widest opacity-70">Pages</h1>
            <Link to="/">Home</Link>
            <Link to="/">Features</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="font-bold tracking-widest opacity-70">Pages</h1>
            <Link to="/">Home</Link>
            <Link to="/">Features</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="font-bold tracking-widest opacity-70">Pages</h1>
            <Link to="/">Home</Link>
            <Link to="/">Features</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </div>
        <div className="text-center text-4xl tracking-widest font-bold opacity-25 border-t-4">
        ©️ all copyright reserved by Sat narayan sah
        </div>
    </>
  );
};

export default Footer;
