import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./App.css";
import Title from "./Component/Title.jsx";
import Quizzeo from "./Component/Quizzeo.jsx";
import Pokedex from "./Component/Pokedex.jsx";

const MonComposant = () => {
  return (
    <div className="App">
      <Title />
      <div className="timeline">
        <Quizzeo />
        <Pokedex />
      </div>
    </div>
  );
};

export default MonComposant;
