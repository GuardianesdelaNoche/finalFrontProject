import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLimit } from "../../store/selectors/pagination";
import { paginationSetLimit } from "../../store/actions/pagination";

const ButtonItems = ({ variant = "primary", val, onClick }) => {
    const active = useSelector(getLimit);
  return (
    <Button
      key={val}
      variant={variant}
      active={active === val}
      onClick={onClick(val)}
    >
      Ver {val}
    </Button>
  );
};

const defaultValues = ["10", "20", "50"];

export const PaginationNavStyle = ({ values = defaultValues, ...props}) => {
  const dispatch = useDispatch();

  const onClick = (val) => (ev) => {
      dispatch( paginationSetLimit( val ) )
  };


  return (
    <div {...props}>
      {values.length > 0 && (
        <ButtonGroup>
          {values.map((val) => ButtonItems({ val, onClick }))}
        </ButtonGroup>
      )}
    </div>
  );
};
