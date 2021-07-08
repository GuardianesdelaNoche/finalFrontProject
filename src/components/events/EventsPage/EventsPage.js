import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../layout';
import { Alert, Spinner} from 'react-bootstrap';
import EventsCardsList from './EventsCardsList';
import EventsCardsEmptyList from './EventsCardsEmptyList';
import { getUi } from '../../../store/selectors/ui';
import { useDispatch, useSelector } from 'react-redux';
import { eventsLoadAction } from '../../../store/actions/events';


// const events = require('./data.json').events;
// const nodata = [];


function EventsPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
    dispatch( eventsLoadAction(setEvents) );
    
  }, [dispatch]);

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Layout>
      {loading && <Spinner animation="border" />}
      {error && (	
                    <Alert variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}
      { (events.length > 0) ?  <EventsCardsList events={events}></EventsCardsList> : <EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList> } 
      </Layout>
    </div>
  );
}

export default EventsPage;
