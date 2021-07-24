

import React, {PropTypes } from 'react';
import { ConfirmationButton } from '../../shared';



function EventDetails({description, photo, title, price, date, duration, indoor, tags, max_places, }) {
	
		return (
		<div>
				<div className="Container">
					<div class="card card-flush pt-12">
						<div class="card-header">
							{/* OwnerAvatar */}
							<div class="symbol symbol-45px me-5">
								<span class="symbol-label bg-light align-items-end">
									<img alt="Autor" src="https://preview.keenthemes.com/start-html-free/assets/media/svg/avatars/047-girl-25.svg" class="mh-40px" />
								</span>
							</div>

							{/* OwnerName & Date */}
							<div class="d-flex flex-column flex-grow-1">
								<a class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">Ruby Liam</a>
							</div>


							<div class="card-toolbar">

								<ConfirmationButton
								
									className="btn btn-light-danger"
								>Eliminar</ConfirmationButton>
							</div>
						</div>
						<div class="card-body">
							{/* Event Image */}
							<img alt="Img Event" className="img-event" src="https://preview.keenthemes.com/start-html-free/assets/media/stock/900x600/3.jpg" />
							<img src={photo}
								alt={title}
								style={{ objectFit: 'contain' }} />

							{/* Event Title */}
							<h2 class="text-dark fw-bolder pt-5 mb-10">{title} Visita el Dragon Khan</h2>


							{/* Event Description */}
							<p class="text-description fs-6 fw-normal pt-2 mb-2"> {description} "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

							<h5 className="card-title align-items-start pt-4 flex-column">
								<span className="fw-bolder text-dark">Details</span>
							</h5>
							{/* Event Details */}
							<div className="details-info d-flex align-items-center me-2">

								<div className="symbol symbol-45px">
									<span className="symbol-label bg-light align-items-center">
										<i className="fas fa-coins mw-75"></i>
									</span>
								</div>

								<div className="me-5">
									<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Precio</a>
									<div className="fs-7 text-muted fw-bold mt-1">{price}83.00 €</div>
								</div>


								<div className="symbol symbol-45px">
									<span className="symbol-label bg-light align-items-center">
										<i className="fas fa-users mw-75"></i>
									</span>
								</div>

								<div className="me-5">
									<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Nº Plazas</a>
									<div className="fs-7 text-muted fw-bold mt-1">{max_places} max_places</div>
								</div>


								<div className="symbol symbol-45px">
									<span className="symbol-label bg-light align-items-center">
										<i className="fas fa-calendar-day mw-75"></i>
									</span>
								</div>

								<div className="me-5">
									<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Fecha</a>
									<div className="fs-7 text-muted fw-bold mt-1">{date} 04/03/2021</div>
								</div>


								<div className="symbol symbol-45px">
									<span className="symbol-label bg-light align-items-center">
										<i class="fas fa-hourglass-half mw-75"></i>
									</span>
								</div>

								<div className="me-5">
									<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Duración</a>
									<div className="fs-7 text-muted fw-bold mt-1">{duration}1 Hora</div>
								</div>


								<div className="symbol symbol-45px">
									<span className="symbol-label bg-light align-items-center">
										<i className="fas fa-home mw-75"></i>

									</span>
								</div>

								<div className="me-5">
									<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Espacio</a>
									<div className="fs-7 text-muted fw-bold mt-1">{indoor}</div>
								</div>


							</div>

							<div className="separator mt-2 pt-2"></div>
							<div className="d-flex ">
								<div className="col d-flex flex-grow-1 my-lg-0 my-2 pe-3 pt-4">

									<div className="symbol tags me-2">

										<span className="bg-light-primary">
											{tags}
										</span>
									</div>
									<div className="symbol tags me-2">
										<span className="bg-light-primary">
											Sport
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