import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLimit } from "../../store/selectors/pagination";
import { paginationSetLimit } from "../../store/actions/pagination";
import './PaginationNav.css'



const ButtonItems = ({ variant = "primary", val, onClick, limit }) => {

  return (
    <Button
      key={val}
      variant={variant}
      active={limit == val}
      onClick={onClick(val)}
      className="ms-3"
    >
      Ver {val}
    </Button>
  );
};

const defaultValues = ["10", "20", "50"];

export const PaginationNavStyle = ({ values = defaultValues , onClick, limit}) => {

   return (
    <div >
      {values.length > 0 && (
        <ButtonGroup>
          {values.map((val) => ButtonItems({ val, onClick, limit }))}
        </ButtonGroup>
      )}
    </div>
  );
};
