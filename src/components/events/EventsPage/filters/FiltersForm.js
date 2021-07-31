import React from "react";
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
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { BiSlider } from "react-icons/bi";

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

export const FiltersForm = () => {
  return (
    <Form>
      <div className="pt-3 d-flex flex-column">
        <div className="mb-1 p-4 bg-white rounded-top">
          <BiSlider></BiSlider>
          <span className="ml-2">Filtros</span>
        </div>
        {/* <FilterCard title={<Form.Label>Username</Form.Label>} 
        body={<InputSearchBodyCard ></InputSearchBodyCard>}
      ></FilterCard> */}
        {/* <Accordion className="accordion-flush">
        <FilterCard className="pt-1" title="Localidad" body="body" />
      </Accordion> */}
        <Accordion defaultActiveKey="0">
          <Card className="mb-1 pl-3 rounded-0 fs-6">
            <Accordion.Toggle
              as={Card.Text}
              className="fs-6 text-muted m-0 pt-2 pb-2"
              eventKey="0"
            >
              Username
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="ml-0 pl-0">
                <FormControl className="rounded-pill border-0 pl-1" placeholder="Enter an username..."></FormControl>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Card className="mb-1 pl-3 rounded-0 fs-6">
            <Accordion.Toggle
              as={Card.Text}
              className="fs-6 text-muted m-0 pt-2 pb-2"
              eventKey="1"
            >
              Price
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Range
                  onChange={(value) => {
                    console.log(value);
                  }}
                  min={0}
                  max={1000}
                />
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
              Tipo
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="p-0">
                <ToggleButtonGroup
                              className="d-flex flex-row flex-wrap justify-content-evenly"
                              type="radio"
                              name="radio"
                >
                  {/* {radios.map((radio, idx) => ( */}
                    <ToggleButton
                      // key={idx}
                      type="radio"
                      variant="primary"
                      name="radio"
                      value={1}
                      // checked={radioValue === radio.value}
                      checked={true}
                      onChange={(e) => console.log('Indoor')}
                      className="flex-grow-0 m-1 btn-sm rounded-pill"
                    >
                      {/* {radio.name} */}
                      Indoor
                    </ToggleButton>
                    <ToggleButton
                      // key={idx}
                      type="radio"
                      variant="primary"
                      name="radio"
                      value={2}
                      // checked={radioValue === radio.value}
                      checked={false}
                      onChange={(e) => console.log('Outdoor')}
                      className="flex-grow-0 m-1 btn-sm rounded-pill"
                    >
                      {/* {radio.name} */}
                      Outdoor
                    </ToggleButton>
                  {/* ))} */}
                </ToggleButtonGroup>
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
              Tags
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="p-0">
                <ToggleButtonGroup
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
                </ToggleButtonGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div className="d-flex flex-row justify-content-center pt-2 pb-2 bg-white">
          <Button className="m-1 btn-sm" variant="primary" type="submit">
            Filtrar
          </Button>
          <Button className="m-1 btn-sm" variant="primary" type="submit">
            Limpiar
          </Button>
        </div>
      </div>
    </Form>
  );
};
