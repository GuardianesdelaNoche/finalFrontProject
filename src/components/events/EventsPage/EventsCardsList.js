import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns } from "react-bootstrap";
import EventCard from './EventCard';

function EventsCardsList({ events }) {
  const renderEvent = ({ ...event }) => (
      <EventCard {...event} key={event._id}/>
  );
  return <CardColumns>{events.map(renderEvent)}</CardColumns>;
}

export default EventsCardsList;
