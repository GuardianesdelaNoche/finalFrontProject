import React, { useState } from "react";
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

import { paginationRedirect } from "../../../store/actions/pagination";
import { useHistory, useLocation } from "react-router-dom";

import { FiltersForm } from "./filters/FiltersForm";
import { Sorter } from "./filters/Sorter";
import { SearchBar } from "./filters/SearchBar";

import { intl_es, intl_en } from "../../shared/paginator/es_en.js";
import { useIntl } from "react-intl";
import { RiEyeCloseFill } from "react-icons/ri";

const lang_es = "es";

const getNewReq = (queryPath, key, value) => {
  const pageQuery = queryPath.get("page") || 1;
  const limitQuery = queryPath.get("limit") || 10;
  const titleQuery = queryPath.get("title");

  let paramsQuery = {};
  if (pageQuery) {
    paramsQuery = {
      ...paramsQuery,
      page: pageQuery,
    };
  }

  if (limitQuery) {
    paramsQuery = {
      ...paramsQuery,
      limit: limitQuery,
    };
  }

  if (titleQuery) {
    paramsQuery = {
      ...paramsQuery,
      title: titleQuery,
    };
  }

  switch (key) {
    case "page":
      paramsQuery = {
        ...paramsQuery,
        page: value,
      };
      break;

    case "limit":
      paramsQuery = {
        ...paramsQuery,
        page: 1,
        limit: value,
      };
      break;

    case "title":
      paramsQuery = {
        ...paramsQuery,
        page: 1,
        title: value,
      };
      break;

    default:
      break;
  }
  
  return paramsQuery;
};

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
  const titleQuery = queryPath.get("title") || "";

  console.log("location.search", location.search);
  console.log("queryPath", queryPath.getAll);
  console.log('pageQuery', pageQuery)
  console.log('limitQuery', limitQuery)
  console.log('titleQuery', titleQuery)

  const intl = useIntl();

  React.useEffect(() => {
    console.log("useEffect");
    dispatch(eventsLoadAction(pageQuery, limitQuery, titleQuery));
  }, [dispatch, pageQuery, limitQuery, titleQuery]);

  // const dispatchAction = (path) => {
  //   console.log('dispatchAction', path)
  //   dispatch(paginationRedirect(path));
  // }

  const dispatchAction = (req) => {
    // console.log('dispatchAction in', req)
    // let { title, ...newReq } = req;
    // //case modify page or limit
    // if(title !== ''){
    //   newReq = {
    //     ...newReq,
    //     title
    //   }
    //   console.log('title empty')
    // }else if(title !== '' && titleQuery){
    //   newReq = {
    //     ...newReq,
    //     title: titleQuery
    //   }
    // }else if(title === ''){
    //   newReq = {
    //     ...newReq
    //   };
    //   console.log('title fill')

    // }else if(titleQuery){
    //   newReq = {
    //     ...newReq,
    //     title: titleQuery
    //   }
    //   console.log('titlequery')

    // }
    // console.log("dispatchAction out", newReq);
    // dispatch(paginationRedirect(newReq));
  };

  const handleSetCurrentPage = (current, pageSize) => {
    // let reqParams = {
    //     page: current,
    //     limit: limitQuery
    // };
    console.log("events page onclick page", current);

    const reqParams = getNewReq(queryPath, "page", current);
    console.log("events page onclick page", reqParams);
    
    // dispatchAction(reqParams);
    // const path = `/events?page=${current}&limit=${limitQuery}`;
    // dispatchAction(path);
    // dispatch(paginationRedirect(path));
    dispatch(paginationRedirect(reqParams));

  };
  const onClick = (val) => (ev) => {
    // let reqParams = {
    //   page: 1,
    //   limit: val,
    // };
    // console.log("onclick events page", reqParams);
    console.log("events page onclick limit", val);

    const reqParams = getNewReq(queryPath, "limit", val);
    // dispatchAction(reqParams);
    console.log("events page onclick limit", reqParams);

    dispatch(paginationRedirect(reqParams));

    // const path = `/events?page=1&limit=${val}`;
    // dispatchAction(path);
    // dispatch(paginationRedirect(path));
  };

  const execFilters = (text) => {
    // console.log('execFilters', text)
    // const path = `/events?page=1&limit=${limitQuery}&title=${text}`;
    // dispatch(paginationRedirect(path));
    // console.log("execFilters text", text);
    // let reqParams = {
    //   page: 1,
    //   limit: limitQuery,
    //   title: text,
    // };
    // // dispatchAction(path);
    const reqParams = getNewReq(queryPath, "title", text);
    // dispatchAction(reqParams);

    dispatch(paginationRedirect(reqParams));

  };

  const onClickSearch = (event, text) => {
    // const id = event.target.id;
    // console.log(id)
    console.log("events page text search text", text);

    event.preventDefault();
    // execFilters(text);
    const reqParams = getNewReq(queryPath, "title", text);
    // dispatchAction(reqParams);
    console.log("events page text search reqParams", reqParams);

    dispatch(paginationRedirect(reqParams));
  };

  const modalPressed = true;

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
            <div className="row pt-3">
              <div className="col-md-3 d-none d-md-block">
                <FiltersForm />
              </div>
              <div className="col-md-9">
                <div className="pt-3 pl-3 pr-3 row">
                  <div>
                    <SearchBar
                      text={titleQuery}
                      onClickSearch={onClickSearch}
                      onClearButton={onClickSearch}
                    />
                  </div>
                </div>
                <div className="p-3 pb-4 row">
                  <div className="pt-3 pb-3 d-md-none">
                    {/* <Button className="inline-block" variant="secondary">
                      Filters Modal
                    </Button> */}

                    <Button
                      variant="primary"
                      onClick={() => {
                        console.log("on press modal");
                      }}
                    >
                      Launch demo modal
                    </Button>

                    <Modal
                      show={!modalPressed}
                      onHide={() => console.log("close modal")}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => console.log("close")}
                        >
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => console.log("save changes")}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Sorter />
                    <PaginationNavStyle onClick={onClick} limit={limitQuery} />
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
                  locale={lang_es === lang ? intl_es : intl_en}
                  total={totalEvents}
                  pageSize={limitQuery}
                  current={pageQuery}
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
