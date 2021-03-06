import React from "react";
import T from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import { FormattedMessage } from "react-intl";

const isExact = (match) => match?.isExact;

function EventsCardsEmptyList({ eventsCount }) {
  return (
    // <div>
    //   <p>No adverts here!</p>
    //   {advertsCount > 0 ? (
    //     'Refine your search'
    //   ) : (
    //     <Link to="/adverts/new">Create the first advert</Link>
    //   )}
    // </div>

    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          <FormattedMessage
            id="eventscardsemptylist.noevents"
            defaultMessage="No events available"
          />
        </Card.Text>
        <Card.Title>
          <FormattedMessage
            id="eventscardsemptylist.publishevent"
            defaultMessage="Publish your event"
          />
        </Card.Title>
        <NavLink
          to="/events/new"
          className="menu-item justify-content-center primary"
          isActive={isExact}
        >
          Nuevo evento
        </NavLink>
      </Card.Body>
    </Card>
  );
}

EventsCardsEmptyList.propTypes = {
  eventsCount: T.number.isRequired,
};

export default EventsCardsEmptyList;
