import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isNinaVisible, setIsNinaVisible] = useState(false);
  const [isMatadoriaVisible, setIsMatadoriaVisible] = useState(false);
  const [isSponsorsVisible, setIsSponsorsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  
  const aboutRef = useRef();
  const ninaRef = useRef();
  const matadoriaRef = useRef();
  const sponsorsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.innerHeight * 0.8;
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / scrollHeight, 1);
      setScrollProgress(progress);

      // Visibility checks
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        setIsAboutVisible(rect.top < window.innerHeight * 0.8);
      }
      if (ninaRef.current) {
        const rect = ninaRef.current.getBoundingClientRect();
        setIsNinaVisible(rect.top < window.innerHeight * 0.8);
      }
      if (matadoriaRef.current) {
        const rect = matadoriaRef.current.getBoundingClientRect();
        setIsMatadoriaVisible(rect.top < window.innerHeight * 0.8);
      }
      if (sponsorsRef.current) {
        const rect = sponsorsRef.current.getBoundingClientRect();
        setIsSponsorsVisible(rect.top < window.innerHeight * 0.8);
      }
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setIsContactVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
        <div 
          className="clouds-container"
          style={{ '--scroll-progress': scrollProgress }}
        >
            <img src="/assets/images/Cloud 2.png" alt="Cloud 1" className="cloud cloud-left-top" />
            <img src="/assets/images/Cloud 1.png" alt="Cloud 2" className="cloud cloud-left-mid" />
            <img src="/assets/images/Cloud 2.png" alt="Cloud 3" className="cloud cloud-left-bottom" />
            <img src="/assets/images/Cloud 2-flip.png" alt="Cloud 4" className="cloud cloud-right-top" />
            <img src="/assets/images/Cloud 1-flip.png" alt="Cloud 5" className="cloud cloud-right-mid" />
            <img src="/assets/images/Cloud 2-flip.png" alt="Cloud 6" className="cloud cloud-right-bottom" />
        </div>

        <div className="home-container">
            <div className={`logo-container ${scrollProgress > 0.3 ? 'hidden' : ''}`}>
                <img
                src="/assets/logos/logo.png"
                alt="Fest Logo"
                className="fest-logo"
                />
            </div>
            <div className={`dates ${scrollProgress > 0.3 ? 'hidden' : ''}`}>
                  <p> FEB 22 24 25</p>
            </div>
        </div>

        <div 
          className={`About ${isAboutVisible ? 'visible' : ''}`} 
          ref={aboutRef}
        >
          <div className='about-heading'>
            <h1> BEHOLD </h1>
            <img src='/assets/images/dragon.png' alt='Dragon' className='dragon' />
            <h1> ASTHRA </h1>
          </div>         
          <p> <b>Asthra</b>—the crown jewel of Musaliar College of Engineering—is more than just a fest; it’s a symphony of innovation, creativity, and limitless ambition. Every year, it transforms our campus into a vibrant playground of ideas, where brilliant minds collide, collaborate, and craft the future.  

As our flagship techno-cultural extravaganza, Asthra is where technology meets artistry, logic embraces imagination, and raw talent takes center stage. From adrenaline-pumping competitions and cutting-edge workshops to mesmerizing performances and awe-inspiring exhibitions, every moment is designed to ignite curiosity and fuel passion.  

With each passing year, Asthra grows—not just in scale, but in spirit. It is a celebration of bold ideas, daring dreams, and the relentless pursuit of excellence. It unites students, innovators, and visionaries in a shared journey of discovery, achievement, and unbridled joy.  

Step into Asthra, where the future is not just imagined—it’s engineered, performed, and celebrated. </p>
        </div>

        <div className='Performances'>
            <p> PERFORMING LIVE @ MCC </p>
            <div className={`nina ${isNinaVisible ? 'visible' : ''}`} ref={ninaRef}>
              <img src="/assets/logos/nina.png" alt="Performances" className="nina-img fade-left" />
              <img src="/assets/logos/feb24.png" alt="Performances" className="feb24 fade-right" />
            </div> 
            <div className={`matadoria ${isMatadoriaVisible ? 'visible' : ''}`} ref={matadoriaRef}>
              <img src="/assets/logos/feb25.png" alt="Performances" className="feb25 fade-left" />
              <img src="/assets/logos/matadoria.png" alt="Performances" className="matadoria-img fade-right" />
            </div>
        </div>

        <div 
        className={`Sponsors ${isSponsorsVisible ? 'visible' : ''}`}
        ref={sponsorsRef}
      >
        <h1> Our Sponsors </h1>
        <h2 className="platinum glow-platinum"> Platinum Sponsors </h2>
        <div className="sponsor-item">
          <img src='/assets/images/google.png' alt='Platinum Sponsor 1' className='img-fluid mb-3' style={{ maxWidth: '200px' }} />
        </div>
        
        <h2 className="gold glow-gold"> Gold Sponsors </h2>
        <div className="sponsor-grid">
          <div className="sponsor-item">
            <img src='/assets/images/g.png' alt='Gold Sponsor 1' className='img-fluid mb-3' style={{ maxWidth: '150px' }} />
          </div>
          <div className="sponsor-item">
            <img src='/assets/images/g.png' alt='Gold Sponsor 2' className='img-fluid mb-3' style={{ maxWidth: '150px' }} />
          </div>
          <div className="sponsor-item">
            <img src='/assets/images/g.png' alt='Gold Sponsor 3' className='img-fluid mb-3' style={{ maxWidth: '150px' }} />
          </div>
        </div>

        <h2 className="silver glow-silver"> Silver Sponsors </h2>
        <div className="sponsor-grid">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="sponsor-item">
              <img 
                src='/assets/images/g.png' 
                alt={`Silver Sponsor ${index}`} 
                className='img-fluid mb-3' 
                style={{ maxWidth: '100px' }} 
              />
            </div>
          ))}
        </div>
      </div>

      <div 
        className={`Contact ${isContactVisible ? 'visible' : ''}`}
        ref={contactRef}
      >
        <h1>Get In Touch</h1>
        <div className="contact-grid">
          <div className="contact-item">
            <Mail size={32} className="contact-icon" />
            <h3>Email Us</h3>
            <a href="mailto:asthramcc@gmail.com">asthramcc@gmail.com</a>
          </div>
          
          <div className="contact-item">
            <Phone size={32} className="contact-icon" />
            <h3>Call Us</h3>
            <a href="tel:+919999999999">+91 99999 99999</a>
          </div>
          
          <div className="contact-item">
            <Instagram size={32} className="contact-icon" />
            <h3>Follow Us</h3>
            <a href="https://instagram.com/asthra_mcc" target="_blank" rel="noopener noreferrer">
              @asthra_mcc
            </a>
          </div>
          
          <div className="contact-item">
            <MapPin size={32} className="contact-icon" />
            <h3>Visit Us</h3>
            <p>Musaliar College of Engineering<br />Chirayinkeezhu, Trivandrum<br />Kerala, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;