import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  Card,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup,
} from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { BiSlider } from "react-icons/bi";
import { FilterToggleButtons } from "./FilterToggleButtons";
import { FilterRadioToggleButtons } from "./FilterRadioToggleButtons";
import { FilterRange } from "./FilterRange";

const FilterCard = ({ title, body, ...props }) => {
  return (
    <Card {...props}>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>{body}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const typeActivity = "Indoor";

export const FiltersForm = ({
  defaultTags,
  initFilters,
  onClickFilters,
  onRemoveFilters,
  onCleanFilters,
}) => {
  const { indoor, price, tags, username } = initFilters;

  const [selectedTags, setSelectedTags] = useState(tags);
  const [selectedType, setSelectedType] = useState(indoor);
  const [selectedUsername, setSelectedUsername] = useState(username);
  // const [disabledButtons, setDisabledButtons] = useState(false);

  const [low, high] = price.split("-");
  const [selectedPrice, setSelectedPrice] = useState({
    low: low,
    high: high,
  });

  const intl = useIntl();
  const placeholderUsername = intl.formatMessage({
    id: "filtersform.input.username",
  });
  const filtersText = intl.formatMessage({
    id: "filtersform.headerfilters.filters",
  });
  const advancedFiltersText = intl.formatMessage({
    id: "filtersform.headerfilters.advancedfilters",
  });
  const indoorActivity = intl.formatMessage({
    id: "eventCard.indoor",
  });
  const outdoorActivity = intl.formatMessage({
    id: "eventCard.outdoor",
  });

  const minPrice = intl.formatMessage({
    id: "filtersform.range.min",
  });
  const maxPrice = intl.formatMessage({
    id: "filtersform.range.max",
  });

  const typesActivities = [
    {
      name: indoorActivity,
      value: true,
    },
    {
      name: outdoorActivity,
      value: false,
    },
  ];

  const onChangeTags = (values) => {
    setSelectedTags(values);
  };

  const onChangeType = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSelectedUsername = (event) => {
    setSelectedUsername(event.target.value);
  };

  const handleCleanFilters = () => {
    setSelectedPrice({ low: 0, high: 0 });
    setSelectedType(undefined);
    setSelectedTags([]);
    setSelectedUsername("");
  };

  // const handleDisplayFilters = () => {
  //   if (!disabledButtons) {
  //     handleCleanFilters();
  //   }
  //   setDisabledButtons(!disabledButtons);
  // };

  const handleRemoveFilters = (event) => {
    handleCleanFilters();
    if (onRemoveFilters && typeof onRemoveFilters === "function") {
      const noFilters = {};
      onRemoveFilters(event, noFilters);
    }
  };

  const handleApplyFilters = (event) => {
    handleCleanFilters();
    if (onClickFilters && typeof onClickFilters === "function") {
      let requestFilters = {};
      if (selectedType) {
        requestFilters = {
          ...requestFilters,
          indoor: selectedType,
        };
      }
      if (selectedPrice.low >= 0 && selectedPrice.high >= 0) {

        requestFilters = {
          ...requestFilters,
          price: selectedPrice,
        };
      }
      if (selectedTags.length > 0) {
        requestFilters = {
          ...requestFilters,
          tags: selectedTags,
        };
      }

      if(selectedUsername) {
        requestFilters = {
          ...requestFilters, 
          username: selectedUsername
        }
      }
      onClickFilters(event, requestFilters);
    }
  };

  return (
    <Form>
      <div className="mt-3 d-flex flex-column">
        <div>
          
          <Accordion defaultActiveKey="1">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-4 text-dark fw-bolder mb-7"
                eventKey="1"
              >
                <FormattedMessage
                  id="filtersform.filters.price"
                  defaultMessage="Filter"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1" className="mb-11">
                <Card.Body>
                  <FilterRange
                    values={selectedPrice}
                    setValues={setSelectedPrice}
                    min={0}
                    step={0.01}
                    labelTextLow={minPrice}
                    labelTextHigh={maxPrice}
                    preTextLow="€"
                    preTextHigh="€"
                    className="mb-13"
                    classNameFormGroup=""
                    classNameFormLabel="text-dark fw-bolder fs-6"
                    classNameInputGroup="bg-light rounded-pill"
                    classNameInputGroupText="bg-light rounded-pill border-left-0 border-top-0 border-bottom-0 border-right-1 pl-3"
                    classNameFormControl="bg-light rounded-pill border-0 text-right"
                  />{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="3" className="mb-11">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-4 text-dark fw-bolder mb-7"
                eventKey="3"
              >
                <FormattedMessage
                  id="filtersform.filters.type"
                  defaultMessage="Type"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="p-0">
                  <FilterRadioToggleButtons
                    opts={typesActivities}
                    onChange={onChangeType}
                    classNameOpts="flex-grow-0 m-1 btn-sm rounded-pill space"
                    selected={selectedType}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion defaultActiveKey="2" className="mb-11">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-4 text-dark fw-bolder mb-7"
                eventKey="2"
              >
                <FormattedMessage
                  id="filtersform.filters.tags"
                  defaultMessage="Tags"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="p-0">
                  <FilterToggleButtons
                    opts={defaultTags}
                    onChange={onChangeTags}
                    classNameGroup="d-flex flex-row flex-wrap justify-content-start"
                    classNameOpts="flex-grow-0 m-1 btn-sm rounded-pill outline-light tags"
                    selected={selectedTags}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion defaultActiveKey="3">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-4 text-dark fw-bolder mb-7"
                eventKey="3"
              >
                <FormattedMessage
                  id="filtersform.title.username"
                  defaultMessage="Username"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="ml-0 pl-0">
                  <FormControl
                    className="rounded-pill pl-1"
                    placeholder={placeholderUsername}
                    value={selectedUsername}
                    onChange={handleSelectedUsername}
                    type="text"
                  ></FormControl>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="button-filter mb-7 pt-10">
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn reset px-8"
              variant="primary"
              // disabled={disabledButtons}
              onClick={handleCleanFilters}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.clean"
                defaultMessage="Clean"
              />
            </Button>
          </div>
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn submit px-8"
              variant="primary"
              type="submit"
              // disabled={disabledButtons}
              onClick={handleApplyFilters}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.apply"
                defaultMessage="Apply"
              />
            </Button>
            <Button
                className="m-1 btn remove px-8"
              variant="primary"
              // disabled={disabledButtons}
              onClick={handleRemoveFilters}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.remove"
                defaultMessage="Remove"
              />
            </Button>
          </div>
          </div>
        </div>
      </div>
    </Form>
  );
};
