import React from 'react'
import './OurClient.css'
import c1 from '../../src/assets/portfolioGridImage/c1.png'
import c2 from '../../src/assets/portfolioGridImage/c2.png'
import c3 from '../../src/assets/portfolioGridImage/c3.png'
import c4 from '../../src/assets/portfolioGridImage/c4.png'
import c5 from '../../src/assets/portfolioGridImage/c5.png'
import c6 from '../../src/assets/portfolioGridImage/c6.png'
import c7 from '../../src/assets/portfolioGridImage/c7.png'
import c8 from '../../src/assets/portfolioGridImage/c8.png'
import c9 from '../../src/assets/portfolioGridImage/c9.png'
import c10 from '../../src/assets/portfolioGridImage/c10.png'
const images = [
    c1,c2,c3,c4,c5,c6,c7,c8,c9,c10
]
function OurClient() {
  return (
    <div className='our-clinet-container'>
      <h3>Our Trusted Clients</h3>
        <div className='our-client-grid-container'>
            {images.map((data,index)=>(
                <div key={index} className='client-data-grid'>
                    <img src={data}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurClient
