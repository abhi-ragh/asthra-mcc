/* TODO: 
- Optimize images and videos 
- Clean up CSS
- Add sponsor logos
- Add sponsor links
- Test if everything works
*/


import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import FloatingTicketNotification from './FloatingTicketNotification';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isNinaVisible, setIsNinaVisible] = useState(false);
  const [isMatadoriaVisible, setIsMatadoriaVisible] = useState(false);
  const [isSponsorsVisible, setIsSponsorsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [showLogoAndDate, setShowLogoAndDate] = useState(false);
  
  const introVideoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const aboutRef = useRef();
  const ninaRef = useRef();
  const matadoriaRef = useRef();
  const sponsorsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // Simple timer to show logo and date after 3 seconds
    const timer = setTimeout(() => {
      setShowLogoAndDate(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    if (introVideoRef.current) {
      introVideoRef.current.addEventListener('timeupdate', () => {
        if (introVideoRef.current && bgVideoRef.current) {
          const timeLeft = introVideoRef.current.duration - introVideoRef.current.currentTime;
          if (timeLeft <= 0.1 && !isIntroFinished) {
            bgVideoRef.current.play();
            setIsIntroFinished(true);
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="home-container">
        <div className="video-wrapper">
          <video 
            ref={introVideoRef}
            className="video"
            style={{ visibility: isIntroFinished ? 'hidden' : 'visible' }}
            autoPlay 
            playsInline 
            muted
          >
            <source src="/assets/videos/intro.mp4" type="video/mp4" />
          </video>
          
          <video 
            ref={bgVideoRef}
            className="video"
            style={{ visibility: isIntroFinished ? 'visible' : 'hidden' }}
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/assets/videos/bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className={`logo-container ${showLogoAndDate ? 'fade-in' : 'invisible'} ${scrollProgress > 0.3 ? 'hidden' : ''}`}>
          <img
            src="/assets/logos/logo.png"
            alt="Fest Logo"
            className="fest-logo"
          />
        </div>
        <div className={`dates ${showLogoAndDate ? 'fade-in' : 'invisible'} ${scrollProgress > 0.3 ? 'hidden' : ''}`}>
          <p className='date-gradient'> FEB 22 24 25</p>
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
            <div className="marquee-container">
              <div className="marquee-text">
                Students Registering For Intercollege Events Can Choose 
                <span className="highlight"> One Free Ticket </span> 
                For Either 
                <span className="highlight"> DJ EVE </span> 
                or 
                <span className="highlight"> PRO SHOW</span>
              </div>
            </div>
            <div className={`matadoria ${isMatadoriaVisible ? 'visible' : ''}`} ref={matadoriaRef}>
              <img src="/assets/logos/feb25.png" alt="Performances" className="feb25 fade-left" />
              <img src="/assets/logos/matadoria.png" alt="Performances" className="matadoria-img fade-right" />
            </div>
        </div>

        <div className={`Sponsors ${isSponsorsVisible ? 'visible' : ''}`} ref={sponsorsRef}>
          {/* Title Sponsor */}
          <div className="title-section">
            <h2 className="glow-title">Title Sponsor</h2>
            <div className="sponsor-grid">
              <div className="sponsor-item title-sponsor">
                { /*<img src='/assets/images/googe.png' alt='Coming Soon' /> */}
                <h6> Coming Soon</h6>
              </div>
            </div>
          </div>

          {/* Platinum Sponsors */}
          <div className="platinum-section">
            <h2 className="platinum">Platinum Sponsors</h2>
            <div className="sponsor-grid">
              <div className="sponsor-item platinum-sponsor">
              { /*<img src='/assets/images/googe.png' alt='Coming Soon' /> */}
                <h6> Coming Soon</h6>
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="gold-section">
            <h2 className="gold">Gold Sponsors</h2>
            <div className="sponsor-grid">
              <div className="sponsor-item gold-sponsor">
              { /*<img src='/assets/images/googe.png' alt='Coming Soon' /> */}
                <h6> Coming Soon</h6>
              </div>
              {/* Add more gold sponsors */}
            </div>
          </div>

          {/* Gifting Partner */}
          <div className="silver-section">
            <h2 className="silver">Gifting Partner</h2>
            <div className="sponsor-grid">
                <div className="sponsor-item silver-sponsor">
                  <img src='/assets/logos/myop.jpg' alt='myop' /> 
                </div>
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="silver-section">
            <h2 className="silver">Silver Sponsors</h2>
            <div className="sponsor-grid">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="sponsor-item silver-sponsor">
                  { /*<img src='/assets/images/googe.png' alt='Coming Soon' /> */}
                  <h6> Coming Soon</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

      <div 
        id="contact"
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
            <a href="tel:+919074355010">+91 90743 55010</a>
          </div>
          
          <div className="contact-item">
            <Instagram size={32} className="contact-icon" />
            <h3>Follow Us</h3>
            <a href="https://instagram.com/asthra.mcc" target="_blank" rel="noopener noreferrer">
              @asthra.mcc
            </a>
          </div>
          
          <div className="contact-item">
            <MapPin size={32} className="contact-icon" />
            <a href="https://maps.app.goo.gl/Y43Z5kSahvHZqmpj6" target="_blank" rel="noopener noreferrer">
            <h3>Visit Us</h3>
            <p>Musaliar College of Engineering<br />Chirayinkeezhu, Trivandrum<br />Kerala, India</p>
            </a>
          </div>
        </div>
      </div>
      <FloatingTicketNotification />
    </div>
  );
};

export default Home;