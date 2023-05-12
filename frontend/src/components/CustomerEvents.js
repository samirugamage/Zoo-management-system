import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { format } from 'date-fns';
import axios from 'axios';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function EventsCalendar() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get('http://localhost:8070/event');
      setEvents(
        response.data.map((event) => ({
          ...event,
          start: new Date(event.date),
          end: new Date(event.date),
          title: event.name,
        })),
      );
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, events]);

  return (
    <div>
{/* Top Navigation Start */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/AdminPanel">
              Zoo management system
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/attemptquestion">
                    Take a Quiz
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/events">
                    <span className="sr-only">(current)</span>Events
                  </a>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
              </div>
            </div>
          </nav>
          {/* Top Navigation End */}
    <br></br>
<div className="container" style={{ maxWidth: '90%' }}>      <div className="row">
        <div className="col-md-8">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 550 }}
          />
        </div>
        <div className="col-md-4">
          <h3>Search Events</h3>
          <input
            type="text"
            placeholder="Search events by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control mb-3"
          />
          <ul className="list-group">
            {filteredEvents.map((event) => (
              <li key={event._id} className="list-group-item">
                <strong>{event.name}</strong>
                <br />
                {format(new Date(event.date), 'MMM d, yyyy')}
                <br />
                {event.place}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventsCalendar;
