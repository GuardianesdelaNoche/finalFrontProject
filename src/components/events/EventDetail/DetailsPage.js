import React from 'react'
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from "../../../store/actions/ui";
import  Spinner  from '../../shared/Spinner';

import { Layout } from '../../layout';
import EventDetails from './EventDetails';

import { eventDetailsActions, eventDeleteActions } from '../../../store/actions/events';

import { getEventDetail} from '../../../store/selectors/events';

import { getUi } from '../../../store/selectors/ui';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function DetailsPage() {
	const dispatch = useDispatch();
	
	const { eventId } = useParams();
	const { loading, error } = useSelector(getUi);
	const event = useSelector(state => getEventDetail (state, eventId))

	const swal = withReactContent(Swal)


	React.useEffect(() => {
		dispatch(eventDetailsActions(eventId))	
	}, [dispatch, eventId]);

	

	const handleDelete = () => {
		
			swal.fire({
				title: "Eliminar evento",
				text: "¿Estás seguro que deseas eliminar este evento?",
				icon: "warning",
				confirmButtonText: "Si",
				confirmButtonColor: "#20d489",
				denyButtonText: "No",
				showDenyButton: true
			}).then(async response => {
				if (response.isConfirmed) {
					swal.fire({
						text: "Evento eliminado correctamente",
						icon: 'success',
						showConfirmButton: false
					})
					dispatch(eventDeleteActions(eventId))
				}
			})
			
		
	}

	const handleResetError = () => {
		dispatch(resetErrorAction());
	};


	return (
		<div>
			<Layout>
				{loading && <Spinner animation="border" />}

				{error && (
					<Alert onClick={handleResetError} variant="danger">
						<p className="mb-0">{error.message}</p>
					</Alert>
				)}
				{event && <EventDetails {...event} 
					onDelete={handleDelete} 
				 />}

			</Layout>
		</div>
	)
}


export default DetailsPage
