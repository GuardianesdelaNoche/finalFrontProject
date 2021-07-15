import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../layout';
import { Alert } from 'react-bootstrap';
import Spinner from '../../shared/Spinner';
import EventsCardsList from './EventsCardsList';
import EventsCardsEmptyList from './EventsCardsEmptyList';
import { getUi } from '../../../store/selectors/ui';
import { useDispatch, useSelector } from 'react-redux';
import { eventsLoadAction } from '../../../store/actions/events';
import { getEvents } from '../../../store/selectors/events';
import { resetErrorAction } from '../../../store/actions/ui';
import { PaginationNavStyle } from '../../shared/PaginationNavStyle';
import { Paginator } from '../../shared/paginator/Paginator';

import { getEventsTotal } from "../../../store/selectors/events";
import { getCurrentPage, getLimit, getTotalPages } from '../../../store/selectors/pagination';

function EventsPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const events = useSelector(getEvents);

  // vars modify events results
  const currentPage = useSelector(getCurrentPage);
  const totalPages = useSelector(getTotalPages);
  const limit = useSelector(getLimit);

  const handleResetError = ()=>{
    dispatch(resetErrorAction())
}

  React.useEffect(() => {
    dispatch( eventsLoadAction(currentPage, limit) );
  }, [dispatch, currentPage, totalPages, limit]);


  return (
    <div>
      <Layout>
      {loading && <Spinner animation="border" />}
      {error && (	
        <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}
      { !loading && !error && (events.length > 0) && 
      <div className="container">
        <PaginationNavStyle />
        <EventsCardsList events={events}></EventsCardsList> 
        {/* <Paginator getTotalItems={getEventsTotal}></Paginator> */}
        </div> }
      { !loading && !error && (events.length === 0) &&
      <div className="container">
      <EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList> 
      </div> }
      </Layout>
    </div>
  );
}

export default EventsPage;
