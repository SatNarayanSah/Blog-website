import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const buttons = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/689/689314.png",
      label: "Technology",
      mov: "technology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/984/984233.png",
      label: "Travel",
      mov: "travel",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/867/867431.png",
      label: "Sports",
      mov: "sports",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3281/3281306.png",
      label: "Business",
      mov: "business",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/10951/10951881.png",
      label: "Management",
      mov: "management",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1946/1946430.png",
      label: "Trends",
      mov: "trends",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/609/609139.png",
      label: "Startups",
      mov: "startups",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2540/2540832.png",
      label: "News",
      mov: "news",
    },
  ];

  const API_URL = "http://127.0.0.1:8000";

  const fetchBlogData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/users/`);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (error) {
      console.error("Error fetching blog data:", error);
      return [];
    }
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogData();
      setBlogs(data);
      setLoading(false);
    };
    getBlogs();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading blogs...</p>;
  }

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-center border-b pb-12 ">
          <h1 className=" text-6xl font-bold text-blue-950">
            Heartfelt <span className="text-blue-800">Reflections:</span>{" "}
            Stories of Love, Loss, and Growth
          </h1>
          <p className="text-xl mt-4 opacity-50">
            Revision Welcomes to ultimate source for fresh perspectives!
            <br></br> Explore curated content to enlighten, entertain and engage
            global readers.
          </p>
        </div>
        <div>
          <div className="uppercase text-center mt-14 font-bold opacity-50">
            explore trending topics
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-10">
            {buttons.map((button, index) => (
              <Link to={button.mov}>
              <button
                key={index}
                className="bg-white flex items-center font-bold text-blue-950  gap-2 p-3 rounded-xl shadow shadow-blue-600 "
              >
                <img className="w-8" src={button.icon} alt={button.label} />
                {button.label}
              </button>
              </Link>

            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-wrap justify-between ">
          <div>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-wrap gap-4 py-5 border-b-2"
              >
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.desciption}
                  author={blog.author}
                  category={blog.category}
                  date={blog.data}
                  image={blog.image}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <WeatherCard />
            </div>
            <div className="bg-white rounded-3xl  relative shadow-xl p-4 max-w-[450px] h-fit">
              <p className="uppercase font-bold tracking-widest opacity-45 py-5 ">
                about
              </p>
              <div className="flex items-center gap-5 ">
                <div>
                  <img
                    className="w-16 rounded-full "
                    src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                    alt="image"
                  />
                </div>
                <div className="">
                  <h1 className="text-2xl font-semibold text-blue-950 ">
                    Satyam Sah
                  </h1>
                  <p className="uppercase tracking-widest font-bold opacity-50">
                    reflective blogger
                  </p>
                </div>
              </div>
              <div className="py-5 text-justify opacity-55 tracking-wider">
                Satyam Sah is a highly reflective blogger, offering thoughtful
                insights and in-depth perspectives on various topics
              </div>
              <div className="flex items-center gap-5">
                <IoLocationSharp className="text-3xl text-red-500" />
                <p className="text-xl font-bold opacity-50"> janakpur, Nepal</p>
              </div>
              <div className="flex py-5 text-3xl gap-8 text-blue-950 items-center ">
                <Link to="/">
                  <FaFacebook />
                </Link>
                <Link to="/">
                  <FaInstagram />
                </Link>
                <Link to="/">
                  <FaYoutube />
                </Link>
              </div>
            </div>
            <div className=" mt-5 p-4 rounded-2xl h-fit bg-white">
              <p className="uppercase tracking-widest font-bold opacity-50 ">
                creating
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
