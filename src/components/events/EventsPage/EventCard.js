import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCalendarFill, BsFillClockFill, BsCalendar, BsClock } from 'react-icons/bs';
import { CollapseText } from "../../shared/CollapseText";
var moment = require("moment");

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
          <BsCalendar /> {moment(new Date(event.date)).format("DD-MM-YYYY")}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
           <BsClock /> {event.duration} h
          </Card.Subtitle>
        </div>
        <Card.Text>{event.description}</Card.Text>
        {/* <div className="mb-3">
          <CollapseText>{event.description}</CollapseText>
        </div> */}
        <Card.Text>
          Plazas disponibles: <span className='float-right'>{event.max_places - event._id_assistants.length}</span>
          <br></br>
          Actividad:{" "}
          <span className='float-right'>{event.indoor ? 'Cubierta' : 'Aire libre'}</span>
        </Card.Text>
        <Card.Text>{event.tags.map((tag) => `#${tag}`)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EventCard;
