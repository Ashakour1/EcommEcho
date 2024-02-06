import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Products from "../components/Products";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="navbar-container">
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default Home;
