import React, { useEffect } from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction, setLoadingAction, setErrorAction, resetLoadingAction } from '../../../store/actions/ui';
import { getMyEvents } from '../../../api/user';
import { Alert, Spinner } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import storage from '../../../utils/storage';
import { useIntl } from 'react-intl';
import { getUi } from '../../../store/selectors/ui';
function MyFavoritesEvents() {

	const dispatch = useDispatch();
	const intl = useIntl();
	const token = storage.get('auth');
	const { loading, error } = useSelector(getUi);


	const handleResetError = () => {
		dispatch(resetErrorAction())
	}
	return (
		<div>
			
			<UserLayout>
				<div className="row g-0 g-xl-5 g-xxl-8">
					<div className="col-xl-12">
						<Card>
							<Card.Body>

								<div class="card-body pt-4">

									<Card.Title className="align-items-center border-0">
										<div className="align-items-start flex-column">
											<h2 className="text-dark fs-4">
												Mis Favotitos
											</h2>
											<span className="text-description d-block mt-1">
												Todos los eventos que has marcado como favoritos.
											</span>
										</div>
									</Card.Title>


									{/* TODO: Recoger los eventos y crear un map para mostrar listado */}

									<div class="d-flex mb-7 pt-10">
										{/* Imagen del evento */}
										<div class="symbol symbol-60px symbol-2by3 me-4">
											<img src="https://preview.keenthemes.com/start-html-free/assets/media/stock/600x400/img-17.jpg" alt="" className="mw-100" />
										</div>

										{/* titulo de los eventos*/}
										<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">

											<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
												<a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">Cup &amp; Green</a>
												<span class="text-description fs-7 my-1">Study the highway types</span>
												<span class="text-description fs-7">Created by:
													<span class="text-info"> Figma Studio</span>
												</span>

											</div>

											{/* info de los eventos*/}
											<div class="text-end py-lg-0 py-2">
												<div class="btn btn-icon btn-bg-light btn-active-primary">
													<i class="fas fa-heart"></i>
												</div>
											</div>
										</div>
									</div>


									<div class="d-flex mb-7">
										{/* Imagen del evento */}
										<div class="symbol symbol-60px symbol-2by3 me-4">
											<img src="https://preview.keenthemes.com/start-html-free/assets/media/stock/600x400/img-10.jpg" alt="" className="mw-100" />
										</div>

										{/* titulo de los eventos*/}
										<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">

											<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
												<a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">Yellow Background</a>
												<span class="text-description fs-7 my-1">Study the highway types</span>
												<span class="text-description fs-7">Created by:
													<span class="text-info"> Figma Studio</span>
												</span>

											</div>

											{/* info de los eventos*/}
											<div class="text-end py-lg-0 py-2">
												<div class="btn btn-icon btn-bg-light btn-active-primary">
													<i class="fas fa-heart"></i>
												</div>

											</div>
										</div>
									</div>

									<div class="d-flex mb-7">
										{/* Imagen del evento */}
										<div class="symbol symbol-60px symbol-2by3 me-4">
											<img src="https://preview.keenthemes.com/start-html-free/assets/media/stock/600x400/img-9.jpg" alt="" className="mw-100" />
										</div>

										{/* titulo de los eventos*/}
										<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">

											<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
												<a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">Desserts platter</a>
												<span class="text-description fs-7 my-1">Study the highway types</span>
												<span class="text-description fs-7">Created by:
													<span class="text-info"> Figma Studio</span>
												</span>
											</div>

											{/* info de los eventos*/}
											<div class="text-end py-lg-0 py-2">
												<div class="btn btn-icon btn-bg-light btn-active-primary">
													<i class="fas fa-heart"></i>
												</div>

											</div>
										</div>
									</div>
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

export default MyFavoritesEvents
