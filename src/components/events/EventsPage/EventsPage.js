import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../layout";
import { Accordion, Alert, Card, Button, Modal } from "react-bootstrap";
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
import "./EventsPage.css";
import { getEventsTotal } from "../../../store/selectors/events";
import { getCurrentPage, getLimit } from "../../../store/selectors/pagination";
import { paginationSetCurrentPage } from "../../../store/actions/pagination";

import { FiltersForm } from "./filters/FiltersForm";
import { Sorter } from "./filters/Sorter";
import { SearchBar } from "./filters/SearchBar";

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

  const modalPressed = true;

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
            <div className="row pt-3">
              <div className="col-md-3 d-none d-md-block">
                <FiltersForm />
              </div>
              <div className="col-md-9">
                <div className="pt-3 pl-3 pr-3 row">
                  <div>
                    <SearchBar />
                  </div>
                </div>
                <div className="p-3 pb-4 row">
                  <div className="pt-3 pb-3 d-md-none">
                    {/* <Button className="inline-block" variant="secondary">
                      Filters Modal
                    </Button> */}
                    
                    <Button variant="primary" onClick={() => {console.log('on press modal')}}>
                      Launch demo modal
                    </Button>

                    <Modal show={!modalPressed} onHide={() => console.log('close modal')}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => console.log('close')}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={() => console.log('save changes')}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Sorter />
                    <PaginationNavStyle />
                  </div>
                </div>
                <div className="row">
                  <EventsCardsList events={events}></EventsCardsList>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="p-3 pb-4 d-flex justify-content-center">
                <Pagination
                  total={totalEvents}
                  pageSize={limit}
                  current={currentPage}
                  showLessItems={true}
                  onChange={handleSetCurrentPage}
                />
              </div>
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
