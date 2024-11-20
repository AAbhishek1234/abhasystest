import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import CusNavbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content1 from '../components/Content1'
import Content2 from '../components/Content2'
import './Home.css'
// import Content3 from '../Components/Content3'
import Content4 from '../components/Content4'
// import Content5 from '../Components/Content5'
import Footer from '../components/Footer'
import Content02 from '../components/Content02'
import OurClients from '../components/OurClients';
function Home() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.state?.targetId) {
        scroller.scrollTo(location.state.targetId, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }
    }, [location]);
  
  return (
    <>
    {/* <section> </section> */}
      <CusNavbar></CusNavbar>
    <Banner></Banner>
    <Content1></Content1>
    <section id='about' >
    <Content02/>
    </section>
    <section id='services'>
    <Content2/>
    </section>
    
    {/* <Content3></Content3> */}
    {/* <Content4></Content4> */}
    {/* <Content5></Content5> */}
    <OurClients></OurClients>
    <Footer></Footer>
    </>
  )
}

export default Home
