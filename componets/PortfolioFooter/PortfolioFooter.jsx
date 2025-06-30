import React from 'react'
import './PortfolioFooter.css'
function PortfolioFooter() {
  return (
    <div className='portfolio-footer-container'>
    <div className='footer-container-port'>
      <div className='portfolio-left-conatiner'>
        <h1>Let's Connect</h1>
        <div className='footer-left-text'>
        <p className='portfolio-para'>Tell us about your business. Let's get this conversation started. Fill in the form or send us an email.</p>
        <div className="footer-arrow-icon-text">
            <i className="bi bi-arrow-right"></i>
            <p className="connect-link-footer">connectus@.in</p>
        </div>
            <div className='footer-left-connect-container'>
                <div className='address-head'>
                    <p>(connect)</p>
                    <h4>Twitter</h4>
                    <h4>Instagram</h4>
                    <h4>Linkedin</h4>
                </div>
                <div className='address-head'>
                    <p>(Visit Us)</p>
                    <h4>#129, ground floor 6th cross Bapuji</h4>
                    <h4>layout Chandra layout Vijaynagar,</h4>
                    <h4>Bangalore-560040, India</h4>
                </div>
            </div>
        </div>
      </div>
      <div className='footer-form'>
        <div className='text-and-input'>
            <p>Name</p>
            <input type='text' placeholder='john doe'/>
        </div>
        <div className='text-and-input'>
            <p>Email Address</p>
            <input type='text' placeholder='abc@gmail.com'/>
        </div>
        <div className='text-and-input'>
            <p>Company Name</p>
            <input type='text' placeholder='ABC company'/>
        </div>
        <div className='text-and-input'>
            <p>Message</p>
            <textarea placeholder='i want to build a..'/>
        </div>
        <button className='footer-submit-btn'>Submit</button>
      </div>
    </div>
    <hr className='footer-hr-line'/>
    <div className='copy-right-text'>
        <p>Copyright © 2025 Equispace. All rights reserved.</p>
        <p style={{color:"white"}}>Back to top</p>
        <p>created by <strong style={{color:"white"}}>Atelier Creation</strong></p>
    </div>
    </div>
  )
}

export default PortfolioFooter
