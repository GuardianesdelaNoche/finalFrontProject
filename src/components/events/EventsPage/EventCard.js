import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";

function EventCard(event) {
  return (
    <Card className="card-stretch">
      <Card.Img variant="top" src="logo512.png" />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span>{event.date}</span>
          <span>{event.duration}</span>
        </Card.Subtitle>
        <Card.Text>{event.description}</Card.Text>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Plazas disponibles {event.max_places - event._id_assistants.length}
        </ListGroupItem>
        <ListGroupItem>
          {event.indoor ? <span>Indoor</span> : <span>Outdoor</span>}
        </ListGroupItem>
        <ListGroupItem>
          <h5>
        <Badge bg="primary">{event.price} €</Badge>
          </h5>
          </ListGroupItem>
      </ListGroup>
        <Card.Text>{event.tags.map((tag) => `#${tag}`)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EventCard;