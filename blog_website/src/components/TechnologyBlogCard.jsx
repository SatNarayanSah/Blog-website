import React from "react";
import { Link } from "react-router-dom";

const TechnologyBlogCard = ({
  id,
  title,
  description,
  author,
  slug,
  date,
  image,
}) => {
  return (
    <div className=" gap-4 border-b-2 border-black border-opacity-20 pb-8">
      <div className="flex relative">
        <img
          className="w-[350px] h-[250px] rounded-3xl"
          src={image}
          alt="image"
        />
        <p className="absolute top-3 left-3 bg-white text-blue-950 font-bold p-3 rounded-xl">
          Category
        </p>
      </div>
      <div className="w-full px-2 max-w-[350px] relative">
        <div className="flex gap-2">
          <div className="text-blue-800 font-bold">{author}</div>
          on
          <div>{new Date(date).toDateString()}</div>
        </div>
        <div className="text-3xl font-bold text-blue-900 opacity-60 mt-4">
          {title}
        </div>
        <div className="text-xl text-wrap text-blue-700 opacity-55 w-full line-clamp-3 mt-3">
          {description}
        </div>
        <Link to={`/blog/${id || " default-id"}`}>
          <button className="bg-gradient-to-b from-blue-400 to-blue-950 text-white p-2 rounded-xl font-bold mt-4">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TechnologyBlogCard;
