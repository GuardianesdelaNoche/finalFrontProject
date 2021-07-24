import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layout'
import EventDetails from './EventDetails'

import { eventDetailsActions } from '../../../store/actions/events';
import { getEventDetail} from '../../../store/selectors/events';
import { getUi } from '../../../store/selectors/ui';

function DetailsPage() {
	const dispatch = useDispatch();
	const { eventId } = useParams();

	const { error } = useSelector(getUi);
	const event = useSelector(state => getEventDetail (state, eventId))

	

	React.useEffect(() => {
		dispatch(eventDetailsActions(eventId))
	}, [dispatch, eventId]);

	
	const handleDelete = () => {
		console.log('Hola Mundo')
	};

	if (error?.statusCode === 401) {
		return <Redirect to="/login" />;
	}

	if (error?.statusCode === 404) {
		return <Redirect to="/404" />;
	}


	return (
		<div>
			<Layout>
				<EventDetails {...event} />
			</Layout>
		</div>
	)
}

DetailsPage.propTypes = {

}

export default DetailsPage
