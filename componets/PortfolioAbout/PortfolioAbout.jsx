import React from 'react'
import './PortfolioAbout.css'
import image from '../../src/assets/portfolioGridImage/about.png'
function PortfolioAbout() {
  return (
    <div className='portfolio-about-section-container'>
    <div className='portfolio-about-section-content'>
      <p className='about-head'>About Equispace</p>
      <h1>Building a Better Future, One Step at a Time</h1>
      <p className='about-para'>At EquiSpace, we don’t just design workspaces we create possibilities, independence, and a sense of belonging. Our inclusive coworking spaces break barriers, spark confidence, and celebrate every ability, empowering individuals to thrive, collaborate, and succeed.</p>
      </div>
    <div>
        <img src={image}/>
    </div>
    </div>
  )
}

export default PortfolioAbout
