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
      onChange={onChange}
      className={className}
    >
      {opt.name}
    </ToggleButton>
  );
};

export const FilterRadioToggleButtons = ({
  opts,
  classNameGroup,
  classNameOpts,
  onChange,
  selected,
}) => {
  let selectedBoolean = undefined;
  if (selected === "true") {
    selectedBoolean = true;
  } else if (selected === "false") {
    selectedBoolean = false;
  }

  return (
    <ToggleButtonGroup
      className={classNameGroup}
      type="radio"
      name="radio"
      value={selectedBoolean}
    >
      {opts.length > 0 &&
        opts.map((opt, i) =>
          customToggleButton(opt, classNameOpts, onChange, i, selected)
        )}
    </ToggleButtonGroup>
  );
};
