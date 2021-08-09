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

// const InputSearchBodyCard = ({ ...props }) => {
//   return (
//     <Form.Group {...props} controlId="filterformusername">
//       <Form.Control type="text" placeholder="Username" />
//       <Form.Text className="text-muted">Get event´s user.</Form.Text>
//     </Form.Group>
//   );
// };

// const InputSearchLabelCard = ({ text }) => {
//   return <Form.Label>{text}</Form.Label>;
// };

const typeActivity = "Indoor";

export const FiltersForm = ({ tags }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [disabledButtons, setDisabledButtons] = useState(false);

  const [price, setPrice] = useState({
    low: 0,
    high: 0,
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

  return (
    <Form>
      <div className="mt-3 d-flex flex-column shadow-sm">
        <div className="bg-light bg-gradient border border-4">
          <div className="mb-1 p-4 bg-white rounded-top">
            <BiSlider></BiSlider>
            <span className="ml-2">{filtersText}</span>
          </div>
          <Accordion defaultActiveKey="1">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-6 text-muted m-0 pt-2 pb-2"
                eventKey="1"
              >
                <FormattedMessage
                  id="filtersform.filters.price"
                  defaultMessage="Filter"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <FilterRange
                    values={price}
                    setValues={setPrice}
                    min={0}
                    step={0.01}
                  />{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="3">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-6 text-muted m-0 pt-2 pb-2"
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
                    classNameGroup="d-flex flex-row flex-wrap justify-content-evenly"
                    classNameOpts="flex-grow-0 m-1 btn-sm rounded-pill"
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion defaultActiveKey="2">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-6 text-muted m-0 pt-2 pb-2"
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
                    opts={tags}
                    onChange={onChangeTags}
                    classNameGroup="d-flex flex-row flex-wrap justify-content-start"
                    classNameOpts="flex-grow-0 m-1 btn-sm rounded-pill outline-light"
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn-sm"
              variant="primary"
              disabled={disabledButtons}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.clean"
                defaultMessage="Clean"
              />
            </Button>
          </div>
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn-sm"
              variant="primary"
              type="submit"
              disabled={disabledButtons}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.apply"
                defaultMessage="Apply"
              />
            </Button>
            <Button
              className="m-1 btn-sm"
              variant="primary"
              disabled={disabledButtons}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.remove"
                defaultMessage="Remove"
              />
            </Button>
          </div>
        </div>
        <div className="mt-2 shadow-sm bg-light bg-gradient border border-4">
          <div className="mb-1 p-4 bg-white rounded-top shadow-sm">
            <BiSlider></BiSlider>
            <span className="ml-2">{advancedFiltersText}</span>
          </div>
          <Accordion onSelect={() => setDisabledButtons(!disabledButtons)}>
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-6 text-muted m-0 pt-2 pb-2"
                eventKey="0"
              >
                <FormattedMessage
                  id="filtersform.title.username"
                  defaultMessage="Username"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="ml-0 pl-0">
                  <FormControl
                    className="rounded-pill border-0 pl-1"
                    placeholder={placeholderUsername}
                  ></FormControl>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn-sm"
              variant="primary"
              type="submit"
              disabled={!disabledButtons}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.clean"
                defaultMessage="Clean"
              />
            </Button>
          </div>
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn-sm"
              variant="primary"
              type="submit"
              disabled={!disabledButtons}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.apply"
                defaultMessage="Apply"
              />
            </Button>
            <Button
              className="m-1 btn-sm"
              variant="primary"
              disabled={!disabledButtons}
            >
              <FormattedMessage
                id="filtersform.buttonsfilters.remove"
                defaultMessage="Remove"
              />
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};
