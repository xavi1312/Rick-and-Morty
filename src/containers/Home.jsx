import React from "react";
// Utilities
// Components
import Hero from "../components/Hero";
import CardsGrid from "../components/Cards-grid";
// Assets
import "../assets/styles/App.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <CardsGrid>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </CardsGrid>
    </div>
  );
};

export default Home;
