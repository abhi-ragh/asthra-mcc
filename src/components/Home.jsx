import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
        <div className="home-container">
            {/* Background Video */}
            <video autoPlay muted loop className="background-video">
                <source src="/assets/videos/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Vignette Overlay */}
            <div className="vignette-overlay"></div>

            {/* Centered Logo */}
            <div className={`logo-container ${isScrolled ? 'hidden' : ''}`}>
                <img
                src="/assets/logos/logo.png"
                alt="Fest Logo"
                className="fest-logo"
                />
            </div>
        </div>
        <div className='About'>
            <h1> About US </h1>
            <p> Asthra is a celebration of innovation, creativity, and progress, bringing together bright minds to explore the limitless possibilities of technology and invention. As our college's flagship fest, Asthra serves as a platform for students to showcase their talents, collaborate on groundbreaking ideas, and push the boundaries of imagination. With each passing year, it continues to inspire a shared vision of growth and excellence, uniting everyone in the spirit of discovery and achievement. </p>
        </div>
        <div className='Performances'>
            <img src="/assets/images/img1.jpg" alt="Performances" className="performances-img" />
            <img src="/assets/images/img1.jpg" alt="Performances" className="performances-img" />
        </div>

        <div className='Sponsors'>
            <h1> Our Sponsors </h1>
            <h2 className="platinum"> Platinum Sponsors </h2>
            <img src='/assets/images/google.png' alt='Platinum Sponsor 1' className='img-fluid mb-3' style={{ maxWidth: '200px' }} />
            <h2 className="gold"> Gold Sponsors </h2>
            <img src='/assets/images/g.png' alt='Gold Sponsor 1' className='img-fluid mb-3' style={{ maxWidth: '150px' }} />
            <img src='/assets/images/g.png' alt='Gold Sponsor 2' className='img-fluid mb-3' style={{ maxWidth: '150px' }} />
            <img src='/assets/images/g.png' alt='Gold Sponsor 3' className='img-fluid mb-3' style={{ maxWidth: '150px' }} />
            <h2 className="silver"> Silver Sponsors </h2>
            <img src='/assets/images/g.png' alt='Silver Sponsor 1' className='img-fluid mb-3' style={{ maxWidth: '100px' }} />
            <img src='/assets/images/g.png' alt='Silver Sponsor 2' className='img-fluid mb-3' style={{ maxWidth: '100px' }} />
            <img src='/assets/images/g.png' alt='Silver Sponsor 3' className='img-fluid mb-3' style={{ maxWidth: '100px' }} />
            <img src='/assets/images/g.png' alt='Silver Sponsor 4' className='img-fluid mb-3' style={{ maxWidth: '100px' }} />
            <img src='/assets/images/g.png' alt='Silver Sponsor 5' className='img-fluid mb-3' style={{ maxWidth: '100px' }} />
        </div>

        <div className='Contact'>
            <h1> Contact Us </h1>
            <p> Email: asthramcc@gmail.com </p>
            <p> Phone: 99999999999 </p>
        </div>
    </div>
  );
};

export default Home;