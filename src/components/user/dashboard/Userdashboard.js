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
import  Spinner  from '../../shared/Spinner';



function UserDashboard({history}) {
	const dispatch = useDispatch();
	const intl = useIntl();    
    const token = storage.get('auth');     
    const { loading, error } = useSelector(getUi);
	const userData = useSelector(getUserData);
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
