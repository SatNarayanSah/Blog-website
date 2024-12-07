import React, { useEffect, useState } from "react";
import TechnologyBlogCard from "../components/TechnologyBlogCard";




const Business = () => {
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
          src="https://img.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_74855-26108.jpg?t=st=1733467676~exp=1733471276~hmac=73602fe440cb0c01fd3881f879280c05bbf5a1c22dce2c551f36cefc483a9d27&w=826" alt="image" />
          <div className="text-blue-950 font-bold text-3xl  py-5">Business</div>
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

export default Business;
