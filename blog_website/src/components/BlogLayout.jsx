import React, { useState, useEffect } from "react";

import Card from "../components/card";
import BlogCard from "./BlogCard";

const BlogLayout = () => {
 
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div className="border-b border-black">

            <BlogCard
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
  );
};

export default BlogLayout;
