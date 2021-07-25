
import React  from 'react';


var moment = require("moment");

function EventDetails({description, photo, title, price, date, duration, indoor, tags, max_places }) {
	
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
								<a className="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">Ruby Liam</a>
								<span className="text-description d-block mt-1">Nickname Users</span>
							</div>


							{/* Si no soy el usuario */}
							<div className="card-toolbar">
								<span className="tab-panel me-2">Editar</span>
								<span className="tab-panel">Eliminar</span>
							</div>

							{/*  Si soy el propietario 
							 <div class="card-toolbar">
									<ConfirmationButton className="me-2"
									onConfirm={onDelete} 
									>Editar</ConfirmationButton>
								
									<ConfirmationButton 
									onConfirm={onDelete} 
									>Eliminar</ConfirmationButton>

							</div>  */}


						</div>
						<div className="card-body">
							{/* Event Image */}
							
							<img src={photo}
								className="img-event"
								alt={title}
								style={{ objectFit: 'contain' }} />

							{/* Event Title */}
							<h2 className="text-dark fw-bolder pt-5 mb-10">{title} </h2>


							{/* Event Description */}
							<p className="text-description fs-6 fw-normal pt-2 mb-2"> {description}</p>

							<h5 className="card-title align-items-start pt-4 flex-column">
								<span className="fw-bolder text-dark">Details</span>
							</h5>
							{/* Event Details */}
							<div className="details-info d-flex align-items-center me-2">
								<div className="row">
									<div className="col-sm-auto d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i className="fas fa-coins mw-75"></i>
											</span>
										</div>

										<div className="me-5">
											<span className="fs-6 text-gray-800 text-hover-primary fw-bolder">Precio</span>
											<div className="fs-7 text-muted mt-1">{price} €</div>
										</div>
									</div>
									<div className="col-sm-2 d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i className="fas fa-users mw-75"></i>
											</span>
										</div>

										<div className="me-5">
											<span className="fs-6 text-gray-800 text-hover-primary fw-bolder">Plazas</span>
											<div className="fs-7 text-muted  mt-1">{max_places}</div>
										</div>
									</div>

									<div className="col-sm-auto d-flex">
										<div className="symbol symbol-45px me-2">
											<span className="symbol-label bg-light align-items-center">
												<i className="fas fa-calendar-day mw-75"></i>
											</span>
										</div>

										<div className="me-5">
											<span className="fs-6 text-gray-800 text-hover-primary fw-bolder">Fecha</span>
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
											<span className="fs-6 text-gray-800 text-hover-primary fw-bolder">Duración</span>
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
											<span href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Espacio</span>
											<div className="fs-7 text-muted  mt-1">{ indoor === true ? 'Interior' : 'Exterior'} </div>
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
								<div className="col"></div>
								<div className="col d-flex icons-footer my-lg-0 my-2 pe-3 pt-4">
									<span className="btn btn-icon btn-sm btn-active-color-primary">

										<i className="fas fa-map-marker-alt fs-6"></i>
									</span>

									<span className="btn btn-icon btn-sm btn-active-color-primary">
										<i className="fas fa-heart"></i>
									</span>

								</div>
							</div>

						</div>
					</div>
				</div>
		</div>
		)
	}


export default EventDetails