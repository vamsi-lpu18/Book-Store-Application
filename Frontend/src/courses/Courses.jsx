import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
function Courses() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className=" min-h-screen">
        <Course search={search} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
