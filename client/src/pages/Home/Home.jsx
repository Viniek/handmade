import React from "react";
import heroimg from "../../assets/homepage.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import TypingAnimator from "react-typing-animator";

function Home() {
  const textArray = [
    "Handmade Items",
    "Your place to buy",
    "Reach us Today",
    "njerivictory52@gmail.com",
  ];
  const animator = (
    <TypingAnimator
      textArray={textArray}
      cursorColor="blue"
      textColor="red"
      fontSize="3rem"
      loop
      typingSpeed={100}
      delaySpeed={1000}
      backspace
    />
  );

  return (
    <section className="homehero">
      <div className="hero">
        <p>Tranquil professional items</p>
        <h1>
          Online Market Place for <br />
          Handmade Items
        </h1>
        <p>{animator}</p>
      </div>
      <div className="heroimg">
        <img
          src="https://res.cloudinary.com/dgn62le6w/image/upload/v1721507931/oqnojemmikj4qmcd7jpy.png"
          alt="Handmade goods"
        />
      </div>

      <div className="About us">
<h1>Passionate about craftsmanship?</h1>


      </div>
    </section>

    
  );
}

export default Home;
