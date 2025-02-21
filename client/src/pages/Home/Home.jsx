import React from "react";
import heroimg from "../../assets/homepage.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import TypingAnimator from "react-typing-animator";
import { MdAgriculture } from "react-icons/md";

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
            {MdAgriculture }
          </p>
          <p>
            Handmade with love and precision <br />
            {MdAgriculture }
          </p>
          <p>
            Where creativity meets quality <br />
            {MdAgriculture }
          </p>
          <p>
            Unique, handcrafted designs <br />
            {MdAgriculture }
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;