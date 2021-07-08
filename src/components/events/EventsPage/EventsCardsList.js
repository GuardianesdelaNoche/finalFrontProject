import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns } from "react-bootstrap";
import EventCard from './EventCard';

function EventsCardsList({ events }) {
  const renderEvent = ({ ...event }) => (
    <Link key={event._id} to={`/event/${event._id}`}>
      <EventCard {...event} />
   </Link>
  );
  return <CardColumns>{events.map(renderEvent)}</CardColumns>;
}

export default EventsCardsList;
