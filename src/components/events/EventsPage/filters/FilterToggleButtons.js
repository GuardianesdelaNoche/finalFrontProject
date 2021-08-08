import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const CustomToggleButton = (opt) => {
  return (
    <ToggleButton
    key={opt._id}
      id="tbg-btn-1"
      className="flex-grow-0 m-1 btn-sm rounded-pill outline-light"
      // variant="outline-light"
      value={opt.name}
    >
      #{opt.name}
    </ToggleButton>
  );
};

export const FilterToggleButtons = ({opts, onChange }) => {
    console.log('opts', opts);
  return (
    <div>
      <ToggleButtonGroup
        className="d-flex flex-row flex-wrap justify-content-start"
        type="checkbox"
        // value={value}
        onChange={onChange}
      >
          {opts.length > 0 && opts.map(opt => CustomToggleButton(opt))}
        {/* <ToggleButton
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
        </ToggleButton> */}
      </ToggleButtonGroup>
    </div>
  );
};
