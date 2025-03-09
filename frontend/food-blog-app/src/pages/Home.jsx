import React from 'react';
import foodRecipe from '../assets/bow.png';
import chefone from '../assets/do.jpeg';
import cheftwo from '../assets/beauty.jpg';
import chefthree from '../assets/ima.webp';
import cheffour from '../assets/in.jpeg';
import cheffive from '../assets/images.jpeg';
import Modal from "../components/Modal"


import RecipeItems from '../components/RecipeItems';
import ChefProfile from '../components/ChefProfile';
import { useState } from "react";

 // New component for chefs
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/inputForm';

export default function Home() {

  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false)
  const addRecipe=()=>{
    let token=localStorage.getItem("token")
    if(token)
    navigate("/addRecipe")
  else{
    setIsOpen(true)
  }
  }
  return (
    <>
      {/* Hero Section */}
      <section className='home'>
        <div className='left'>
          <h1>Food Recipe</h1>
          <h5>
            It's a vibrant community of food enthusiasts. Explore diverse recipes, connect with fellow cooks, and take your culinary journey to the next level.
          </h5>
          <button onClick={addRecipe}>Share Your Recipe</button>
        </div>
        <div className='right'>
          <img src={foodRecipe} width="400px" height="350px" alt="Food Recipe" />
        </div>
      </section>

      {/* SVG Background */}
      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#0099ff" 
            fillOpacity="1" 
            d="M0,256L30,229.3C60,203,120,149,180,133.3C240,117,300,139,360,133.3C420,128,480,96,540,69.3C600,43,660,21,720,48C780,75,840,149,900,186.7C960,224,1020,224,1080,213.3C1140,203,1200,181,1260,176C1320,171,1380,181,1410,186.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
          </path>
        </svg>
      </div>
  { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
      

       Recipes Section
      <section className='recipes'>
        <h2>Popular Recipes</h2>
        <div className='recipe-grid'>
          <RecipeItems />
          
        </div>
      </section> 

      {/* Chef Portfolio Section */}

      <br>
      </br>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
      <section className='chefs'>
        <h2>Find Recipes From..</h2>
        <br></br>
        <br></br>
        <br></br>
        
        <div className='chef-grid'>
          <ChefProfile 
            name="Gordon Ramsay" 
            specialty="French & British Cuisine" 
            experience="20+ years"
            imgSrc={chefone}
          />
          <ChefProfile 
            name="nataline portman" 
            specialty="Italian & Healthy Cuisine" 
            experience="5+ years"
            imgSrc={cheftwo}
          />
          <ChefProfile 
            name="keshava swamy" 
            specialty="indian" 
            experience="25+ years"
            imgSrc={chefthree}
          />
           <ChefProfile 
            name="anand" 
            specialty="indian" 
            experience="9+ years"
            imgSrc={cheffour}
          />
          <ChefProfile 
            name="sureka" 
            specialty="indian" 
            experience="12+ years"
            imgSrc={cheffive}
          />
        </div>
      </section>

      <div className="app-download-section">
  <h2>Get our award-winning app</h2>
  <p> Food makes recipe saving, grocery shopping, and cooking a breeze.</p>

  {/* Store Buttons */}
  <div className="store-buttons">
    <a href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg" alt="App Store" />
    </a>
    <a href="https://www.appcracy.com/app/wegmans-meals-2go.html">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
    </a>
    <a href="https://www.instagram.com/mr_dnl_12?igsh=cGFodTByd3kyMWV2" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </a>
  </div>

  {/* Web App Button */}
  <button className="web-app-button">Or try our web app →</button>
</div>


         
      
    </>
  );
}
