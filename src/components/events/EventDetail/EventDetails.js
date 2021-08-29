import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
/* icons */
import { GoLocation } from "react-icons/go";
import { BsCalendar, BsClock } from "react-icons/bs";
import { RiHome4Line } from "react-icons/ri";
import { TiTree } from "react-icons/ti";
import { ImLocation2 } from "react-icons/im";
import { MdFavorite } from "react-icons/md";

import { resetErrorAction, setErrorAction } from "../../../store/actions/ui";
import { Button, ConfirmationButton } from "../../shared";

import { getIsLogged } from "../../../store/selectors/auth";
import { addFavorite, removeFavorite } from "../../../api/favorite";
import { addEventAssist, removeEventAssist } from "../../../api/assist";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./eventDetail.css";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

var moment = require("moment");
function EventDetails({
  description,
  photo,
  title,
  date,
  duration,
  indoor,
  tags,
  created_date,
  available_places,
  detailOwn,
  isOwner,
  isFavorite,
  isAssistant,
  address,
  city,
  location,
  onDelete,
  price,
  _id,
}) {
  const intl = useIntl();
  const isLogged = useSelector(getIsLogged);
  const BaseURL = "https://4events.net";

  const history = useHistory();
  const urlpath = useLocation();

  const shareUrl = BaseURL + urlpath.pathname;

  const dispatch = useDispatch();
  const [isFavActive, setFavActive] = useState(isFavorite);
  const [isAssistantActive, setAssistantActive] = useState(isAssistant);

  const swal = withReactContent(Swal);

  //Add & Remove Assistans
  const handleAddAssistant = async (token) => {
    try {
      swal
        .fire({
          title: intl.formatMessage({ id: "sweetalert2.title.assist.event" }),
          text: intl.formatMessage({ id: "sweetalert2.text.assist.event" }),
          icon: "warning",
          confirmButtonText: intl.formatMessage({
            id: "sweetalert2.yes.assist.event",
          }),
          confirmButtonColor: "#20d489",
          denyButtonText: intl.formatMessage({
            id: "sweetalert2.no.assist.event",
          }),
          showDenyButton: true,
        })
        .then(async (response) => {
          if (response.isConfirmed) {
            swal.fire({
              text: intl.formatMessage({
                id: "sweetalert2.confirmation.message.assist.event",
              }),
              icon: "success",
              showConfirmButton: false,
            });
            await addEventAssist(token, _id);
            setAssistantActive(!isAssistantActive);
            setTimeout(function () {
              swal.close();
              history.goBack();
            }, 1500);
          }
        });
    } catch (error) {
      setErrorAction(error);
    }
  };

  const handleRemoveAssistant = async (token) => {
    try {
      swal
        .fire({
          title: intl.formatMessage({
            id: "sweetalert2.title.delete.assist.event",
          }),
          text: intl.formatMessage({
            id: "sweetalert2.text.delete.assist.event",
          }),
          icon: "warning",
          confirmButtonText: intl.formatMessage({
            id: "sweetalert2.yes.delete.assist.event",
          }),
          confirmButtonColor: "green",
          denyButtonText: intl.formatMessage({
            id: "sweetalert2.no.delete.assist.event",
          }),
          showDenyButton: true,
        })
        .then(async (response) => {
          if (response.isConfirmed) {
            swal.fire({
              text: intl.formatMessage({
                id: "sweetalert2.confirmation.message.delete.assist.event",
              }),
              icon: "success",
              showConfirmButton: false,
            });
            dispatch(resetErrorAction());
            await removeEventAssist(token, _id);
            setAssistantActive(!isAssistantActive);
            setTimeout(function () {
              swal.close();
              history.goBack();
            }, 1500);
          }
        });
    } catch (error) {
      setErrorAction(error);
    }
  };

  //Add & Remove Favorites
  const handleAddFav = async (token) => {
    try {
      await addFavorite(token, _id);
      setFavActive(!isFavActive);
    } catch (error) {
      setErrorAction(error);
    }
  };

  const handleRemoveFav = async (token) => {
    try {
      await removeFavorite(token, _id);
      setFavActive(!isFavActive);
    } catch (error) {
      setErrorAction(error);
    }
  };

  return (
    <div>
      <div className="container details pt-14">
        <div className="card card-flush pt-12">
          <div className="card-header">
            <div className="symbol symbol-45px me-4">
              <span className="symbol-label bg-light align-items-end">
                <img
                  alt="Autor"
                  src={detailOwn.image}
                  width="60"
                  className="mh-40px"
                />
              </span>
            </div>

            {/* OwnerName & Date */}
            <div className="d-flex flex-column flex-grow-1">
              <a className="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">
                {detailOwn.nickname}
              </a>
              <span className="text-description d-block mt-1">
                {moment(new Date(created_date)).format("DD-MM-YYYY")}
              </span>
            </div>

            <div className="d-flex mb-button">
              {/* Reservation of Places */}
              {!isOwner &&
                (isLogged && isAssistant ? (
                  <div className="card-toolbar mr-2">
                    <Button variant="secundary" onClick={handleRemoveAssistant}>
                      <FormattedMessage
                        id="details.event.reserved.place"
                        defaultMessage="Reserved Place"
                      />
                    </Button>
                  </div>
                ) : isLogged &&
                  isAssistant === false &&
                  available_places > 0 ? (
                  <div className="card-toolbar mr-2">
                    <Button variant="primary" onClick={handleAddAssistant}>
                      <FormattedMessage
                        id="details.event.reserve.place"
                        defaultMessage="Reserve a place"
                      />
                    </Button>
                  </div>
                ) : isLogged &&
                  isAssistant === false &&
                  available_places <= 0 ? (
                  <div className="card-toolbar mr-2">
                    <button className="tab-panel">
                      <FormattedMessage
                        id="details.event.capacity"
                        defaultMessage="Full capacity"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="card-toolbar">
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            <FormattedMessage
                              id="eventCard.overlay.registerLogin"
                              defaultMessage="Favourite"
                            />
                          </Tooltip>
                        }
                      >
                        <span className="tab-panel mr-2">
                          <FormattedMessage
                            id="details.event.reserve.place"
                            defaultMessage="Reserve a place"
                          />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </div>
                ))}

              {isLogged && isOwner ? (
                <div className="card-toolbar">
                  <Link
                    variant="secondary"
                    className="btn btn-secondary  mr-2"
                    to={`/event/edit/${_id}`}
                  >
                    <FormattedMessage
                      id="details.event.edit"
                      defaultMessage="Edit"
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}

              {isOwner ? (
                <div className="card-toolbar">
                  {/* Delete button if you are an owner */}

                  <Button onClick={onDelete} className="btn btn-remove">
                    <FormattedMessage
                      id="details.event.remove"
                      defaultMessage="Remove"
                    />
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="card card-body">
            {/* Event Image */}
            <img
              src={!photo ? "../images/photoEvent/placeholder.png" : photo}
              className="img-event"
              alt={title}
              style={{ objectFit: "cover" }}
            />

            {/* Event Title */}
            <h2 className="text-dark fw-bolder pt-5 mb-10">{title} </h2>

            {/* Event Description */}
            <p className="text-description fs-6 fw-normal pt-2 mb-2">
              {" "}
              {description}
            </p>

            <h5 className="card-title align-items-start pt-4 flex-column">
              <span className="fw-bolder text-dark">
                <FormattedMessage
                  id="details.event.subtitle"
                  defaultMessage="Details"
                />
              </span>
            </h5>

            {/* Event Details */}
            <div className="details-info d-flex align-items-center me-2">
              <div className="row">
                <div className="col-sm-auto d-flex mb-mb-2">
                  <div className="symbol symbol-45px me-2">
                    <span className="symbol-label bg-light align-items-center">
                      <GoLocation />
                    </span>
                  </div>

                  <div className="me-5">
                    <span className="fs-6 text-gray-800 text-hover-primary fw-bolder">
                      <FormattedMessage
                        id="details.event.location.name"
                        defaultMessage="Location"
                      />
                    </span>
                    <div className="fs-7 text-muted mt-1">
                      {address}
                      <p>{city}</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm d-flex mb-mb-2">
                  <div className="symbol symbol-45px me-2">
                    <span className="symbol-label bg-light align-items-center">
                      <BsCalendar />
                    </span>
                  </div>

                  <div className="me-5">
                    <span className="fs-6 text-gray-800 text-hover-primary fw-bolder">
                      <FormattedMessage
                        id="details.event.date"
                        defaultMessage="Date"
                      />
                    </span>
                    <div className="fs-7 text-muted mt-1">
                      {moment(new Date(date)).format("DD-MM-YYYY")}
                    </div>
                  </div>
                </div>
                <div className="col-sm d-flex mb-mb-2">
                  <div className="symbol symbol-45px me-2">
                    <span className="symbol-label bg-light align-items-center">
                      <BsClock />
                    </span>
                  </div>

                  <div className="me-5">
                    <span className="fs-6 text-gray-800 text-hover-primary fw-bolder">
                      <FormattedMessage
                        id="details.event.duration"
                        defaultMessage="Duration"
                      />
                    </span>
                    <div className="fs-7 text-muted  mt-1">{duration} H</div>
                  </div>
                </div>
                <div className="col-sm d-flex mb-mb-2">
                  <div className="symbol symbol-45px me-2">
                    <span className="symbol-label bg-light align-items-center">
                      {indoor ? <RiHome4Line /> : <TiTree />}
                    </span>
                  </div>

                  <div className="me-5">
                    <span className="fs-6 text-gray-800 text-hover-primary fw-bolder">
                      <FormattedMessage
                        id="details.event.space"
                        defaultMessage="Space"
                      />
                    </span>
                    <div className="fs-7 text-muted  mt-1">
                      {indoor ? (
                        <FormattedMessage
                          id="details.event.indoor"
                          defaultMessage="Indoor"
                        />
                      ) : (
                        <FormattedMessage
                          id="details.event.outdoor"
                          defaultMessage="Outdoor"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator mt-2 pt-2"></div>

            <div className="d-flex icon-responsive">
              <div className="col-sm-4 d-flex my-lg-0 my-2 pe-3 pt-3">
                <div className="symbol tags me-2">
                  <span className="bg-light-primary">
                    {tags.map((tags, index) => (
                      <span key={index}>#{tags}</span>
                    ))}
                  </span>
                </div>
              </div>

              {isLogged ? (
                <div className="col d-flex icons-footer icon-responsive my-lg-0 my-2 pe-3 pt-3">
                  <p className="mt-1 text-description mr-1 mt-2 update">
                    <FormattedMessage
                      id="details.event.assistand"
                      defaultMessage="Update:"
                    />
                  </p>
                  <div className="text-danger mt-2 mr-2">
                    <span className="mr-1">{available_places}</span>
                    <FormattedMessage
                      id="details.event.places.available"
                      defaultMessage="Places available:"
                    />
                  </div>
                  <div>
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            {location.coordinates.map((cord, index) => (
                              <span key={index}>{cord}</span>
                            ))}
                          </Tooltip>
                        }
                      >
                        <span className="btn btn-icon">
                          <ImLocation2 />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <span className="btn btn-icon">
                    {isFavorite === true || isFavActive ? (
                      <MdFavorite
                        className="fas fa-heart favorite"
                        onClick={handleRemoveFav}
                      />
                    ) : (
                      <MdFavorite
                        className="fas fa-heart no-favorite"
                        onClick={handleAddFav}
                      />
                    )}
                  </span>

                  <div className="text-end pe-0 mt-1 rrss">
                    <FacebookShareButton
                      className="mr-1"
                      url={shareUrl}
                      quote={title}
                    >
                      <FacebookIcon className="iconRRSS" size={30} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      className="mr-1"
                      url={shareUrl}
                      title={title}
                    >
                      <TwitterIcon className="iconRRSS" size={30} />
                    </TwitterShareButton>

                    <WhatsappShareButton
                      className="mr-1"
                      url={shareUrl}
                      title={title}
                    >
                      <WhatsappIcon className="iconRRSS" size={30} />
                    </WhatsappShareButton>

                    <EmailShareButton url={shareUrl} subject={title}>
                      <EmailIcon className="iconRRSS" size={30} />
                    </EmailShareButton>
                  </div>
                </div>
              ) : (
                <div className="col-sm-8 d-flex pt-3">
                  <div className="col d-flex float-right">
                    <div className="text-danger mt-2 mr-2">
                      <span className="mr-1">{available_places}</span>
                      <FormattedMessage
                        id="details.event.places.available"
                        defaultMessage="Places available:"
                      />
                    </div>

                    <div className="bg-light rounded text-gray-600 py-2 px-3">
                      {price} €
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  created_date: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  max_places: PropTypes.number,
  assistants_count: PropTypes.number,
  address: PropTypes.string,
  city: PropTypes.string,
  indoor: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  photo: PropTypes.string,
};

export default EventDetails;
