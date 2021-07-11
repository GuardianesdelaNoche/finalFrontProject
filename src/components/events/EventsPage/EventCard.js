import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCalendar, BsClock } from "react-icons/bs";
import { RiBookmark3Line, RiHome4Line } from "react-icons/ri";
import { TiTree } from "react-icons/ti";
import { FormattedMessage } from "react-intl";

import { CollapseText } from "../../shared/CollapseText";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { getIsLogged } from "../../../store/selectors/auth";

var moment = require("moment");

function EventCard(event) {
  // const state = useSelector(getIsEventFav(event._id));
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const handleAddEventFavs = () => {
    console.log("add/remove fav -> redux & api");
  };

  return (
    <Card className="card-stretch">
      <div>
      {isLogged ? (
        <Button
          className="float-right"
          variant="secondary"
          onClick={handleAddEventFavs}
          active={false}
        >
          <RiBookmark3Line />
        </Button>
      ) : (
        // <Button className="float-right" variant="secondary" onClick={handleAddEventFavs} disabled={!isLogged}>
        //   <RiBookmark3Line />
        // </Button>
        <OverlayTrigger
          overlay={
            <Tooltip id="button-fav">
              <FormattedMessage
                id="eventCard.overlay.registerLogin"
                defaultMessage="Register or Login"
              />
            </Tooltip>
          }
        >
          <div className="Container">
              <span className="float-right">
                <Button
                  className="ribbon"
                  disabled
                  style={{ pointerEvents: "none" }}
                  variant="secondary"
                >
                  <RiBookmark3Line />
                </Button>
                
                  <Card.Img variant="top" src={event.photo} />
             
              </span>
           </div>
        </OverlayTrigger>
      )}
        
          
        
      </div>
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
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <FormattedMessage
              id="eventCard.availableSeats"
              defaultMessage="Available seats"
            />
            <span className="float-right">
              {event.max_places - event._id_assistants.length}
            </span>
          </div>
          <div>
            <FormattedMessage
              id="eventCard.activity"
              defaultMessage="Activity"
            />
            <span className="float-right">
              {event.indoor ? (
                <div>
                  <FormattedMessage
                    id="eventCard.indoor"
                    defaultMessage="Indoor"
                  />
                  <RiHome4Line />
                </div>
              ) : (
                <div>
                  <FormattedMessage
                    id="eventCard.outdoor"
                    defaultMessage="Outdoor"
                  />
                  <TiTree />
                </div>
              )}
            </span>
          </div>
        </Card.Body>
        <div className="d-inline-flex flex-row justify-content-between">
          <Card.Text>{event.tags.map((tag) => `#${tag}`)}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
export default EventCard;