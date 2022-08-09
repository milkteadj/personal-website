import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='hero-center-container'>
        <img className="heroImage" src={process.env.PUBLIC_URL + '/images/bridge.JPG'} />

        <h1>Hello World,</h1> 
        <p>My name is Jared Ni.</p>
        <div className="pp">I am a rising sophomore at Harvard studying computer science and economics.
            My dream is to engineer software products that improve the way people live.
            <br/> Here are some interesting facts about me: 
        </div>
        <div className="pp-points">
            &emsp; <i class="fa-solid fa-quote-left quote"></i>        
                &nbsp; I helped build a college matchmaking app used by 50k students 
                &nbsp; <i class="fa-solid fa-heart"></i> 
            <br /> &emsp; <i class="fa-solid fa-quote-left quote"></i> 
                &nbsp; I designed and programmed the frontend of a mobile drone-delivery app at a start-up 
                &nbsp; <i class="fa-solid fa-helicopter"></i>
            <br /> &emsp; <i class="fa-solid fa-quote-left quote"></i> 
                &nbsp; Favorite Harvard course so far: CS20 Discrete Mathematics for Computer Science &nbsp; <i class="fa-solid fa-share-nodes"></i>
        </div>
        </div>
    </div>

  )
}

export default HeroSection