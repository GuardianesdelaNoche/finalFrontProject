import 'rc-tooltip/assets/bootstrap.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Range } from "rc-slider";
import Slider, { SliderTooltip } from 'rc-slider';
// import 'rc-slider/assets/index.css';

const initialValue = [0,100]

export const FilterRange = ({ defaultValue = initialValue, tooltip, min, max, onChange, allowCross }) => {

  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);

  return (
    <Range
      onChange={onChange}
      min={min}
      max={max}
      defaultValue={defaultValue}
      tipFormatter={tooltip}
      allowCross={allowCross}
    />
  );
};
