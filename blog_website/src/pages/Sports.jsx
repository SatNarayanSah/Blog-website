import React, { useEffect, useState } from "react";
import TechnologyBlogCard from "../components/TechnologyBlogCard";




const Sports = () => {
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
      <div className="p-4 container mx-auto">
        <div className="py-5 border-b-4 border-white">
          <img
          className="w-[250px] h-[250px] rounded-2xl "
          src="https://img.freepik.com/free-vector/background-with-person-running_1017-6272.jpg?t=st=1733554725~exp=1733558325~hmac=19bb53c7e0fac8dcd29d64e7d00d6ffe9c0d128b9223368da6962aecaa3da9c1&w=826" alt="image" />
          <div className="text-blue-950 font-bold text-3xl  py-5">Sports</div>
          <div className="tracking-wider opacity-60" >Stay informed about the latest trends and updates <br /> in the business world, from startups to multinational <br /> corporations, with expert analysis and actionable insights.</div>
        </div>
        <div>
        <div className="flex flex-wrap gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-wrap gap-4 py-5"
              >
                <TechnologyBlogCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.desciption}
                  author={blog.author}
                  slug={blog.slug}
                  date={blog.data}
                  image={blog.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sports;
