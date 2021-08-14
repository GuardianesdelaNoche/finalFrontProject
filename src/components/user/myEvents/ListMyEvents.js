import React, { useEffect } from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { getMyEvents } from '../../../api/user';
import { Alert} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import storage from '../../../utils/storage';
import { useIntl } from 'react-intl';
import { getUi } from '../../../store/selectors/ui';
import  Spinner  from '../../shared/Spinner';



function ListMyEvents() {
	const dispatch = useDispatch();
	const intl = useIntl();    
    const token = storage.get('auth');     
    const { loading, error } = useSelector(getUi);


	useEffect(()=>{
		async function executeGetMyEvents (){
            try {                             
                dispatch(setLoadingAction);
                const myEvents = await getMyEvents(token.token);
                //handleSetValue(member.result);
            } catch (error) {
                dispatch(setErrorAction(error));
            } finally {
                dispatch(resetLoadingAction);
            }
        }
        executeGetMyEvents();

	}, []);

   
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
                        				id="listmyevents.title"
                        				defaultMessage="My Events"
                    				/>                
								</Card.Title>
												
								Listado							

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

export default ListMyEvents
