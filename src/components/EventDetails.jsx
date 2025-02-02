// src/components/EventDetails.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { techEvents, interCollegeEvents } from '../data/eventData';
import '../styles/events.css';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  // Find the event in either techEvents or interCollegeEvents
  const findEvent = () => {
    // First check in techEvents (all departments)
    for (const dept in techEvents) {
      const event = techEvents[dept].find(e => e.id === eventId);
      if (event) return event;
    }
    // Then check in interCollegeEvents
    return interCollegeEvents.find(e => e.id === eventId);
  };

  const event = findEvent();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  if (!event) {
    return (
      <div className="event-not-found">
        <h2>Event not found</h2>
        <button onClick={() => navigate('/events')} className="back-btn">
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="event-details-container">
      <button onClick={() => navigate('/events')} className="back-btn">
        ← Back to Events
      </button>

      <div className="event-details-content">
        <div className="event-image-section">
          <img 
            src={event.poster} 
            alt={event.name} 
            className="event-details-poster"
          />
        </div>

        <div className="event-info-section">
          <h1 className="event-title">{event.name}</h1>
          
          <div className="event-description">
            <h2>Description</h2>
            <p>{event.description}</p>
          </div>

          <div className="event-rules">
            <h2>Rules</h2>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="registration-section">
            <a 
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;