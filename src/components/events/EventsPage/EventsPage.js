import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../layout";
import { Alert, Button, Modal } from "react-bootstrap";
import Spinner from "../../shared/Spinner";
import EventsCardsList from "./EventsCardsList";
import EventsCardsEmptyList from "./EventsCardsEmptyList";
import { getUi } from "../../../store/selectors/ui";
import { useDispatch, useSelector } from "react-redux";
import { eventsLoadAction, eventsLoadedCleanAction } from "../../../store/actions/events";
import { getEvents } from "../../../store/selectors/events";
import { resetErrorAction } from "../../../store/actions/ui";
import { PaginationNavStyle } from "../../shared/PaginationNavStyle";
import Pagination from "rc-pagination";
import "../../shared/paginator/paginator.css";

import { getEventsTotal } from "../../../store/selectors/events";

import { paginationRedirect } from "../../../store/actions/pagination";
import { useLocation } from "react-router-dom";

import { FiltersForm } from "./filters/FiltersForm";
import { Sorter } from "./filters/Sorter";
import { SearchBar } from "./filters/SearchBar";

import { intl_es, intl_en } from "../../shared/paginator/es_en.js";
import { useIntl } from "react-intl";
import { getTags } from "../../../store/selectors/tags";
import { tagsLoadAction } from "../../../store/actions/tags";

const lang_es = "es";

const optionsSort = [
  {
    key: "asc",
    value: "asc",
  },
  {
    key: "des",
    value: "des",
  },
];

const getNewReq = (queryPath, key, value) => {
  const pageQuery = queryPath.get("page") || 1;
  const limitQuery = queryPath.get("limit") || 10;
  const titleQuery = queryPath.get("title");
  const sortQuery = queryPath.get("sort");
  const indoorQuery = queryPath.get("indoor");
  const priceQuery = queryPath.get("price");
  const tagsQuery = queryPath.getAll("tags");
  const usernameQuery = queryPath.get("username");

  let filters = {};

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

  if (sortQuery) {
    paramsQuery = {
      ...paramsQuery,
      sort: sortQuery,
    };
  }

  if (indoorQuery) {
    filters = {
      ...filters,
      indoor: indoorQuery,
    };
    paramsQuery = {
      ...paramsQuery,
      filters: filters,
    };
  }

  if (priceQuery) {
    const [low, high] = priceQuery.split("-");
    const newPriceQuery = {
      low,
      high,
    };
    filters = {
      ...filters,
      price: newPriceQuery,
    };
    paramsQuery = {
      ...paramsQuery,
      filters: filters,
    };
  }

  if (tagsQuery) {
    filters = {
      ...filters,
      tags: tagsQuery,
    };
    paramsQuery = {
      ...paramsQuery,
      filters: filters,
    };
  }

  if (usernameQuery) {
    filters = {
      ...filters,
      username: usernameQuery,
    };
    paramsQuery = {
      ...paramsQuery,
      filters: filters,
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
    case "sort":
      paramsQuery = {
        ...paramsQuery,
        page: 1,
        sort: value,
      };
      break;
    case "filters":
      paramsQuery = {
        ...paramsQuery,
        page: 1,
        filters: value,
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
  const tags = useSelector(getTags);

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
  const sortQuery = queryPath.get("sort") || "asc";
  const indoorQuery = queryPath.get("indoor") || undefined;
  const priceQuery = queryPath.get("price") || "0-0";
  const tagsQuery = queryPath.getAll("tags") || [];
  const tagsQueryString = tagsQuery.toString() || "";
  const usernameQuery = queryPath.get("username") || "";

  //initFilters
  const filters = {
    indoor: indoorQuery,
    price: priceQuery,
    tags: tagsQuery,
    username: usernameQuery,
  };

  const intl = useIntl();

  const filtersText = intl.formatMessage({
    id: "filtersform.headerfilters.filters",
  });

  React.useEffect(() => {
    dispatch(
      eventsLoadAction(
        pageQuery,
        limitQuery,
        titleQuery,
        sortQuery,
        indoorQuery,
        priceQuery,
        tagsQuery,
        usernameQuery
      )
    );
  }, [
    dispatch,
    pageQuery,
    limitQuery,
    titleQuery,
    sortQuery,
    indoorQuery,
    priceQuery,
    tagsQueryString,
    usernameQuery,
  ]);

  React.useEffect(() => {
    dispatch(tagsLoadAction());
  }, [dispatch, tags]);

  const handleSetCurrentPage = (current, pageSize) => {
    const reqParams = getNewReq(queryPath, "page", current);
    dispatch(paginationRedirect(reqParams));
  };
  const onClick = (val) => (ev) => {
    const reqParams = getNewReq(queryPath, "limit", val);
    dispatch(paginationRedirect(reqParams));
  };

  const onClickSearch = (event, text) => {
    event.preventDefault();
    const reqParams = getNewReq(queryPath, "title", text);
    dispatch(paginationRedirect(reqParams));
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const lang = intl.locale.slice(0, 2);

  const onSelectSorter = (key, event) => {
    event.preventDefault();
    const reqParams = getNewReq(queryPath, "sort", key);
    dispatch(paginationRedirect(reqParams));
  };

  const onClickFilters = (event, filters) => {
    event.preventDefault();
    const reqParams = getNewReq(queryPath, "filters", filters);
    if (showModal) {
      handleCloseModal();
    }
    dispatch(paginationRedirect(reqParams));
  };

  if (error) {
    if(error.error.includes('User')){
      handleResetError();
      dispatch(eventsLoadedCleanAction());
    }
  }

  return (
    <div>
      <Layout>
        {loading && <Spinner animation="border" />}
        {/* {error && ( */}
        {error && !error.error.includes("User") && (
          <Alert onClick={handleResetError} variant="danger">
            <p className="mb-0">{error.message}</p>
          </Alert>
        )}
        {!loading && !error && (
          // && events.length > 0
          <div className="container">
            <div className="row filter">
              <div className="col-md-10">
                <SearchBar
                  text={titleQuery}
                  onClickSearch={onClickSearch}
                  onClearButton={onClickSearch}
                />
              </div>
              <div className="col-md-2 modal-filter">
                <Button variant="primary" onClick={handleShowModal}>
                  {filtersText}
                </Button>
              </div>
            </div>

            <div className="p-3 pb-4 row">
              <div className="pt-3 pb-3 d-md-none">
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <FiltersForm
                      defaultTags={tags}
                      initFilters={filters}
                      onClickFilters={onClickFilters}
                      onRemoveFilters={onClickFilters}
                    />{" "}
                  </Modal.Body>
                </Modal>
              </div>
              <div className="d-flex justify-content-between">
                <Sorter onSelect={onSelectSorter} />
                <PaginationNavStyle onClick={onClick} limit={limitQuery} />
              </div>
            </div>

            <div className="row">
              {!loading && !error && events.length > 0 && (
                <EventsCardsList events={events}></EventsCardsList>
              )}
              {!loading && !error && events.length === 0 && (
                <EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList>
              )}
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
      </Layout>
    </div>
  );
}

export default EventsPage;
