import React from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import RegisterForm from './UserdashboardForm';
import storage from '../../../utils/storage';
import { setUserData } from '../../../api/user';
import { SuccessMessage } from '../../shared/elements/formElements';
import { useIntl } from 'react-intl';
import { getUserData } from '../../../store/selectors/auth';
import { getEventsFavoriteLoaded, getEventsOwnEventsLoaded, getEventsAssistantEventsLoaded  } from '../../../store/selectors/events';

import  Spinner  from '../../shared/Spinner';


function UserDashboard({history}) {
	const dispatch = useDispatch();
	const intl = useIntl();    
    const token = storage.get('auth');     
    const { loading, error } = useSelector(getUi);
	const userData = useSelector(getUserData);
	const eventsFavorite = useSelector(getEventsFavoriteLoaded);
	const eventsOwn = useSelector(getEventsOwnEventsLoaded);
	const eventsAssistant = useSelector(getEventsAssistantEventsLoaded);

	console.log(eventsOwn.total, 'eventos publicados')
	console.log(eventsFavorite, 'eventos Favoritos')

	const [dataSaved, setDataSaved] = React.useState(false);

	if (!userData){
		history.push("/login");
	}
    const handleSubmit = async (registerData)=>{
        try {
            dispatch(setLoadingAction);
			dispatch(resetErrorAction);
            await setUserData(token.token, registerData)
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
		
				<div className="row g-0 g-xl-5 g-xxl-8 pb-12">
					<div className="col-xl-4">
						<Card>
							<Card.Body>
								<div class="d-flex align-items-center">
									<div class="symbol symbol-45px me-4">
										<span class="symbol-label bg-light-success">
											<img src="/img/icon-calendar.svg"/>
										</span>
									</div>
									<div>
										<Card.Title>Mis Eventos Publicados</Card.Title>
										<div class="fs-7 text-muted  mt-1">{eventsOwn.length} Eventos Publicados</div>
									</div>

									
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-xl-4">
						<Card>
							<Card.Body>
								<div class="d-flex align-items-center">
									<div class="symbol symbol-45px me-4">
										<span class="symbol-label bg-light-danger">
											<img src="/img/icon-favorite.svg" />
										</span>
									</div>
									<div>
										<Card.Title>Mis Eventos Favoritos</Card.Title>
										<div class="fs-7 text-muted  mt-1">{eventsFavorite.length} Favorites Events</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-xl-4">
						<Card>
							<Card.Body>
								<div class="d-flex align-items-center">
									<div class="symbol symbol-45px me-4">
										<span class="symbol-label bg-light-warning">
											<img src="/img/icon-Bookmark.svg" />
										</span>
									</div>
									<div>
										<Card.Title>Mis Eventos Suscritos</Card.Title>
										<div class="fs-7 text-muted  mt-1">{eventsAssistant.length} Favorites Events</div>
									</div>

									
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			

				<div className="row g-0 g-xl-5 g-xxl-8">	
					<div className="col-xl-4">
						<Card>
								<Card.Title></Card.Title>
								<Card.Body>
									<div class="pt-0">
									
								
									<img alt="Logo" src={`https://services.4events.net/images/photoUser/${userData.image}`} width="80px" height="80px" className="mh-35px" />
									
										<div class="pt-4">
											<div class="text-center pb-12">
											<h3 class="fw-bolder fs-2 pb-4">{userData.username} </h3>
												<span class="fw-bolder fs-6 text-primary px-4 py-2 rounded bg-white bg-opacity-10">{userData.email}</span>
											<p>{userData.city}</p>
											<p>{userData.country}</p>
											<p>{userData.postal_code}</p>
											<p>{userData.phone}</p>
											</div>
										</div>
									</div>
								</Card.Body>
						</Card>	
					</div>
					<div className="col-xl-8">
						<Card>
							<Card.Body>
								<Card.Title>					
                				    <FormattedMessage
                        				id="updatemember.title"
                        				defaultMessage="Change my data"
                    				/>                
								</Card.Title>
								
								<RegisterForm onSubmit={handleSubmit} token={token} userData={userData} /> 	 								

								{error && (	
                   					 <Alert onClick={handleResetError} variant="danger">
                        				 <p className="mb-0">
                            				{error.errors[0].msg}
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
