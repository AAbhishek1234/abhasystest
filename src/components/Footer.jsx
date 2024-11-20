import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Content3.css'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (path, targetId) => {
    if (location.pathname === '/home') {
      // Smooth scroll within homepage using scroller
      scroller.scrollTo(targetId, { smooth: true, duration: 500, offset: -70 });
    } else {
      // Navigate to the homepage with target component state
      navigate(path, { state: { targetId } });
    }
  };
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p >
             We are a leading Digital Marketing Institute in faridabad. Feel free to contact to know more about us!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home"  style={{color:"white",textDecoration:"none"}} >Home</a></li>
              {/* <li><a href="/about" style={{color:"white",textDecoration:"none"}} >About</a></li> */}
              <li><a  onClick={() => handleScrollOrNavigate('/home', 'about')} style={{color:"white",textDecoration:"none", cursor:"pointer" }} >
              About Us</a>
            </li>

              <li><a href="" style={{color:"white",textDecoration:"none"}} >Services</a></li>
              <li><a href="/contact" style={{color:"white",textDecoration:"none"}}>Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled flex">
              <li><a href="https://facebook.com" style={{color:"white",textDecoration:"none"}}  ><i className="bi bi-facebook"></i> Facebook</a></li>
              <li><a href="https://twitter.com" style={{color:"white",textDecoration:"none"}}><i className="bi bi-twitter"></i> Twitter</a></li>
              <li><a href="https://instagram.com" style={{color:"white",textDecoration:"none"}} className='me-3'><i className="bi bi-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-light"/>

        {/* Copyright Section */}
        <div className="text-center py-3">
          <p className="mb-0">&copy; 2024 Abhasys. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
