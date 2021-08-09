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
  // const placeholderUsername = () => {return ( <FormattedMessage
  //   id="filtersform.username"
  //   defaultMessage="Username"
  // />)};

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [price, setPrice] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState(false);
  // const totaltags = useSelector(getEventsTags);

  const [state, setState] = useState({
    lowerBound: 20,
    upperBound: 40,
    value: [20, 40],
  });

  const intl = useIntl();
  const placeholderUsername = intl.formatMessage({
    id: "filtersform.input.username",
  });
  const filtersText = intl.formatMessage({
    id: "filtersfrom.headerfilters.filters",
  });
  const advancedFiltersText = intl.formatMessage({
    id: "filtersfrom.headerfilters.advancedfilters",
  });
  const indoorActivity = intl.formatMessage({
    id: "eventCard.indoor",
  });
  const outdoorActivity = intl.formatMessage({
    id: "eventCard.outdoor",
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
    console.log(values);
    setSelectedTags(values);
  };

  const onChangeType = (event) => {
    console.log("child value", event.target.value);
    setSelectedType(event.target.value);
  };

  const tooltipPrice = (value) => `${value}€`;

  // const onChangePrice = (values) => setPrice(values);
  const onChangePrice = (values) => {
    // setPrice(values);
    console.log('onchangeprice',values);
  };
  const onAfterChangePrice = (values) => {
    // setPrice(values);
    console.log('onafterchangeprice',values);
  };

  const setter = () => {
    console.log('poststate', state)
  }

  console.log("selectedTags", selectedTags);
  console.log("selectedType", selectedType);
  // console.log("price", price);
  return (
    <Form>
      <div className="mt-3 d-flex flex-column shadow-sm">
        <div className="bg-light bg-gradient border border-4">
          <div className="mb-1 p-4 bg-white rounded-top">
            <BiSlider></BiSlider>
            <span className="ml-2">{filtersText}</span>
          </div>
          {/* <FilterCard title={<Form.Label>Username</Form.Label>} 
        body={<InputSearchBodyCard ></InputSearchBodyCard>}
      ></FilterCard> */}
          {/* <Accordion className="accordion-flush">
        <FilterCard className="pt-1" title="Localidad" body="body" />
      </Accordion> */}
          {/* <Accordion defaultActiveKey="0">
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
        </Accordion> */}
          <Accordion defaultActiveKey="1">
            <Card className="mb-1 pl-3 rounded-0 fs-6">
              <Accordion.Toggle
                as={Card.Text}
                className="fs-6 text-muted m-0 pt-2 pb-2"
                eventKey="1"
              >
                <FormattedMessage
                  id="filtersfrom.filters.price"
                  defaultMessage="Filter"
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {/* <Range
                    onChange={(value) => {
                      console.log(value);
                    }}
                    min={0}
                    max={1000}
                    tipFormatter={value => `${value}`}
                  /> */}
                  <FilterRange
                    // value={price}
                    displayValues={state}
                    setState={setState}
                    setter={setter}
                    tooltip={tooltipPrice}
                    min={0}
                    max={1000}
                    onChange={onChangePrice}
                    allowCross={false}
                    onAfterChange={onAfterChangePrice}
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
                  id="filtersfrom.filters.type"
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
                  {/* <ToggleButtonGroup
                    className="d-flex flex-row flex-wrap justify-content-evenly"
                    type="radio"
                    name="radio"
                  >
                    <ToggleButton
                      // key={idx}
                      type="radio"
                      variant="primary"
                      name="radio"
                      value={1}
                      // checked={radioValue === radio.value}
                      checked={true}
                      onChange={(e) => console.log("Indoor")}
                      className="flex-grow-0 m-1 btn-sm rounded-pill"
                    >
                      <FormattedMessage
                        id="eventCard.indoor"
                        defaultMessage="Indoor"
                      />
                    </ToggleButton>
                    <ToggleButton
                      // key={idx}
                      type="radio"
                      variant="primary"
                      name="radio"
                      value={2}
                      // checked={radioValue === radio.value}
                      checked={false}
                      onChange={(e) => console.log("Outdoor")}
                      className="flex-grow-0 m-1 btn-sm rounded-pill"
                    >
                      <FormattedMessage
                        id="eventCard.outdoor"
                        defaultMessage="Outdoor"
                      />
                    </ToggleButton>
                  </ToggleButtonGroup> */}
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
                  id="filtersfrom.filters.tags"
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
                  {/* <ToggleButtonGroup
                    className="d-flex flex-row flex-wrap justify-content-start"
                    type="checkbox"
                    // value={value}
                    onChange={(val) => console.log(val)}
                  >
                    <ToggleButton
                      id="tbg-btn-1"
                      className="flex-grow-0 m-1 btn-sm rounded-pill outline-light"
                      // variant="outline-light"

                      value={1}
                    >
                      #playa
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-btn-2"
                      className="flex-grow-0 m-1 btn-sm rounded-pill"
                      // variant="outline-light"
                      value={2}
                    >
                      #tenis
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-btn-3"
                      className="flex-grow-0 m-1 btn-sm rounded-pill"
                      // variant="outline-light"
                      value={3}
                    >
                      #football
                    </ToggleButton>
                  </ToggleButtonGroup> */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
            <Button
              className="m-1 btn-sm"
              variant="primary"
              type="submit"
              disabled={disabledButtons}
            >
              <FormattedMessage
                id="filtersfrom.buttonsfilters.filters"
                defaultMessage="Filter"
              />
            </Button>
            <Button
              className="m-1 btn-sm"
              variant="primary"
              disabled={disabledButtons}
            >
              <FormattedMessage
                id="filtersfrom.buttonsfilters.clean"
                defaultMessage="Clean"
              />
            </Button>
          </div>
        </div>
        <div className="mt-2 shadow-sm bg-light bg-gradient border border-4">
          <div className="mb-1 p-4 bg-white rounded-top shadow-sm">
            <BiSlider></BiSlider>
            <span className="ml-2">{advancedFiltersText}</span>
          </div>
          {/* <FilterCard title={<Form.Label>Username</Form.Label>} 
        body={<InputSearchBodyCard ></InputSearchBodyCard>}
      ></FilterCard> */}
          {/* <Accordion className="accordion-flush">
        <FilterCard className="pt-1" title="Localidad" body="body" />
      </Accordion> */}

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
                id="filtersfrom.buttonsfilters.filters"
                defaultMessage="Filter"
              />
            </Button>
            <Button
              className="m-1 btn-sm"
              variant="primary"
              disabled={!disabledButtons}
            >
              <FormattedMessage
                id="filtersfrom.buttonsfilters.clean"
                defaultMessage="Clean"
              />
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};
