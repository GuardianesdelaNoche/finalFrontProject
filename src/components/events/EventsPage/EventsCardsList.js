import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

function Event(event) {
  return (
    <Card className="card-stretch">
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          {event.description}
        </Card.Text>
        <Card.Text>
          <span>{event.price}</span> <span>{event.max_places}</span>
          </Card.Text>
          <Card.Text>
          <span>Date: {event.date}</span>
          <span>Duration: {event.duration}</span>
          </Card.Text>
          <Card.Text>
          {event.indoor ? <span>Indoor</span> : <span>Outdoor</span>}
          {event.tags}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

function EventsCardsList({ events }) {
  const renderEvent = ({ ...event }) => (
    <Link key={event._id} to={`/event/${event._id}`}>
      <Event {...event} />
    </Link>
  );
  return <CardColumns>{events.events.map(renderEvent)}</CardColumns>;
}

export default EventsCardsList;
