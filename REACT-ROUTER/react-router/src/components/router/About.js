import React from "react";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";

const About = () => {
  return (
    <div className="--center-all">
      <h1>About</h1>
      <p>
        Welcome to the <b>About</b> page
      </p>
      <Routes>
        <Route path="info" element={<Info />} />
      </Routes>
    </div>
  );
};
export default About;
