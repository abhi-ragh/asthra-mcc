import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { techEvents, interCollegeEvents } from '../data/eventData';

const PrizeDisplay = ({ prizes }) => {
  if (prizes.type === 'pool') {
    return (
      <div className="prize-pool">
        <h3>Prize Pool</h3>
        <p className="prize-amount">₹{prizes.amount.toLocaleString()}</p>
      </div>
    );
  }

  return (
    <div className="prize-distribution">
      <h3>Prizes</h3>
      <div className="prize-list">
        {prizes.distribution.map((prize, index) => (
          <div key={index} className="prize-item">
            <div className="prize-position">
              {prize.position === 1 && '🥇'}
              {prize.position === 2 && '🥈'}
              {prize.position === 3 && '🥉'}
              {prize.position > 3 && `${prize.position}th`}
            </div>
            <div className="prize-amount">₹{prize.amount.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const findEvent = () => {
    for (const dept in techEvents) {
      const event = techEvents[dept].find(e => e.id === eventId);
      if (event) return event;
    }
    return interCollegeEvents.find(e => e.id === eventId);
  };

  const event = findEvent();

  useEffect(() => {
    window.scrollTo(0, 0);
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
          
          <div className="event-fees-prizes">
            <div className="registration-fee">
              <h3>Registration Fee</h3>
              <p>
                ₹{event.registrationFee.amount.toLocaleString()}
                {event.registrationFee.perTeam ? ' per team' : ' per person'}
              </p>
            </div>
            
            <PrizeDisplay prizes={event.prizes} />
          </div>

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