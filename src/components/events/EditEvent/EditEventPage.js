import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { Layout } from '../../layout';
import { setEditEvent } from '../../../api/events';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import EditEventForm from './EditEventForm';
import { SuccessMessage } from '../../shared/elements/formElements';
import { useIntl } from 'react-intl';
import  Spinner  from '../../shared/Spinner';
import { useParams } from 'react-router-dom';
import { getEventDetail } from '../../../store/selectors/events';


import '../NewEvent/newEvent.css'

function EditEventPage ({history}) {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(getUi);
    const [ dataSaved, setDataSaved] = React.useState(false);
    const { eventId } = useParams();
    const data = useSelector(state => getEventDetail (state, eventId));
    const intl = useIntl();  
    const handleSubmit = async (editEventData)=>{
        try {
            dispatch(setLoadingAction());
            dispatch(resetErrorAction());
            const formData=getFormData(editEventData);
            await setEditEvent(formData, eventId);
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
                <div className="container details">
                     <div className="card card-flush pt-12">

                        <div className="card card-body">
                            <div className="form-header ml-3">
                                <h3 className="text-dark "><FormattedMessage
                                    id="editEvent.title"
                                    defaultMessage="Edit Event"
                                /></h3>
                                <span className="fs-8 text-description">
                                    
                                    <FormattedMessage
                                        id="editEvent.description"
                                        defaultMessage="Change data for your event"
                                    /></span>
                            </div>

                            {loading && <Spinner animation="border" />}
                            <EditEventForm onSubmit={handleSubmit} data={data} history={history} />

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
                        </div>
                    </div>
                </div>

          
        </div>
        </Layout>
     
    )
}

export default EditEventPage;


