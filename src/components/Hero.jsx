import React from "react";
// Assets
import "../assets/styles/components/Hero.scss";
import heroImg from "../assets/static/hero.png";

const Hero = () => (
  <>
    <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero__content">
        <h1 className="hero__title">Rick and Morty</h1>
        <p className="hero__description">
          Descubre tus personajes favoritos de la famosa seria Riack and Morty.
          <br />
          Aquí encontrarás sus nombres, su primera y última aparición y mucho
          más.
        </p>
      </div>
      <div id="mouse_body">
        <div id="mouse_wheel"></div>
      </div>
    </div>
  </>
);

export default Hero;
