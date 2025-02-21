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
      
      <section className="AboutUs">
        <p>What we do</p>
        <h2>We provide Services</h2>

        
        <div className="AboutUsSection">
         
         {/* 1st List */}     
      
         <div className="offerList"> 
        <ul>
        <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740139250/jhwjvsssn4kzmb7pxv5f.png"/><br />  
         <h1>Custom-made</h1> 
          <li>Uniquely crafted to match your style.<br/></li>
          <li>We bring your ideas to life with personalized designs.<br/></li>
          <li> No two products are ever the same—just like you!</li>
        </ul>
          </div>

          {/* 2nd List */}
          < div className="offerList">     
          <ul>
          <img src="https://res.cloudinary.com/dgn62le6w/image/upload/v1740138712/neol0od62yzwkjydgde2.png"/>
            <h1>Artisanal </h1>
            <li>  made with skill, care, and attention to detail.<br/></li>
            <li>blend traditional techniques with modern creativity.<br/></li>
            <li>Quality is at the heart of everything we create.</li>
          </ul>
          </div>

          {/* 3rd List */}
          <div className="offerList">        
          <ul>
          <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740138821/vlxiaqii2oo6lueheys3.png"/>
          <h1> High-quality </h1>
            <li>We use premium materials to ensure durability.<br/></li>
            <li>  Each item is carefully inspected for perfection.<br/></li>
            <li>   Beauty and functionality come together in every piece.</li>
          </ul>
          </div>

          {/* 4th list */}
          <div className="offerList">          
         <ul>
         <img src="https://res.cloudinary.com/dgn62le6w/image/upload/v1740138888/ke1pxcz4ot5ssnpvgyz3.png"/>
         <h1>Elegance</h1>
          <li>We use premium materials to ensure durability.<br/></li>
          <li>Each item is carefully inspected for perfection.<br/></li>
          <li>Beauty and functionality come together in every piece.   </li>
         </ul>  
        
              
 
          </div>
        </div>
      </section>

      <section className="Mission">
        <div className="ourMission">
          <img src=" https://res.cloudinary.com/dgn62le6w/image/upload/v1740144293/bmtzbbx8ylk9gkdqvbsk.png"/>
          <h1>Our Mission</h1>
        </div>
      </section>
    </>
  );
}

export default Home;