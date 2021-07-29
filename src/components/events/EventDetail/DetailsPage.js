import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from '../../layout'
import EventDetails from './EventDetails'

import { eventDetailsActions, eventDetailsSuccess, eventDeleteActions } from '../../../store/actions/events';
import { getEvents, getEventDetail} from '../../../store/selectors/events';
import { getUi } from '../../../store/selectors/ui';


function DetailsPage() {
	const dispatch = useDispatch();
	const { eventId } = useParams();
	const { loading, error } = useSelector(getUi);

	const event = useSelector(state => getEventDetail (state, eventId))

	React.useEffect(() => {
		dispatch(eventDetailsActions(eventId))	
	}, [dispatch, eventId]);

	
	const handleDelete = () => {
		dispatch(eventDeleteActions(eventId))
	};

	if (error?.statusCode === 404) {
		return <Redirect to="/404" />;
	}

	return (
		<div>
			<Layout>
				{loading && <Spinner animation="border" />}
				{event && <EventDetails {...event} onDelete={handleDelete} />}
			</Layout>
		</div>
	)
}

DetailsPage.propTypes = {

}

export default DetailsPage
