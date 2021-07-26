import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "../../layout";
import { Alert } from "react-bootstrap";
import Spinner from "../../shared/Spinner";
import EventsCardsList from "./EventsCardsList";
import EventsCardsEmptyList from "./EventsCardsEmptyList";
import { getUi } from "../../../store/selectors/ui";
import { useDispatch, useSelector } from "react-redux";
import { eventsLoadAction } from "../../../store/actions/events";
import { getEvents } from "../../../store/selectors/events";
import { resetErrorAction } from "../../../store/actions/ui";
import { PaginationNavStyle } from "../../shared/PaginationNavStyle";
import Pagination from "rc-pagination";
import "../../shared/paginator/paginator.css";

import { getEventsTotal } from "../../../store/selectors/events";
import { getCurrentPage, getLimit } from "../../../store/selectors/pagination";
import { paginationSetCurrentPage } from "../../../store/actions/pagination";

function EventsPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const events = useSelector(getEvents);

  // vars modify events results
  const currentPage = useSelector(getCurrentPage);
  const limit = useSelector(getLimit);
  const totalEvents = useSelector(getEventsTotal);

  const handleResetError = () => {
    dispatch(resetErrorAction());
  };

  React.useEffect(() => {
    dispatch(eventsLoadAction(currentPage, limit));
  }, [dispatch, currentPage, limit]);

  const handleSetCurrentPage = (current, pageSize) => {
    dispatch(paginationSetCurrentPage(current));
  };
console.log("Eva");
  return (
    <div>
      <Layout>
        {loading && <Spinner animation="border" />}
        {error && (
          <Alert onClick={handleResetError} variant="danger">
            <p className="mb-0">{error.message}</p>
          </Alert>
        )}
        {!loading && !error && events.length > 0 && (
          <div className="container">
            <PaginationNavStyle  className="pt-4"/>
            
            
            <EventsCardsList events={events}></EventsCardsList>
            
          </div>
        )}
        {!loading && !error && events.length === 0 && (
          <div className="container">
            <EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList>
          </div>
        )}

         <div className="d-flex justify-content-center">
              <Pagination
                total={totalEvents}
                pageSize={limit}
                current={currentPage}
                showLessItems={true}
                onChange={handleSetCurrentPage}
              />
            </div> 
      </Layout>
    </div>
  );
}

export default EventsPage;
