import React from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { authLoginSuccess } from '../../../store/actions/auth';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import RegisterForm from './UserdashboardForm';
import storage from '../../../utils/storage';
import { setUserData } from '../../../api/user';
import { SuccessMessage } from '../../shared/elements/formElements';
import { useIntl } from 'react-intl';
import { getUserData } from '../../../store/selectors/auth';

import { getEventsOwnTotal, getEventsFavoriteTotal, getEventsAssistantTotal } from '../../../store/selectors/events';
import { eventsFavoriteLoadAction, eventsOwnLoadAction, eventsAssistantLoadAction } from '../../../store/actions/events';


import  Spinner  from '../../shared/Spinner';


function UserDashboard({history}) {
	const dispatch = useDispatch();
	const intl = useIntl();    
    const token = storage.get('auth');     
    const { loading, error } = useSelector(getUi);
	const userData = useSelector(getUserData);
	const [dataSaved, setDataSaved] = React.useState(false);


	const eventsOwnTotal = useSelector(getEventsOwnTotal);
	const eventsFavoriteTotal = useSelector(getEventsFavoriteTotal);
	const eventsAssistantTotal = useSelector(getEventsAssistantTotal);
	
	React.useEffect(() => {
		dispatch(eventsFavoriteLoadAction());
		dispatch(eventsAssistantLoadAction());
		dispatch(eventsOwnLoadAction());
	},[dispatch]);


	if (!userData){
		history.push("/login");
	}
    const handleSubmit = async (registerData)=>{
        try {
            dispatch(setLoadingAction);
			dispatch(resetErrorAction);
            const userData = await setUserData(token.token, registerData);
			dispatch(authLoginSuccess(userData.result))

			setDataSaved(true);
        } catch (error) {
            dispatch(setErrorAction(error));
        } finally 
        {
            dispatch(resetLoadingAction);
        }
    }

    const handleResetError = ()=>{
        dispatch(resetErrorAction())
    }

	return (
		<div>
			 {loading && <Spinner animation="border" />}
			<UserLayout>
		
			{ 	<div className="row g-0 g-xl-5 g-xxl-8 pb-12">
					<div className="col-xl-4 mb-mb-2">
						<Card>
							<Card.Body>
								<div className="d-flex align-items-center">
									<div className="symbol symbol-45px me-4">
										<span className="symbol-label bg-light-success">
											<img src="/img/icon-calendar.svg"/>
										</span>
									</div>
									<div>
										<Card.Title>
											<FormattedMessage
												id="user.panel.userdashboard.event.title"
												defaultMessage="My Published Events"
											/>
										</Card.Title>
										<div className="fs-7 text-description">
											<span className="me-2">
												{eventsOwnTotal}
											</span>
											
											<FormattedMessage
												id="user.panel.userdashboard.event.description"
												defaultMessage="Published Events"
											/>
										</div>
									</div>

									
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-xl-4 mb-mb-2">
						<Card>
							<Card.Body>
								<div className="d-flex align-items-center">
									<div className="symbol symbol-45px me-4">
										<span className="symbol-label bg-light-danger">
											<img src="/img/icon-favorite.svg" />
										</span>
									</div>
									<div>
										<Card.Title>
											<FormattedMessage
												id="user.panel.userdashboard.favorites.title"
												defaultMessage="My Favourite Events"
											/>
											
										</Card.Title>
										<div className="fs-7 text-description">
											<span className="me-2">
												{eventsFavoriteTotal}
											</span>
											<FormattedMessage
												id="user.panel.userdashboard.favorites.description"
												defaultMessage="Favorites Events"
											/>
										
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-xl-4 mb-mb-2">
						<Card>
							<Card.Body>
								<div className="d-flex align-items-center">
									<div className="symbol symbol-45px me-4">
										<span className="symbol-label bg-light-warning">
											<img src="/img/icon-Bookmark.svg" />
										</span>
									</div>
									<div>
										<Card.Title>
											
											<FormattedMessage
												id="user.panel.userdashboard.suscribes.title"
												defaultMessage="My Subscribed Events"
											/>
											
										</Card.Title>
										<div className="fs-7  text-description">
											<span className="me-2">
												{eventsAssistantTotal}
											</span>
											<FormattedMessage
												id="user.panel.userdashboard.suscribes.descripcion"
												defaultMessage="Subscribed Events"
											/>
										
										</div>
									</div>

									
								</div>
							</Card.Body>
						</Card>
					</div>
				</div> }
			

				<div className="row g-0 g-xl-5 g-xxl-8">	
					<div className="col-xl-4 mb-mb-2">
						<Card>
								<Card.Title></Card.Title>
								<Card.Body>
									<div className="pt-0">

										<div className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center avatar-background" 
											style={{ backgroundImage: 'url(' + '/img/background.svg' + ')', backgroundSize: 'auto' }}>
												<div className="position-absolute mb-7">
													<div className="symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1">
														<span className="symbol-label align-items-end bg-symbols-avatar">
														<img alt="Logo" src={`https://services.4events.net/images/photoUser/${userData.image}`} width="80px" height="80px" className="mh-75px"/>
														</span>
														
													</div>
												</div>
												
										</div>

										<div className="pt-4">
											<div className="text-center pb-12">
												<h3 className="fw-bolder">{userData.username} </h3>
												<span className="fw-bolder fs-6 text-primary px-4 py-2 rounded">{userData.email}</span>
											</div>
										</div>
									</div>
								
								</Card.Body>
						</Card>	
					</div>

					<div className="col-xl-8 mb-mb-2">
						<Card>
							<Card.Body>
								<Card.Title>
									<FormattedMessage
										id="user.panel.userdashboard.profile-details-title"
										defaultMessage="Profile Details"
									/>

								</Card.Title>
								<div className="separator mt-2 pt-2"></div>
								<div className="row mb-7 pt-4 mb-10">
									<label className="col-lg-4 text-muted fw-500">
										<FormattedMessage
											id="user.panel.userdashboard.profile-details-item1"
											defaultMessage="Full Name"
										/>
										
									</label>							
									<div className="col-lg-8">
										<span className="fs-6 text-dark fw-500">{userData.username}</span>
									</div>
								</div>

								<div className="row mb-7">
									<label className="col-lg-4 text-muted fw-500">
										<FormattedMessage
											id="user.panel.userdashboard.profile-details-item2"
											defaultMessage="Contact Phone"
										/>
									</label>
									<div className="col-lg-8">
										<span className="fs-6 text-dark fw-500">{userData.phone}</span>
									</div>
								</div>

								<div className="row mb-7">
									<label className="col-lg-4 text-muted fw-500">
										<FormattedMessage
											id="user.panel.userdashboard.profile-details-item3"
											defaultMessage="Country"
										/>
									</label>
									<div className="col-lg-8">
										<span className="fs-6 text-dark fw-500">{userData.country}</span>
									</div>
								</div>

								<div className="row mb-7">
									<label className="col-lg-4 text-muted fw-500">
										<FormattedMessage
											id="user.panel.userdashboard.profile-details-item4"
											defaultMessage="City"
										/>
									</label>
									<div className="col-lg-8">
										<span className="fs-6 text-dark fw-500">{userData.city}</span>
									</div>
								</div>

								<div className="row mb-7">
									<label className="col-lg-4 text-muted fw-500">
										<FormattedMessage
											id="user.panel.userdashboard.profile-details-item5"
											defaultMessage="Postal Code"
										/>
									</label>
									<div className="col-lg-8">
										<span className="fs-6 text-dark fw-500">{userData.postal_code}</span>
									</div>
								</div>

								
							</Card.Body>

						</Card>
					</div>

					<div className="col-xl-12 mb-mb-2">
						<Card>
							<Card.Body>
								<Card.Title>					
                				    <FormattedMessage
                        				id="updatemember.title"
                        				defaultMessage="Change my data"
                    				/>                
								</Card.Title>
							
								<div className="separator mt-2 pt-2"></div>
								
								<RegisterForm onSubmit={handleSubmit} token={token} userData={userData} />

								{error && (	
                   					 <Alert onClick={handleResetError} variant="danger">
                        				 <p className="mb-0">
                            				{error.error}
                        				 </p>
                    					</Alert>
                				)}
								{dataSaved && 
									<SuccessMessage>
										<p  className="mb-0">
											{intl.formatMessage({ id: 'register.validate.successmessage'})}
										</p>
									</SuccessMessage>} 
							</Card.Body>
		
						</Card>
					</div>

				</div>
								
			</UserLayout>
		</div>
	)
}

export default UserDashboard
