import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DMContent1 = () => {
  return (
    <div className="container my-5">
      {/* Heading */}
      <h1 className="text-center mb-4" style={{ fontSize: '50px', fontWeight: '700' }}>Why You Should Learn Digital Marketing</h1>

      {/* Content inside container */} 
      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 0 10px black' }}>
        <p className="lead" style={{ fontSize: '25px', lineHeight: '1.6' }}>
          <strong>Today, every business</strong> is conducting more than <strong>80%</strong> of its activities through digital mediums.
          <br/>
          <strong>Digital marketing</strong> has become <strong>crucial</strong> in today’s business landscape, with an ever-growing demand for skilled professionals. There are currently over <strong>1.5 lakh job openings</strong>, with an impressive <strong>25% year-on-year growth</strong> in the industry.
          
          Digital marketing offers <strong>multifaceted roles</strong> that can transform you from a college student to a seasoned professional. It opens doors for career growth, from <strong>social media marketing executives</strong> to <strong>data analytics experts</strong>.
        
          Our <strong>digital marketing course</strong> is designed to equip learners for the <strong>dynamic</strong> and <strong>fast-paced world</strong> of digital marketing. <strong>Join us today</strong> to unlock your full potential and thrive in this ever-evolving industry.
        </p>
      </div>
    </div>
  );
}

export default DMContent1;
