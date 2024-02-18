import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Quizzeo() {

  return (
    <div className='projet'>
      <div className='txt1'>
        <h1>Quizzeo</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi consequuntur libero dolor nam hic, ab consectetur ea vitae dolore, sed architecto eveniet aperiam nemo beatae quaerat doloremque optio eaque!</p>
      </div>
      <div>
        <div className='recHorizontal'><h2>Quizzeo</h2></div>
        <div className='recVertical'></div> 
        <div className='circle'></div>
      </div>
    </div>
  );
}
