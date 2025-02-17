import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/eventData';
import { technicalEvents } from './technicalEventData';

const allEvents = [...events, ...technicalEvents];

const PrizeDisplay = ({ prizes }) => {
  if (!prizes) return null;

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
              {prize.position === 1 && '1st:'}
              {prize.position === 2 && '2nd:'}
              {prize.position === 3 && '3rd:'}
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

  // Now searches through all events
  const event = allEvents.find(e => e.id === eventId);

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

          {event.registrationFee && (
            <div className="event-fees-prizes">
              <div className="registration-fee">
                <h3>Registration Fee</h3>
                <p>
                  ₹{event.registrationFee.amount.toLocaleString()}
                  {event.registrationFee.perTeam ? ' per team' : ' per person'}
                </p>
              </div>
              {event.prizes && <PrizeDisplay prizes={event.prizes} />}
            </div>
          )}

          {/* Dynamic content sections */}
          {Object.entries(event.content || {}).map(([key, value]) => (
            <div key={key} className="event-section">
              <h2>{key}</h2>
              {Array.isArray(value) ? (
                <ul>
                  {value.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}

          {event.registrationLink && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;