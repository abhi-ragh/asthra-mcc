import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Asthra, the crown jewel of Musaliar College of Engineering, is back with a vengeance! After a 3-year hiatus forced by unprecedented global challenges, we're reigniting the spark of innovation and culture with our grand rebirth. This isn't just a comeback - it's a revolution in technical excellence and creative expression.
        </p>
        <p>
          Born from the ashes of pandemic restrictions, Asthra 2024 emerges stronger than ever. Our techno-cultural extravaganza returns to push boundaries, break conventions, and create legends. This year's edition combines cutting-edge technology competitions with breathtaking cultural performances, creating a melting pot of ideas and talents.
        </p>
        <p>
          We're not just resurrecting traditions - we're rewriting the rulebook. With new events, bigger challenges, and unprecedented opportunities, Asthra 2024 is where the future gets built. Join us as we celebrate resilience, innovation, and the indomitable spirit of student community.
        </p>
      </div>
      
      <div className="development-credits">
        <h2>Website Developed By</h2>
        <div className="github-profile">
          <Github size={24} className="github-icon" />
          <a 
            href="https://github.com/abhi-ragh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Abhiragh (@abhi-ragh)
          </a>
        </div>
      </div>

      <Link to="/" className="back-home-btn">
        ← Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;