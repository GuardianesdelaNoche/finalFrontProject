
import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Button, ConfirmationButton } from '../../shared';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useIntl } from 'react-intl';
import { getIsLogged } from "../../../store/selectors/auth";
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

function EventDetails({ description,
	photo, 
	title, 
	date, 
	duration, 
	indoor, 
	tags, 
	created_date,
	assistants_count, 
	detailOwn,
	isOwner,
	isFavorite,
	isAssistant,
	address, 
	city, 
	location,  
	onDelete
	})
	 {
		const intl = useIntl();
		const isLogged = useSelector(getIsLogged);
		const shareUrl = 'https://www.google.com' // TODO: Coger la URL pathname para compartir en RRSS
		return (
		<div>
				<div className="container details pt-14">
					<div className="card card-flush pt-12">
						<div className="card-header">
							{/* TODO: Testing detailOwn image and username */}
							<div className="symbol symbol-45px me-4">
								<span className="symbol-label bg-light align-items-end">
									<img alt="Autor" src="https://preview.keenthemes.com/start-html-free/assets/media/svg/avatars/047-girl-25.svg" className="mh-40px" />
									{/* detailOwn.image */}
								</span>
							</div>

							{/* OwnerName & Date */}
							<div className="d-flex flex-column flex-grow-1">
								<a className="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">{/* detailOwn.username */}</a>
								<span className="text-description d-block mt-1">
									{moment(new Date(created_date)).format("DD-MM-YYYY")}
								</span>
							</div>
		
							 {/* Reservas de Plazas */}
							{isLogged && isAssistant ? (
									<div className="card-toolbar">
										<Button variant="secundary">
											<FormattedMessage
												id="details.event.reserved.place"
											defaultMessage="Reserved Place"
											/>
										</Button>
									</div>
									) : (isLogged && isAssistant === false &&  assistants_count > 0 ? (
												<div className="card-toolbar mr-2">
													<Button variant="primary">
														{/* //TODO: Añadir funcionalidad apuntando al endpoint de reservar */}
														Reservar Plaza
													</Button>
												</div>)
											: (isLogged && isAssistant === false && assistants_count <= 0 ? (
												<div className="card-toolbar">
													<span className="tab-panel">
														<FormattedMessage
															id="details.event.capacity"
															defaultMessage="Full capacity"
														/>
													</span>
												</div>
												)
												: (
													<div className="card-toolbar">
														{['top'].map((placement) => (
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
																<span className="tab-panel">
																	<FormattedMessage
																		id="details.event.reserve.place"
																		defaultMessage="Reserve a place"
																	/>
																</span>
															</OverlayTrigger>
														))}
													</div>
												)	
											)
									)}

							{isOwner  ?
								(<div className="card-toolbar">
									{/* Botón eliminar si eres propietario */}
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
								: ('')
							}

						</div>

						<div className="card-body">
							{/* Event Image */}

							{/* TODO: Testing Placeholder*/}
							<img src={!photo ? '../images/photoEvent/placeholder.png' : photo }
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
												<i className="fas fa-map-marker-alt"></i>
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
							
							<div className="d-flex">
								<div className="col d-flex flex-grow-1 my-lg-0 my-2 pe-3 pt-3">
									<div className="symbol tags me-2">
										<span className="bg-light-primary" >		
											{tags.map((tags, index) =>
												<span key={index}>
													#{tags}
												</span>
											)}
										</span>
									</div>
									
								</div>
								

								<div className="col d-flex icons-footer my-lg-0 my-2 pe-3 pt-3">
									<p className="mt-1 text-description mr-1 mt-2">
										
										<FormattedMessage
											id="details.event.assistand"
											defaultMessage="Update:"
										/>
										   
									</p>
									<div className="text-danger mt-2 mr-2">
										<span className="mr-1">
										{assistants_count} 
										</span>
										<FormattedMessage
											id="details.event.places.available"
											defaultMessage="Places available:"
										/>
									</div>


									{['top'].map((placement) => (
										<OverlayTrigger
											key={placement}
											placement={placement}
											overlay={
												<Tooltip id={`tooltip-${placement}`}>
													{location.coordinates.map((cord, index) =>
														<span key={index}>
															{cord}
														</span>
													)}
												</Tooltip>
											}
										>
											<span className="btn btn-icon">
												<i className="fas fa-map-marker-alt fs-6"></i>
											</span>
										</OverlayTrigger>
									))}

									{/* TODO: Añadir funcionalidad Favoritos */}
									<span className="btn btn-icon">
										{isFavorite === true ? <i className="fas fa-heart favorite"></i> : <i className="fas fa-heart no-favorite"></i>}
									</span>


									<div className="text-end pe-0 mt-1">
											<FacebookShareButton
												className="mr-1"
												url={shareUrl}
												quote={title}
											>
												<FacebookIcon className="iconRRSS"size={30} />
											</FacebookShareButton>
											<TwitterShareButton
											className="mr-1"
												url={shareUrl}
												title={title}
											>
												<TwitterIcon className="iconRRSS" size={30}  />
											</TwitterShareButton>

											<WhatsappShareButton
												className="mr-1"
												url={shareUrl}
												title={title}
											>
												<WhatsappIcon className="iconRRSS" size={30} />
											</WhatsappShareButton>

											<EmailShareButton
												url={shareUrl}
												subject={title}
											>
												<EmailIcon className="iconRRSS" size={30}  />
											</EmailShareButton>
									</div>			

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


export default EventDetails