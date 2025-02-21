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


{/* About us Section */}
      <h1>Passionate about craftsmanship?</h1>
      <section className="AboutUs">
        <p>What we do</p>
        <h2>We provide Services</h2>

        
        <div className="AboutUsSection">
         
         {/* 1st List */}
          <p className="offerList"> <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740139250/jhwjvsssn4kzmb7pxv5f.png"/><br />  
         <h1>Custom-made creations</h1>      
        uniquely crafted to match your style.<br/>
        Personalized designs.<br/>
        Just like you!
          </p>
          {/* 2nd List */}
          <p className="OfferList">
          <img src="https://res.cloudinary.com/dgn62le6w/image/upload/v1740138712/neol0od62yzwkjydgde2.png"/>
            <h1>Artisanal craftsmanship </h1>
            made with skill, care, and attention to detail.<br/>
            blend traditional techniques with modern creativity.<br/>
            Quality is at the heart of everything we create.<br/>
          </p>
          {/* 3rd List */}
          <p className="offerList">
          <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740138821/vlxiaqii2oo6lueheys3.png"/>
          <h1> High-quality handmade products</h1>
          We use premium materials to ensure durability.<br/>
          Each item is carefully inspected for perfection.<br/>
          Beauty and functionality come together in every piece.
          </p>
          {/* 4th list */}
          <p className="offerList">
          <img src="https://res.cloudinary.com/dgn62le6w/image/upload/v1740138888/ke1pxcz4ot5ssnpvgyz3.png"/>
         <h1> Designed for elegance and durability</h1>
         We use premium materials to ensure durability.<br/>
          Each item is carefully inspected for perfection.<br/>
          Beauty and functionality come together in every piece.
          
 
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;