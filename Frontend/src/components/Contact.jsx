import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-2">Email: support@bookstore.com</p>
        <p className="mb-2">Phone: +1 234 567 890</p>
        <p>We'd love to hear from you!</p>
      </div>
      <Footer />
    </>
  );
}

export default Contact; 