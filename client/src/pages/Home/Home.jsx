import React from "react";
import heroimg from "../../assets/homepage.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import TypingAnimator from "react-typing-animator";
import { MdAgriculture } from "react-icons/md";
import { GoHistory } from "react-icons/go";

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
    <>
      <section className="homehero">
        <div className="Mainhero"></div>
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
      </section>

      <h1>Passionate about craftsmanship?</h1>
      <section className="AboutUs">
        <p>What we do</p>
        <h2>We provide Services</h2>
        <div className="AboutUsSection">
          <p>
                  Custom-made creations <br />
          <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740139250/jhwjvsssn4kzmb7pxv5f.png"/>
        
          </p>
          <p>
            Handmade with love and precision <br />
         <img src="https://res.cloudinary.com/dgn62le6w/image/upload/v1740138712/neol0od62yzwkjydgde2.png"/>
          </p>
          <p>
            Where creativity meets quality <br />
          <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740138821/vlxiaqii2oo6lueheys3.png"/>
          </p>
          <p>
            Unique, handcrafted designs <br />
           <img src="https://res.cloudinary.com/dgn62le6w/image/upload/v1740138888/ke1pxcz4ot5ssnpvgyz3.png"/>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;