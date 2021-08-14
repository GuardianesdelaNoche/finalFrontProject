import React from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui';
import { Alert, Spinner } from 'react-bootstrap';
import { eventsAssistantLoadAction } from '../../../store/actions/events';
import { getEventsAssistantEventsLoaded } from '../../../store/selectors/events';
import { FormattedMessage } from 'react-intl';


function MySuscribesEvents() {

	const dispatch = useDispatch();
	const { loading, error } = useSelector(getUi);
	const eventsAssistant = useSelector(getEventsAssistantEventsLoaded);
	console.log(eventsAssistant);
	React.useEffect(() => {
		dispatch(eventsAssistantLoadAction());
	},[dispatch]);

	const handleResetError = () => {
		dispatch(resetErrorAction())
	}

	return (
		<div>
			{loading && <Spinner animation="border" />}
			<UserLayout>
				<div className="row g-0 g-xl-5 g-xxl-8">
					<div className="col-xl-12">
						<Card>
							<Card.Body>

								<div className="card-body pt-4">

									<Card.Title className="align-items-center border-0">
										<div className="align-items-start flex-column">
											<h2 className="text-dark fs-4">

												<FormattedMessage
													id="user.panel.event.suscribed.title"
													defaultMessage="My Subscribed Events"
												/>
											</h2>
											<span className="text-description d-block mt-1">
												<FormattedMessage
													id="user.panel.event.suscribed.description"
													defaultMessage="All events I will attend"
												/>
											</span>
										</div>
									</Card.Title>


									{/* TODO: Recoger los eventos y crear un map para mostrar listado */}
								{eventsAssistant.length ? eventsAssistant.map(element => (
									<div className="d-flex mb-7 pt-10" key={element._id}>
										{/* Imagen del evento */}
										<div className="symbol symbol-70px symbol-2by3 me-4">
											<img src={element.photo} alt="" className="mw-100" />
										</div>

										{/* titulo de los eventos*/}
										<div className="d-flex align-items-center flex-grow-1 mt-n2 mt-lg-n1">

											<div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
												<a href="#something" className="text-gray-800 fw-bolder text-hover-primary fs-6">{element.title}</a>
												<span className="text-description fs-7 my-1">{element.description.substring(0, 150)}&nbsp; [...]</span>
												<span className="text-description fs-7">
													<FormattedMessage
														id="user.panel.event.suscribed.createby"
														defaultMessage="Created by:"
													/>
													<span className="text-info"> {element.detailOwn.username}</span>
												</span>
												
											</div>

											{/* info de los eventos*/}
											<div className="text-end py-lg-0 py-2">
												<div className="btn btn-icon btn-bg-light btn-active-primary">
													<i class="far fa-edit"></i>
												</div>
											</div>
										</div>
									</div>)):<p>
											<FormattedMessage
												id="user.panel.event.suscribed.error"
												defaultMessage="You have not yet subscribed to any event"
											/>
										</p>}
								</div>


								{error && (
									<Alert onClick={handleResetError} variant="danger">
										<p className="mb-0">
											{error.errors[0].msg}
										</p>
									</Alert>
								)}


								{error && (
									<Alert onClick={handleResetError} variant="danger">
										<p className="mb-0">
											{error.errors[0].msg}
										</p>
									</Alert>
								)}

							</Card.Body>

						</Card>
					</div>

				</div>



			</UserLayout>
		</div>
	)
}


export default MySuscribesEvents
