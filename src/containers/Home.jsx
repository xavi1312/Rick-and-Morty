import React from "react";
// Utilities
// Components
import Hero from "../components/Hero";
import CardsGrid from "../components/Cards-grid";
import Card from "../components/Card";
// Assets
import "../assets/styles/App.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <CardsGrid>
        <Card />
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
