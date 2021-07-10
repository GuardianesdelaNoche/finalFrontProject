import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextTruncateFlex } from "../../shared/TextTruncateFlex";

function EventCard(event) {
  const [display, setDisplay] = useState(false);

  console.log(display);
  return (
    <Card className="card-stretch">
      <Link key={event._id} to={`/event/${event._id}`}>
        <Card.Img variant="top" src="logo512.png" />
      </Link>
      <Card.Body>
        <Link key={event._id} to={`/event/${event._id}`}>
          <Card.Title>{event.title}</Card.Title>
          <Card.Title style={{ display: "flex", justifyContent: "flex-end" }}>{event.price} €</Card.Title>
        </Link>
        <Card.Subtitle className="mb-2 text-muted">
          <div className="d-flex flex-column justify-content-between">
            <div>
          {event.date}
            </div>
            <div>
          {event.duration} h
            </div>
          </div>
          {/* <div>{event.date}</div>
          <div>Duración (h): {event.duration} </div> */}
          {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {event.price} €
          </div> */}
        </Card.Subtitle>
        <div style={{ height: "3rem" }}>
          <Card.Text
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {event.description}
          </Card.Text>
        </div>
        <Card.Text>{event.description}</Card.Text>
        <Accordion>
          <Accordion.Toggle as={Card.Body} bg="green" eventKey={event._id}>
            Saber más...
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={event._id}>
            <Card.Body>{event.description}</Card.Body>
          </Accordion.Collapse>
        </Accordion>
        <Card.Text>
          <TextTruncateFlex>{event.description}</TextTruncateFlex>
        </Card.Text>
        <Card.Text>
          Plazas disponibles: {event.max_places - event._id_assistants.length}
          <br></br>
          Tipo de actividad:{" "}
          {event.indoor ? <span>Cubierta</span> : <span>Aire libre</span>}
        </Card.Text>
        {/* <ListGroup className="list-group-flush"> */}
        {/* <ListGroupItem>
          Plazas disponibles: {event.max_places - event._id_assistants.length}
          <br></br>
          Tipo de actividad: {event.indoor ? <span>Cubierta</span> : <span>Aire libre</span>}
        </ListGroupItem>
        <ListGroupItem>
        </ListGroupItem>
        <ListGroupItem> */}
        {/* <h5>
        <Badge bg="primary">Precio: {event.price} €</Badge>
          </h5>
          </ListGroupItem> */}
        {/* </ListGroup> */}
        <Card.Text>{event.tags.map((tag) => `#${tag}`)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EventCard;
