import React from 'react'
import Navbar from './Navbar'
import DMBanner from './DMBanner'
import DMSocialmedia from './DMSocialmedia'
import DMContent1 from './DMContent1'
import DMContent2 from './DMContent2'
import DMContent3 from './DMContent3'
import DMContent4 from './DMContent4'
import DMContent5 from './DMContent5'

function DigitalMakreting() {
  return (
    <>
    <Navbar></Navbar>
    <DMBanner></DMBanner>
    {/* <DMSocialmedia></DMSocialmedia> */}
    <DMContent1></DMContent1>
    <DMContent2></DMContent2>
    <DMContent3></DMContent3>
    <DMContent4></DMContent4>
    <DMContent5></DMContent5>
    </>
  )
}

export default DigitalMakreting