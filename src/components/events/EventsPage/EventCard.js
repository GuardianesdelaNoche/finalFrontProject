import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCalendar, BsClock } from "react-icons/bs";
import { RiHome4Line } from "react-icons/ri";
import { TiTree } from "react-icons/ti";
import { FormattedMessage } from "react-intl";
import { GoLocation } from "react-icons/go";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { HiUserGroup } from 'react-icons/hi';

import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { getIsLogged } from "../../../store/selectors/auth";

var moment = require("moment");

function EventCard(event) {
  // const state = useSelector(getIsEventFav(event._id));
  const isLogged = useSelector(getIsLogged);

  return (
    <Card className="card-stretch">
      <div>
        <div className="Container">
          <span className="float-right">
            <OverlayTrigger
              overlay={
                <Tooltip id="button-fav">
                  {!isLogged && (
                    <FormattedMessage
                      id="eventCard.overlay.registerLogin"
                      defaultMessage="Register or Login"
                    />
                  )}
                  {isLogged && event.isFavorite && (
                    <FormattedMessage
                      id="eventCard.overlay.fav"
                      defaultMessage="Favourite"
                    />
                  )}
                  {isLogged && !event.isFavorite && 
                  (
                    <FormattedMessage
                    id="eventCard.overlay.nofav"
                    defaultMessage="No Favourite"
                  />
                  )}
                </Tooltip>
              }
            >
              {isLogged && event.isFavorite ? (


               <div className="ribbon ribbon-top ribbon-vertical">
                    <div className="ribbon-label bg-success">
                      <MdFavorite 
                        className="text-white"
                      />
                    </div>
              </div>

              ) : (
                 <div></div>
              )}
            </OverlayTrigger>
            <Link
              key={event._id}
              to={`/event/${event._id}/${event.title.replace(/\s+/g, "-")}`}
            >
              <Card.Img variant="top" className="home" src={event.photo} />
            </Link>
          </span>
        </div>
      </div>
      <Link
        key={event._id}
        to={`/event/${event._id}/${event.title.replace(/\s+/g, "-")}`}
      >
        <Card.Body className="card">
          <Card.Title className="text-dark">{event.title}</Card.Title>

          <div className="d-flex flex-row justify-content-between  time  text-gray-800 ">
            <Card.Subtitle className="fs-6 fw-bolder">
              <BsCalendar className="me-2" />{" "}
              {moment(new Date(event.date)).format("DD-MM-YYYY")}
            </Card.Subtitle>
            <Card.Subtitle className="fs-6 fw-bolder">
              <BsClock className="me-2" /> {event.duration} h
            </Card.Subtitle>
          </div>
          <div className="d-flex flex-row justify-content-between  time  text-gray-800 ">
            <Card.Subtitle className="fs-6 fw-bolder">
              <GoLocation className="me-2" /> {event.city}
            </Card.Subtitle>
          </div>
          <Card.Text className="text-description">
            {event.description}
          </Card.Text>

          <div className="row participant pt-4">
            <div className="col d-flex">
              <span>
                <span className="me-2">
                  <HiUserGroup />
                </span>

                {event.available_places}
                <FormattedMessage
                  id="eventCard.availableSeats"
                  defaultMessage="Seats"
                />
              </span>
            </div>
            <div className="col d-flex float-right">
              {event.indoor ? (
                <div>
                  <span className="me-2">
                    <RiHome4Line />
                  </span>
                  <FormattedMessage
                    id="eventCard.indoor"
                    defaultMessage="Indoor"
                  />
                </div>
              ) : (
                <div>
                  <span className="me-2">
                    <TiTree />
                  </span>
                  <FormattedMessage
                    id="eventCard.outdoor"
                    defaultMessage="Outdoor"
                  />
                </div>
              )}
            </div>
          </div>
          <div></div>

          <div className="separator mt-2 pt-2"></div>

          <div className="row">
            <div className="col d-flex pt-4 me-2">
              <div className="symbol tags me-2">
                <span className="bg-light-primary">
                  {event.tags.map((tag) => `#${tag}`)}
                </span>
              </div>
            </div>
            <div className="col d-flex pt-4 float-right">
              <div className="bg-light rounded price text-gray-600 py-2 px-3">
                {event.price} ???
              </div>
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}
export default EventCard;
