import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-2">Welcome to BookStore! This is a demo MERN stack project.</p>
        <p className="mb-2">You can browse, sign up, and explore free and paid books.</p>
        <p>Built with React, Node.js, Express, and MongoDB Atlas.</p>
      </div>
      <Footer />
    </>
  );
}

export default About; 