import React from "react";
// Assets
import "../assets/styles/components/Cards-grid.scss";

const CardsGrid = ({ children }) => {
  return <main className="cards-grid">{children}</main>;
};

export default CardsGrid;
