import React from 'react'
import './Banner.css'
function Banner() {

  const phoneNumber = "+91 9871418686"; // Replace with the desired phone number

  const handleGetStartedClick = () => {
    // Create a link to call the phone number
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
    <div className='Banner' style={{marginTop:"6rem"}}>
    <div className='banner-content' >
    <div className="heading">
  Got an <span id='idea' >idea?</span><br/>
  Take it to the world<br/>
  <div className="scroll-container">
    <div className="scroll-up-down">
      Go online
    </div>
  </div>
</div>

<p id='banner-p'>
           <span id='abhasys' >Abhasys</span> provides AFFORDABLE, SAFE and FAST way <br/> to start your Bussiness online.<br/>
            <button id='b1' onClick={handleGetStartedClick}>GET STARTED</button> <br/>

            <div classname='small-boxes' >
           
           <div className='box-1' > <img src="/Images/cyber-security-unscreen.gif" id="security"/><p className='p-under-p' >Secured &<br/>fast websites</p></div>
            
            <div className='box-2' ><img src="/Images/hanshake-bgremoved.gif" id="collaboration" alt="" /><p className='p-under-p' >Network &<br/> collaborate</p></div>

            <div className='box-3' ><img src="/Images/market-research-bgremoved.gif" id="website" alt="" /><p className='p-under-p' >Grow &<br/> progress</p></div>
            </div>
            
            </p>

            </div>
            <img src="/Images/Globe.png" id='vector' alt="" />
      </div>
    </>
  )
}

export default Banner
