import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CollapseText } from "../../shared/CollapseText";

function EventCard(event) {
  return (
    <Card className="card-stretch">
      <Link key={event._id} to={`/event/${event._id}`}>
        <Card.Img variant="top" src="logo512.png" />
      </Link>
      <Card.Body>
        <Link key={event._id} to={`/event/${event._id}`}>
          <Card.Title>{event.title}</Card.Title>
        </Link>
        <Card.Title style={{ display: "flex", justifyContent: "flex-end" }}>
          {event.price} €
        </Card.Title>
        <div className="d-flex flex-row justify-content-between">
          <Card.Subtitle className="mb-2 text-muted">
            {event.date}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {event.duration} h
          </Card.Subtitle>
        </div>
        <Card.Text>{event.description}</Card.Text>
        <div className="mb-3">
          <CollapseText>{event.description}</CollapseText>
        </div>
        <Card.Text>
          Plazas disponibles: {event.max_places - event._id_assistants.length}
          <br></br>
          Actividad:{" "}
          {event.indoor ? <span>Cubierta</span> : <span>Aire libre</span>}
        </Card.Text>
        <Card.Text>{event.tags.map((tag) => `#${tag}`)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EventCard;
