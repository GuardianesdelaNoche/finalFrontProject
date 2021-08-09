import "rc-tooltip/assets/bootstrap.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Range } from "rc-slider";
import Slider, { SliderTooltip } from "rc-slider";
import { Form, FormControl, Button, InputGroup, Col } from "react-bootstrap";
// import 'rc-slider/assets/index.css';

const initialValue = [0, 100];

export const FilterRange = ({
  display = false,
  defaultValue = initialValue,
  setter,
  setState,
  displayValues,
  tooltip,
  min,
  max,
  onChange,
  allowCross,
  onAfterChange,
}) => {
  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);

  console.log("displayValues", displayValues);

  // const [state, setState] = useState({
  //   lowerBound: 20,
  //   upperBound: 40,
  //   value: [20, 40],
  // });

  const { lowerBound, upperBound, value } = displayValues;
  const handleApply = () => {
    // const { lowerBound, upperBound } = displayValues;
    // setState({
    //   ...displayValues,
    //   value: [lowerBound, upperBound],
    // });
    setter();
    console.log("apply", displayValues);
  };
  const handleMin = (e) => {
    setState({
      ...displayValues,

      lowerBound: +e.target.value,
    });
    setter();
  };
  const handleMax = (e) => {
    setState({
      ...displayValues,
      upperBound: +e.target.value,
    });
    setter();
  };
  const onSliderChange = () => {
    console.log("onsliderchange", value);
    setState({
      ...displayValues,
      value,
    });
  };

  return (
    <div>
      {/* <span>{displayValues[0]}</span>
      <span>{displayValues[1]}</span> */}
      {/* <input type="number" min={0} value={mmin} onChange={val1 => {console.log(val1.target.value);setmMin(val1.target.value)}} />
      <input type="number" min={0} value={mmax} onChange={val2 => {console.log(val2.target.value);setmMax(val2.target.value)}} /> */}

      {/* <Range
      // onChange={(values)=>
      //   { setvals(values)
      //     console.log('onchange', values)
      
      // }}
      onChange={onChange}
      min={min}
      max={max}
      // defaultValue={defaultValue}
      // value={vals}
      value={displayValues}
      // value={displayValues}
      tipFormatter={tooltip}
      allowCross={allowCross}
      // onAfterChange={onAfterChange}
      /> */}

      <Form.Group>
        <Form.Label className="text-muted font-weight-light">Mínimo</Form.Label>
        <InputGroup className="bg-light rounded-pill">
          <InputGroup.Text className="bg-light rounded-pill border-left-0 border-top-0 border-bottom-0 border-right-1 pl-3">
            €
          </InputGroup.Text>
          <FormControl
            className="bg-light rounded-pill border-0 text-right"
            type="number"
            min={0}
            step={0.01}
            value={lowerBound}
            onChange={handleMin}
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
          min={0}
          max={lowerBound}
          step={0.01}
          value={upperBound}
          onChange={handleMax}
        ></FormControl>
        </InputGroup>

      </Form.Group>
      <Button
        type="button"
        className="m-1 btn-sm rounded-pill outline-light"
        onClick={handleApply}
      >
        Apply
      </Button>
      {/* {display && (<button type="button" onClick={handleApply}>
          Apply
        </button>
        <Range allowCross={false} value={value} onChange={onSliderChange} />)} */}
    </div>
  );
};
