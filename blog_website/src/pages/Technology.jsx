import React, { useEffect, useState } from "react";
import TechnologyBlogCard from "../components/TechnologyBlogCard";




const Technology = () => {
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
        <div>
          <img
          className="w-[250px] h-[250px] rounded-2xl "
          src="https://img.freepik.com/free-vector/polygonal-wireframe-image-human-hand-touch-electronic-display-abstract-vector-illustration_1284-30756.jpg?t=st=1733466847~exp=1733470447~hmac=557bf804dac57ac081b67f5764b88044e8c862c0e1766163875ce98ada903fd8&w=740" alt="image" />
          <div className="text-blue-950 font-bold text-3xl  py-5">Technology</div>
          <div className="tracking-wider opacity-60" >Stay ahead of the curve with the newest developments <br /> in technology, from cutting-edge gadgets to <br /> breakthroughs in AI, cybersecurity, and beyond.</div>
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

export default Technology;
