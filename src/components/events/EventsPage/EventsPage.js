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
import Pagination from 'rc-pagination';
import '../../shared/paginator/paginator.css';

import { getEventsTotal } from "../../../store/selectors/events";
import { getCurrentPage, getLimit, getTotalPages } from '../../../store/selectors/pagination';
import { paginationRedirect, paginationSetCurrentPage, paginationUpdateCurrentPage } from '../../../store/actions/pagination';
import { useHistory, useLocation, useParams } from 'react-router-dom';

function EventsPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const events = useSelector(getEvents);

  // vars modify events results
  const currentPage = useSelector(getCurrentPage);
  const limit = useSelector(getLimit);
  const totalEvents = useSelector(getEventsTotal);

  // const { page } = useParams(); //test pag-h
  // console.log('page',page);

  const handleResetError = ()=>{
    dispatch(resetErrorAction())
}

  const history = useHistory();
  const location = useLocation();
  const { page: pageTest,  limit: limitTest } = useParams(); 
  const queryPath = new URLSearchParams(location.search);
  const pageQuery =  queryPath.get("page");
  const limitQuery = queryPath.get("limit");

  React.useEffect(() => {
    // console.log('in useEffect page value', page)
    // if(page){ //test pag-h
    //   console.log('get param page ', page)
    //   console.log(history.location)
    //   dispatch( paginationSetCurrentPage( page ) )//test pag-h
    // }

    // dispatch( eventsLoadAction(currentPage, limit) ); //bueno

    // dispatch( eventsLoadAction(pageTest, limit) ); //test
    dispatch( eventsLoadAction( pageQuery, limitQuery ) )

    // dispatch( eventsLoadAction(currentPage, limit) ); 
  // }, [dispatch, currentPage, limit]);
// }, [dispatch, currentPage, limit]); //bueno
}, [dispatch, pageQuery, limitQuery]); //bueno




  const handleSetCurrentPage = (current, pageSize) => {
    // const beforePage = page || "1";
    // console.log('before page', beforePage);
    // console.log('press page ', current);
    // dispatch( paginationUpdateCurrentPage( beforePage, current ) )
    
    //  dispatch( paginationSetCurrentPage( current ));//( bueno)
    const path = `/events?page=${current}&limit=${limitQuery}`;
    console.log('onClick change page -> path', path)
     dispatch( paginationRedirect( path ) )
  };
  const onClick = (val) => (ev) => {
    const path = `/events?page=${pageQuery}&limit=${val}`;
    console.log('onClick limit -> path', path)
    dispatch( paginationRedirect( path ) )
};

  console.log(currentPage)
  console.log(limit)
  console.log(totalEvents)
  console.log('location',location);
  console.log('location search', location.search)

  console.log('page limit psearchpath', `${pageQuery} ${limitQuery}`)
  console.log('history', history)
  console.log('param page', pageTest);
  console.log('param limit', limitTest);

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
        <PaginationNavStyle onClick={onClick} limit={limitQuery}/>
        <EventsCardsList events={events}></EventsCardsList> 
        {/* <Paginator getTotalItems={getEventsTotal}></Paginator> */}
        <div className="p-3 pb-4 d-flex justify-content-center"> 
        <Pagination total={totalEvents} pageSize={limitQuery} current={pageQuery} showLessItems={true} onChange={handleSetCurrentPage} />

        </div>
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
