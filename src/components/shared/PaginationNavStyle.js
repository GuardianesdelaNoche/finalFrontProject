import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";


const ButtonItems = ({ variant = "primary", val, onClick, limit }) => {

  return (
    <Button
      key={val}
      variant={variant}
      active={limit == val}
      onClick={onClick(val)}
    >
      Ver {val}
    </Button>
  );
};

const defaultValues = ["10", "20", "50"];

export const PaginationNavStyle = ({ values = defaultValues , onClick, limit}) => {


  return (
    <div className="p-3 pb-4 d-flex justify-content-end">
      {values.length > 0 && (
        <ButtonGroup>
          {values.map((val) => ButtonItems({ val, onClick, limit }))}
        </ButtonGroup>
      )}
    </div>
  );
};
