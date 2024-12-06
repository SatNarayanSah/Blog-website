import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import BlogDetails from "./components/BlogDetails";
import Technology from "./pages/Technology";
import Business from "./pages/Business"
import Travel from "./pages/Travel";
import Sports from "./pages/Sports";
import Management from "./pages/Management";
import Trends from "./pages/Trends";
import Startups from "./pages/Startups";
import News from "./pages/News";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog:/id" element={<BlogDetails />} />
            <Route path="technology" element={<Technology />}></Route>
            <Route path="travel" element={<Travel />}></Route>
            <Route path="business" element={<Business />}></Route>
            <Route path="sports" element={<Sports />}></Route>
            <Route path="management" element={<Management />}></Route>
            <Route path="trends" element={<Trends />}></Route>
            <Route path="startups" element={<Startups />}></Route>
            <Route path="news" element={<News />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
