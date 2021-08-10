import "rc-tooltip/assets/bootstrap.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Range } from "rc-slider";
import Slider, { SliderTooltip } from "rc-slider";
import { Form, FormControl, Button, InputGroup, Col } from "react-bootstrap";
// import 'rc-slider/assets/index.css';

const initialValue = {
  low: 0,
  high: 0,
};

export const FilterRange = ({
  values = initialValue,
  setValues,
  min = 0,
  max = 0,
  step = 0.01,
  labelTextLow = "",
  labelTextHigh = "",
  preTextLow = "",
  preTextHigh = "",
  classNameFormGroup = "",
  classNameFormLabel = "",
  classNameInputGroup = "",
  classNameInputGroupText = "",
  classNameFormControl = "",
  onChangeLow,
  onChangeHigh,
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
      <Form.Group className={classNameFormGroup}>
        <Form.Label className={classNameFormLabel}>{labelTextLow}</Form.Label>
        <InputGroup className={classNameInputGroup}>
          <InputGroup.Text className={classNameInputGroupText}>
            {preTextLow}
          </InputGroup.Text>
          <FormControl
            className={classNameFormControl}
            type="number"
            min={min}
            step={step}
            value={low}
            onChange={onChangeLow || handleLow}
          ></FormControl>
        </InputGroup>
      </Form.Group>
      <Form.Group className={classNameFormGroup}>
        <Form.Label className={classNameFormLabel}>{labelTextHigh}</Form.Label>
        <InputGroup className={classNameInputGroup}>
          <InputGroup.Text className={classNameInputGroupText}>
            {preTextHigh}
          </InputGroup.Text>
          <FormControl
            className={classNameFormControl}
            type="number"
            min={min}
            step={step}
            value={high}
            onChange={onChangeHigh || handleHigh}
          ></FormControl>
        </InputGroup>
      </Form.Group>
    </div>
  );
};
