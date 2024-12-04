

import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './Navbar.css';

function CusNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (path, targetId) => {
    if (path === '/Contact-us') {
      navigate('/Contact-us'); 
      return;
    }

    if (location.pathname === '/home') {
      if (targetId) {
        scroller.scrollTo(targetId, { smooth: true, duration: 10, offset: -70 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path, { state: { targetId } });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`bg-light fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
      <Navbar.Brand
  onClick={() => handleScrollOrNavigate('/home')}
  style={{ cursor: 'pointer' }}
>
  <img
    src="/Images/abslogo.png"
    alt="Logo"
    style={{ height: '25px', width: '100%' }}
  />
</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScrollOrNavigate('/home')} className="nav-item tab">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollOrNavigate('/home', 'about')} className="nav-item tab">
              About Us
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollOrNavigate('/home', 'services')} className="nav-item tab">
              Services
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollOrNavigate('/Contact-us')} className="nav-item tab">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CusNavbar;


