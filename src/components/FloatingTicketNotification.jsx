import React, { useState, useEffect } from 'react';

const FloatingTicketNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    
    // After animation completes, update dismissed state
    setTimeout(() => {
      setIsDismissed(true);
    }, 600);
  };

  if (isDismissed) return null;

  return (
    <div className={`floating-ticket-notification ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={handleDismiss}>×</button>
      <div className="notification-content">
        <img 
          src="/assets/images/ticket-smol.png" 
          alt="Ticket Icon" 
          className="notification-icon"
        />
        <div className="notification-text">
          <h3>Tickets Are Live!</h3>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScG1nOsJ1hFjq3U7dfoqYpG24joCJgpDDqnz2t4cE3nPNcAng/viewform?usp=dialog" 
            className="notification-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingTicketNotification;