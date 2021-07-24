import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventCard.css";
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


  const handleAddEventFavs = () => {
    // console.log("add/remove fav -> redux & api");
  };

  return (
    <Card className="card-stretch">
      <div>
        <div className="Container">
          <span className="float-right">
            <OverlayTrigger
              overlay={
                <Tooltip id="button-fav">
                  {isLogged ? (
                    <FormattedMessage
                      id="eventCard.overlay.fav"
                      defaultMessage="Register or Login"
                    />
                  ) : (
                    <FormattedMessage
                      id="eventCard.overlay.registerLogin"
                      defaultMessage="Favourite"
                    />
                  )}
                </Tooltip>
              }
            >
              {isLogged ? (
                <Button
                  className="ribbon"
                  // className="float-right"
                  variant="secondary"
                  onClick={handleAddEventFavs}
                  active={false} //depends fav events list user
                >
                  <RiBookmark3Line />
                </Button>
              ) : (
                <Button
                  className="ribbon"
                  // active={false}
                  variant="secondary"
                >
                  <RiBookmark3Line />
                </Button>
              )}
            </OverlayTrigger>
            <Link key={event._id} to={`/event/${event._id}`}>
              <Card.Img variant="top" src={event.photo} />
            </Link>
          </span>
        </div>
      </div>
      <Link key={event._id} to={`/event/${event._id}`}>
        <Card.Body className="card">
          <Card.Title className="text-dark">{event.title}</Card.Title>
       
          <div className="d-flex flex-row justify-content-between  time  text-gray-800 ">
            <Card.Subtitle className="fs-6 fw-bolder">
              <BsCalendar /> {moment(new Date(event.date)).format("DD-MM-YYYY")}
            </Card.Subtitle>
            <Card.Subtitle className="fs-6 fw-bolder">
              <BsClock /> {event.duration} h
            </Card.Subtitle>
          </div>
          <Card.Text className="text-description">
            {event.description}
          </Card.Text>
  
          <div className="row participant">
            <div className="col d-flex">
                    <span>
                    <i className="fas fa-users mw-75 me-2"></i>
                   
                      {event.max_places - event._id_assistants.length}
                      <FormattedMessage
                        id="eventCard.availableSeats"
                        defaultMessage="Seats"
                      />
                  </span>
            </div>
            <div className="col d-flex float-right">
                      {event.indoor ? (
                        <div>
                  <RiHome4Line />
                          <FormattedMessage
                            id="eventCard.indoor"
                            defaultMessage="Indoor"
                          />
                         
                        </div>
                      ) : (
                        <div>
                    <TiTree />
                          <FormattedMessage
                            id="eventCard.outdoor"
                            defaultMessage="Outdoor"
                          />
                          
                        </div>
                      )}
            </div>
              </div>
            <div>   
          </div>
          <div class="d-flex pt-4">
            <div class="symbol tags me-2">
              <span class="bg-light-primary">{event.tags.map((tag) => `#${tag}`)}
              </span>
             </div>
          </div>
        
         
          {/* <Card.Title style={{ display: "flex", justifyContent: "flex-end" }}>
            {event.price} €
          </Card.Title> */}
        </Card.Body>
      </Link>
    </Card>
  );
}
export default EventCard;
