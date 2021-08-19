import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { setNewEvent } from '../../../api/events';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import NewEventForm from './NewEventForm';
import { SuccessMessage } from '../../shared/elements/formElements';
import { useIntl } from 'react-intl';
import  Spinner  from '../../shared/Spinner';
import { Layout } from '../../layout'

import './newEvent.css'

function NewEventPage () {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(getUi);
    const [ dataSaved, setDataSaved] = React.useState(false);
    const intl = useIntl();  
    const handleSubmit = async (newEventData)=>{
        try {
            dispatch(setLoadingAction());
            dispatch(resetErrorAction());
            const formData=getFormData(newEventData);
            await setNewEvent(formData);
            setDataSaved(true);
        } catch (error) {
            dispatch(setErrorAction(error));
        } finally 
        {
            dispatch(resetLoadingAction());
        }
    }

    const getFormData = (newEventData) => {
        let formData = new FormData();
        formData.append('title', newEventData.title);
        formData.append('description', newEventData.description);
        formData.append('price', newEventData.price);
        formData.append('latitude', newEventData.latitude);
        formData.append('longitude', newEventData.longitude);
        formData.append('address', newEventData.address);
        formData.append('city', newEventData.city);
        formData.append('country', newEventData.country);
        formData.append('postal_code', newEventData.postal_code);
        formData.append('max_places', newEventData.max_places);
        formData.append('indoor', newEventData.indoor);
        formData.append('duration', newEventData.duration);
        formData.append('tags', newEventData.tags);
        formData.append('date', newEventData.date);
        if(newEventData.photo !== "") formData.append('photo', newEventData.photo);
        return formData;
    }

    const handleResetError = ()=>{
        dispatch(resetErrorAction())
    }

    return (
        <Layout>

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
                                {error.error}
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
        </Layout>
     
    )
}

export default NewEventPage;


