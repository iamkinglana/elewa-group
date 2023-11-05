import React from 'react'
import NavBar from '../Top-Bottom/NavBar';
import "../styles/social-css/socialIntro.css";

// Displays the introduction section
const SocialIntro: React.FC<{}> = () => {
  return (
    <div className="intro-social">
      <NavBar />
      <div className="intro-social-content">
        <h3>Scaling impact. Beyond the norm</h3>
        <h1>Human and Environmental Impact through Social Enterprise</h1>
      </div>
    </div>
  )
}

export default SocialIntro
