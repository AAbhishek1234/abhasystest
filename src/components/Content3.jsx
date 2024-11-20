import React from 'react'
import './Content3.css'
function Content3() {
  return (
    <>
      <div className='content3' >
        <div className='content3-container' >
            <img id='creative' src="/Images/help-growing.jpg" alt="" />
            <div className='content3-text' >
            <h1 id='content3-h1' >
            Helping Build Great <br/>Organisations</h1>
            <p id='content3-p' >
            Today, online presence and community of your prospects on social media is a must. Since begning, we are dedicated to crafting visually captivating and seamlessly functional websites. Our objective always has been not only captivate your audience but also drive results.
We blend cutting-edge technologies with artistic flair to deliver tailored solutions that reflect your brand's unique identity and meet your business goals. Partner with us to elevate your online presence and make a lasting impression.

            </p>
            </div>
<div className='content3-multipleboxes' >
<div className='content3-box1' > 
    <img src="/Images/solutions2-unscreen.gif" id="management"></img>
    <p id='management-p' >Tailored <br/>Solutions</p>
    </div>
    <div className='content3-box2' >   
        <img id='design' src="/Images/shield-unscreen.gif" ></img><p id='design-p' >Scalability <br/>& Security</p>
    </div> 
     
    <div className='content3-box3' >
        <img id='easy'  src="/Images/report-unscreen.gif">
        </img><p id='easy-p' >Insights <br/>& Reporting</p>
    </div>
    
</div>
        </div>
      </div>
    </>
  )
}

export default Content3
