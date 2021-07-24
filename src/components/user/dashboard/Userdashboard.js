import React from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert, Spinner} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import RegisterForm from './UserdashboardForm';
import storage from '../../../utils/storage';
import { setUserData } from '../../../api/user';


function UserDashboard() {
	const dispatch = useDispatch();
    
    const token = storage.get('auth');   
   

    const { loading, error } = useSelector(getUi);

    const handleSubmit = async (registerData)=>{
        try {
            dispatch(setLoadingAction);
            await setUserData(token.token, registerData)
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
				<div className="row g-0 g-xl-5 g-xxl-8">	

					<div className="col-xl-12">
						<Card>
							<Card.Body>
								<Card.Title>
					
                				    <FormattedMessage
                        				id="updatemember.title"
                        				defaultMessage="Change my data"
                    				/>
                
								</Card.Title>
							
								<div className="d-flex flex-row justify-content-between">
									<Card.Subtitle className="mb-2 text-muted">
									 <RegisterForm onSubmit={handleSubmit} token={token} /> 

									</Card.Subtitle>
									<Card.Subtitle className="mb-2 text-muted">

									</Card.Subtitle>
								</div>

								{error && (	
                   					 <Alert onClick={handleResetError} variant="danger">
                        				 <p className="mb-0">
                            				{error.message}
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

export default UserDashboard
