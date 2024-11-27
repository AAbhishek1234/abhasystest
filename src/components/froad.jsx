


/* General Styling */
.custom-section {
    margin: 2rem 0;
  }
  .container-fluid {
    padding: 0;
  }
  .custom-section {
    padding: 2rem 0;
  }
  .no-padding {
    padding: 0;
  }
  .text-center {
    text-align: center;
  }
  .align-items-start {
    display: flex;
    align-items: flex-start;
  }
  
  .section-heading {
    font-size: 2.5rem;
    font-weight: bold;
    color: black !important;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
  
  .text-section h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: black !important;
  }
  
  .text-section p {
    font-size: 1.3rem !important;
    color: black !important;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .website-text .website-heading,
  .social-text .social-heading,
  .software-text .software-heading,
  .mobile-text .mobile-heading {
    color: black !important;
  }
  
  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .full-width-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Mobile View Styling */
  @media (max-width: 768px) {
    .custom-section {
      flex-direction: column; /* Stack items vertically */
      padding: 1.5rem 0;
    }
  
    .text-section {
      order: 1; /* Ensure text appears first */
    }
  
    .image-col {
      order: 2; /* Ensure image appears after text */
      margin-top: 1rem; /* Add spacing between text and image */
    }
  
    .text-section h2 {
      font-size: 1.5rem;
      margin-top: 0;
    }
  
    .text-section p {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
  
    .section-heading {
      font-size: 2rem;
    }
  
    .website-text .website-heading,
    .social-text .social-heading,
    .software-text .software-heading,
    .mobile-text .mobile-heading {
      margin-top: 0;
    }
  }
  
  /* Extra Small Screen Adjustments */
  @media (max-width: 576px) {
    .text-section h2 {
      font-size: 1.2rem;
      margin-top: 0;
    }
  
    .text-section p {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
  
    .section-heading {
      font-size: 1.8rem;
    }
  }
  
  /* Adjustments for Specific Laptop Sizes */
  @media (min-width: 1024px) and (max-width: 1440px) {
    .full-width-image {
      height: 339px;
      object-fit: cover;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
  