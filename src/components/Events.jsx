// src/components/Events.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { techEvents, interCollegeEvents } from '../data/eventData';

const Events = () => {
  const renderEvents = (events) => {
    return events.map((event) => (
      <Link to={`/events/${event.id}`} key={event.id} className="event-card">
        <img src={event.poster} alt={event.name} className="event-poster" />
        <h3 className="event-name">{event.name}</h3>
      </Link>
    ));
  };

  return (
    <div className="events">
      <div className="events-day1">
        <h1>Day 1 - Tech Fest</h1>
        
        <div className="department-section">
          <h2>CSE</h2>
          <div className="events-grid">
            {renderEvents(techEvents.cse)}
          </div>
        </div>

        <div className="department-section">
          <h2>CE</h2>
          <div className="events-grid">
            {renderEvents(techEvents.ce)}
          </div>
        </div>

        <div className="department-section">
          <h2>BME</h2>
          <div className="events-grid">
            {renderEvents(techEvents.bme)}
          </div>
        </div>

        <div className="department-section">
          <h2>FT</h2>
          <div className="events-grid">
            {renderEvents(techEvents.ft)}
          </div>
        </div>

        <div className="department-section">
          <h2>EC</h2>
          <div className="events-grid">
            {renderEvents(techEvents.ec)}
          </div>
        </div>
      </div>

      <div className='events-day2'>
        <h1>Day 2 - DJ EVE</h1>
        <div className="dj-container">
          <img 
            src="/assets/logos/nina.png" 
            alt="Performances" 
            className="nina-img" 
          />
          <img 
            src="/assets/logos/feb24-b.png" 
            alt="Performances" 
            className="feb24" 
          />
        </div>
      </div>

      <div className='events-day3'>
        <h1>Day 3 - Inter College Events </h1>
        <div className="events-grid">
          {renderEvents(interCollegeEvents)}
        </div>
    
        <div className="matadoria-container">
          <img 
            src="/assets/logos/feb25.png" 
            alt="Performances" 
            className="feb25" 
          />
          <img 
            src="/assets/logos/matadoria.png" 
            alt="Performances" 
            className="matadoria-img" 
          />
        </div>
      </div>
    </div>
  );
};

export default Events;