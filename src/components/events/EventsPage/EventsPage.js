import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../layout';
import { Alert} from 'react-bootstrap';
import Spinner from '../../shared/Spinner';
import EventsCardsList from './EventsCardsList';
import EventsCardsEmptyList from './EventsCardsEmptyList';
import { getUi } from '../../../store/selectors/ui';
import { useDispatch, useSelector } from 'react-redux';
import { eventsLoadAction } from '../../../store/actions/events';
import { getEvents } from '../../../store/selectors/events';
import { resetErrorAction } from '../../../store/actions/ui';
import { PaginationNavStyle } from '../../shared/PaginationNavStyle';


// const events = require('./data.json').events;
// const nodata = [];


function EventsPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const events = useSelector(getEvents);

  const handleResetError = ()=>{
    dispatch(resetErrorAction())
}

  React.useEffect(() => {
    dispatch( eventsLoadAction() );
    
  }, [dispatch]);

  return (
    <div>
      <Layout>
      <PaginationNavStyle />
      {loading && <Spinner animation="border" />}
      {error && (	
                    <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}
      { !loading && !error && (events.length > 0) && <EventsCardsList events={events}></EventsCardsList> }
      { !loading && !error && (events.length === 0) &&<EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList> } 
      </Layout>
    </div>
  );
}

export default EventsPage;
