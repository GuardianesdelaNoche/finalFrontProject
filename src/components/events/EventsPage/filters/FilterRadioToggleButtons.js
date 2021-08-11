import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const customToggleButton = (opt, className, onChange, i, selected) => {

  return (
    <ToggleButton
      key={opt.value}
      type="radio"
      variant="primary"
      name="radio"
      value={opt.value}
      // checked={opt.value=== selected}
    //   checked={true}
    //   onChange={()=>console.log('selected type', opt.name, opt.value)}
    onChange={onChange}
    //   className="flex-grow-0 m-1 btn-sm rounded-pill"
    className={className}
    >
      {/* <FormattedMessage id="eventCard.indoor" defaultMessage="Indoor" /> */}
    {opt.name}
    </ToggleButton>
  );
};

export const FilterRadioToggleButtons = ({
  opts,
  classNameGroup,
  classNameOpts,
  onChange,
  selected
}) => {
  let selectedBoolean = undefined
  if(selected === 'true'){
    selectedBoolean = true;
  }else if(selected === 'false'){
    selectedBoolean = false;
  }

  return (
    <ToggleButtonGroup
    //   className="d-flex flex-row flex-wrap justify-content-evenly"
    className={classNameGroup}
      type="radio"
      name="radio"
      value={selectedBoolean}
    >
        {opts.length > 0 && opts.map((opt, i) => customToggleButton(opt, classNameOpts, onChange, i, selected))}
      {/* {radios.map((radio, idx) => ( */}
      {/* <ToggleButton
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
        <FormattedMessage id="eventCard.indoor" defaultMessage="Indoor" />
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
        <FormattedMessage id="eventCard.outdoor" defaultMessage="Outdoor" />
      </ToggleButton> */}
      {/* ))} */}
    </ToggleButtonGroup>
  );
};
