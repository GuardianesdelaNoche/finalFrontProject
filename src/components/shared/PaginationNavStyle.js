import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { BsEye } from "react-icons/bs";

const buttonItems = ({ variant = "primary", active, val }) => {
  return (
    <Button key={val} variant={variant} active={active === val}>
      Ver {val}
    </Button>
  );
};

const defaultValues = ["10", "20", "50"];

export const PaginationNavStyle = ({ values = defaultValues }) => {
  const [active, setActive] = useState(values[0]);

  return (
    <div className="p-3 pb-4 d-flex justify-content-end">
      {values.length > 0 && (
        <ButtonGroup>
          {values.map((val) => buttonItems({ active, val }))}
        </ButtonGroup>
      )}
    </div>
  );
};
