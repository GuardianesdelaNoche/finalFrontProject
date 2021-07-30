import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../layout";
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
import { intl_es, intl_en } from "../../shared/paginator/es_en.js";
import { useIntl } from 'react-intl';
import { getEventsTotal } from "../../../store/selectors/events";
import {
  paginationRedirect
} from "../../../store/actions/pagination";
import { useHistory, useLocation } from "react-router-dom";

const lang_es = 'es';

function EventsPage() {

  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const events = useSelector(getEvents);
  // vars modify events results
  const totalEvents = useSelector(getEventsTotal);

  const handleResetError = () => {
    dispatch(resetErrorAction());
  };


  const location = useLocation();
  const queryPath = new URLSearchParams(location.search);
  const pageQuery = queryPath.get("page") || 1;
  const limitQuery = queryPath.get("limit") || 10;

  const intl = useIntl();
  
  React.useEffect(() => {

    dispatch(eventsLoadAction(pageQuery, limitQuery));

  }, [dispatch, pageQuery, limitQuery]); 

  const handleSetCurrentPage = (current, pageSize) => {
    const path = `/events?page=${current}&limit=${limitQuery}`;
    dispatch(paginationRedirect(path));
  };
  const onClick = (val) => (ev) => {
    const path = `/events?page=1&limit=${val}`;
    dispatch(paginationRedirect(path));
  };

  const lang = intl.locale.slice(0, 2);

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
            <PaginationNavStyle onClick={onClick} limit={limitQuery} />
            <EventsCardsList events={events}></EventsCardsList>

            <div className="p-3 pb-4 d-flex justify-content-center">
              <Pagination
                locale={lang_es === lang ? intl_es : intl_en}
                total={totalEvents}
                pageSize={limitQuery}
                current={pageQuery}
                showLessItems={true}
                onChange={handleSetCurrentPage}
              />
            </div>
          </div>
        )}
        {!loading && !error && events.length === 0 && (
          <div className="container">
            <EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default EventsPage;
