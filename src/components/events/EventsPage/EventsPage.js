import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../layout";
import { Accordion, Alert, Card, ToggleButton, ToggleButtonGroup, useAccordionToggle } from "react-bootstrap";
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
import { Searchbar } from "../../shared/filters/searchbar/Searchbar";
import { BiSliderAlt } from "react-icons/bi";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button className="btn " type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

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
            <div className="row">
              <div className="col-9 p-3 pb-4 ">
                <Accordion className="m-2">
                  {/* <Card>
                    <Card.Header className="row"> */}
                  <div className="d-flex flex-row">
                    <Searchbar />
                    <CustomToggle className="p-3" eventKey="0">
                      <BiSliderAlt />
                    </CustomToggle>
                  </div>
                  {/* </Card.Header> */}
                  <Accordion.Collapse eventKey="0">
                    {/* <Card.Body> */}
                    <div>
                      <Range allowCross={false} />
                      <div>
                        <ToggleButtonGroup
                          type="checkbox"
                        >
                          <ToggleButton id="tbg-btn-1" value={1}>
                            tag1
                          </ToggleButton>
                          <ToggleButton id="tbg-btn-2" value={2}>
                            tag2
                          </ToggleButton>
                          <ToggleButton id="tbg-btn-3" value={3}>
                            tag3
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>
                    {/* </Card.Body> */}
                  </Accordion.Collapse>
                  {/* </Card> */}
                </Accordion>
              </div>
              <div className="col-3">
                <PaginationNavStyle />
              </div>
            </div>
            <div className="row p-3 pb-4 d-flex justify-content-center">
              <Pagination
                total={totalEvents}
                pageSize={limit}
                current={currentPage}
                showLessItems={true}
                onChange={handleSetCurrentPage}
              />
            </div>
            <EventsCardsList events={events}></EventsCardsList>
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
