import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./App.css";
import Quizzeo from "./Component/Quizzeo.jsx";
import Title from "./Component/Title.jsx";

const MonComposant = () => {
  return (
    <div className="App">
      <Title />
      <div className="timeline">
        <Quizzeo />
      </div>
    </div>
  );
};

export default MonComposant;
