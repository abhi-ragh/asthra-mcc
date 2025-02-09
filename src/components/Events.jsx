import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { events } from '../data/eventData';
import { technicalEvents } from './technicalEventData';

const Events = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [eventType, setEventType] = useState('non-technical');

  // Determine which events to show based on type
  const currentEvents = eventType === 'technical' ? technicalEvents : events;

  // Extract unique tags from current events
  const tagOptions = useMemo(() => {
    const uniqueTags = new Set();
    currentEvents.forEach(event => {
      event.tags?.forEach(tag => uniqueTags.add(tag));
    });
    return Array.from(uniqueTags).map(tag => ({
      value: tag,
      label: tag
    }));
  }, [currentEvents]);

  // Filter events based on selected tags
  const filteredEvents = useMemo(() => {
    if (selectedTags.length === 0) return currentEvents;
    return currentEvents.filter(event => 
      selectedTags.every(tag => event.tags?.includes(tag.value))
    );
  }, [selectedTags, currentEvents]);

  return (
    <div className="events">
      <div className="event-type-buttons">
        <button 
          className={eventType === 'technical' ? 'active' : ''}
          onClick={() => setEventType('technical')}
        >
          Technical
        </button>
        <button 
          className={eventType === 'non-technical' ? 'active' : ''}
          onClick={() => setEventType('non-technical')}
        >
          Non-Technical
        </button>
      </div>

      <div className="filter-container">
        <Select
          isMulti
          options={tagOptions}
          value={selectedTags}
          onChange={setSelectedTags}
          placeholder="Filter by tags..."
          className="tag-select"
        />
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <Link to={`/events/${event.id}`} key={event.id} className="event-card">
            <img src={event.poster} alt={event.name} className="event-poster" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;