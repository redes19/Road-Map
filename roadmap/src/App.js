// import React from "react";
import "./App.css";
import Title from "./Component/Title.jsx";
import Quizzeo from "./Component/Quizzeo.jsx";
import Pokedex from "./Component/Pokedex.jsx";
import CarteX from "./Component/CarteX.jsx";
import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MonComposant = () => {
  const slideToRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity : 0,
        x:-300,
      },
      {
        opacity : 1,
        x:-20,
        duration: 1.5,
        scrollTrigger: {
          trigger: elem,
          start:"top center",
          end: "bottom center",
        }
      }
    )
  }

  const slideToLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity : 0,
        x:300,
      },
      {
        opacity : 1,
        x: 50,
        duration: 1.5,
        scrollTrigger: {
          trigger: elem,
          start:"top center",
          end: "bottom center",
        }
      }
    )
  }
  
  useEffect(() => {
    slideToRight(".txt1");
  }, [])
  useEffect(() => {
    slideToLeft(".txt2");
  }, [])
  useEffect(() => {
    slideToRight(".txt3");
  }, [])

  return (
    <div className="App">
      <Title />
      <div className="timeline">
        <Quizzeo />
        <Pokedex />
        <CarteX />
      </div>
    </div>
  );
};

export default MonComposant;
