import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { setNewEvent } from '../../../api/events';
import { getUi } from '../../../store/selectors/ui'; 
import { Link } from 'react-router-dom';
import { Alert, Spinner} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import NewEventForm from './NewEventForm';
import { SuccessMessage } from '../../shared/elements/formElements';
import { useIntl } from 'react-intl';

//import '../../auth/LoginPage/LoginPage/login.css'

function NewEventPage () {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(getUi);
    const [ dataSaved, setDataSaved] = React.useState(false);
    const intl = useIntl();  
    const handleSubmit = async (newEventData)=>{
        try {
            dispatch(setLoadingAction());
            dispatch(resetErrorAction());
            await setNewEvent(newEventData);
            setDataSaved(true);
        } catch (error) {
            dispatch(setErrorAction(error));
        } finally 
        {
            dispatch(resetLoadingAction());
        }
    }

    const handleResetError = ()=>{
        dispatch(resetErrorAction())
    }

    return (
        <div className="main-content">
            <main className="form-signin">
                <h1 className="h1 title-signin">
                    <FormattedMessage
                        id="newEvent.title"
                        defaultMessage="New Event"
                    />
                </h1>
                {loading && <Spinner animation="border" />}
                <NewEventForm onSubmit={handleSubmit} />

                {error && (	
                    <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.errors[0].msg}
                        </p>
                    </Alert>
                )}
                {dataSaved && 
                    <SuccessMessage>
                        <p className="mb-0">										
                            {intl.formatMessage({ id: 'register.validate.successmessage'})}
                        </p>
                    </SuccessMessage>} 

                  
           
             
            </main>           
        </div>
     
    )
}

export default NewEventPage;


