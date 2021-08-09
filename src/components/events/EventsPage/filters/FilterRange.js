import "rc-tooltip/assets/bootstrap.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Range } from "rc-slider";
import Slider, { SliderTooltip } from "rc-slider";
import { Form, FormControl, Button, InputGroup, Col } from "react-bootstrap";
// import 'rc-slider/assets/index.css';

const initialValue = {
  low: 0,
  high: 0
};

export const FilterRange = ({
  values = initialValue,
  setValues,
  min = 0,
  max = 0,
  step = 0.01
}) => {

  const { low, high } = values;

  const handleLow = (e) => {
    setValues({
      ...values,
      low: +e.target.value,
    });
  };
  const handleHigh = (e) => {
    setValues({
      ...values,
      high: +e.target.value,
    });
  };

  return (
    <div>
      <Form.Group>
        <Form.Label className="text-muted font-weight-light">Mínimo</Form.Label>
        <InputGroup className="bg-light rounded-pill">
          <InputGroup.Text className="bg-light rounded-pill border-left-0 border-top-0 border-bottom-0 border-right-1 pl-3">
            €
          </InputGroup.Text>
          <FormControl
            className="bg-light rounded-pill border-0 text-right"
            type="number"
            min={min}
            step={step}
            value={low}
            onChange={handleLow}
          ></FormControl>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-muted font-weight-light">Máximo</Form.Label>
        <InputGroup className="bg-light rounded-pill">

        <InputGroup.Text className="bg-light rounded-pill border-left-0 border-top-0 border-bottom-0 border-right-1 pl-3">€</InputGroup.Text>
        <FormControl
          className="bg-light rounded-pill border-0  text-right"
          type="number"
          min={min}
          step={step}
          value={high}
          onChange={handleHigh}
        ></FormControl>
        </InputGroup>
      </Form.Group>
    </div>
  );
};
