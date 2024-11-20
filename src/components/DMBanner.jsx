import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DMBanner = () => {
  const handleCall = () => {
    window.location.href = 'tel:+9871428686'; // Phone number for call
  };

  return (
    <div className="banner-container" style={{ position: 'relative', height: '500px' }}>
      <img
        src="/images/bannerimg.jpg" // Replace with your banner image URL
        alt="Banner"
        className="img-fluid w-100"
        style={{ objectFit: 'cover', height: '100%', filter: 'blur(4px)' }}
      />

      <div
        className="banner-content text-center"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight opacity for the background
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add slight shadow for depth
        }}
      >
        <h1 className="display-5 font-weight-bold" style={{ fontSize: '3rem' }}>
          Welcome to Abhasys
        </h1>
        <p className="lead" style={{ fontSize: '1.25rem', fontWeight: '300' }}>
          The only institute in India that can refund all your fees after course completion. To know more, call now!
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={handleCall}
          style={{ fontSize: '1.25rem', padding: '0.75rem 2rem' }}
        >
          Call - 9871428686
        </button>
      </div>
    </div>
  );
};

export default DMBanner;
