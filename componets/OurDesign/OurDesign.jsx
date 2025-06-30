import React from 'react'
import './OurDesign.css'
import image from '../../src/assets/portfolioGridImage/design.jpg'
function OurDesign() {
  return (
    <div className='our-design-container'>
      <div className='our-design-container-head-text'>
        <h1>How We Make Work Better for Everyone</h1>
        <p>We design workspaces that break barriers and foster true inclusivity. From universal design solutions to assistive technology integration, we ensure every space works for everyone.</p>
      </div>
      <div className='our-design-container-image-black-box'>
        <div className='our-design-container-image'>
            <img src={image}/>
            <div className='our-design-container-image-inside-text'>
                <h3>Renovation Work</h3>
                <p>Our renovation work incorporates Braille signage, accessible restrooms, and adaptive workspaces, ensuring a seamless and inclusive experience for differently-abled individuals.</p>
            </div>
        </div>
        <div className='black-box'>
            <h1>AND MANY MORE ...</h1>
        </div>
      </div>
    </div>
  )
}

export default OurDesign
