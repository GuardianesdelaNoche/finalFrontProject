
import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import { ConfirmationButton } from '../../shared';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useIntl } from 'react-intl';





var moment = require("moment");

function EventDetails({ description, photo, title, price, date, duration, indoor, tags, max_places, created_date, isOwner, isFavorite, assistants_count, country, detailOwn, address, city, location, onDelete}) {
		const intl = useIntl();

		return (
		<div>
				<div className="container details pt-14">
					<div className="card card-flush pt-12">
						<div className="card-header">
							{/* OwnerAvatar */}
							<div className="symbol symbol-45px me-4">
								<span className="symbol-label bg-light align-items-end">
									<img alt="Autor" src="https://preview.keenthemes.com/start-html-free/assets/media/svg/avatars/047-girl-25.svg" className="mh-40px" />
								</span>
							</div>

							{/* OwnerName & Date */}
							<div className="d-flex flex-column flex-grow-1">
								{/* TODO Add username Own  */}
								<a className="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">{/* {detailOwn.username} */}</a>
								<span className="text-description d-block mt-1">
									{moment(new Date(created_date)).format("DD-MM-YYYY")}
								</span>
							</div>

							
							{isOwner ? 
								(<div className="card-toolbar">
									{/* Botón con color */}
									<ConfirmationButton 
										title={intl.formatMessage({ id: 'popups.remove.title' })}
										confirmation={intl.formatMessage({ id: 'popups.remove.mesage' })}
										onConfirm={onDelete}
									>
										<FormattedMessage
											id="details.event.remove"
											defaultMessage="Remove"
										/>
									</ConfirmationButton>
								</div>)
								: 
								(<div className="card-toolbar">
									
									<span className="tab-panel">
										<FormattedMessage
											id="details.event.remove"
											defaultMessage="Remove"
										/>
									</span>
								</div>)
 							}

						</div>
						<div className="card-body">
							{/* Event Image */}
							
							<img src={photo}
								className="img-event"
								alt={title}
								style={{ objectFit: 'cover' }} />

							{/* Event Title */}
							<h2 className="text-dark fw-bolder pt-5 mb-10">{title} </h2>


							{/* Event Description */}
							<p className="text-description fs-6 fw-normal pt-2 mb-2"> {description}</p>

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
									<div className="col-sm-auto d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i class="fas fa-map-marker-alt"></i>
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

									<div className="col-sm-auto d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i className="fas fa-calendar-day mw-75"></i>
											</span>
										</div>

										<div className="me-5">
											<span className="fs-6 text-gray-800 text-hover-primary fw-bolder">
												<FormattedMessage
													id="details.event.date"
													defaultMessage="Date"
												/>
											</span>
											<div className="fs-7 text-muted mt-1">{moment(new Date(date)).format("DD-MM-YYYY")}</div>
										</div>
									</div>
									<div className="col-sm-auto d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i className="fas fa-hourglass-half mw-75"></i>
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
									<div className="col-sm-auto d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i className="fas fa-home mw-75"></i>
											</span>
										</div>

										<div className="me-5">
											<span  className="fs-6 text-gray-800 text-hover-primary fw-bolder">
												<FormattedMessage
													id="details.event.space"
													defaultMessage="Space"
												/>
											</span>
											<div className="fs-7 text-muted  mt-1">
												{ indoor ? (

													<FormattedMessage
														id="details.event.indoor"
														defaultMessage="Indoor"
													/> 
												):(
													
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
							<div className="d-flex ">
								<div className="col d-flex flex-grow-1 my-lg-0 my-2 pe-3 pt-4">
									<div className="symbol tags me-2">
										<span className="bg-light-primary">
											{tags.map((tag) => `#${tag}`)}
										</span>
									</div>
									
								</div>
								<div className="col d-flex">
								
									
								</div>
								<div className="col d-flex icons-footer my-lg-0 my-2 pe-3 pt-4">
									<p className="mt-1 text-description mr-1">
										Update:   
									</p>
									<span className="text-danger mt-1 mr-2">
										Quedan {assistants_count} Plazas!
									</span>
									
									
									

										{['top'].map((placement) => (
											<OverlayTrigger
												key={placement}
												placement={placement}
												overlay={
													<Tooltip id={`tooltip-${placement}`}>
														{location.coordinates.map((cord) =><div>{`${cord}`}</div>)}
													</Tooltip>
												}
											>
												<span className="btn btn-icon">
												<i className="fas fa-map-marker-alt fs-6"></i>
												</span>
											</OverlayTrigger>
										))}


								

									<span className="btn btn-icon">
										{isFavorite === true ? <i className="fas fa-heart favorite"></i> : <i className="fas fa-heart no-favorite"></i>  }
									</span>

								</div>
							</div>

						</div>

					</div>
				</div>
				 

		</div>
		)
	}

EventDetails.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	max_places: PropTypes.number,
	indoor: PropTypes.bool,
	tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	photo: PropTypes.string, 
};



export default EventDetails