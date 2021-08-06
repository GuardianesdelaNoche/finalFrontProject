import React from "react";
import T from "prop-types";
import { FormattedMessage } from "react-intl";

import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const defaultTextButton = "Order";
const defaultOptions = [
  { key: "asc", value: "Most recent" },
  {
    key: "des",
    value: "Less recent",
  },
];

const dropdownItem = ({opt, optSelect = "", onSelect}) => {
  const defaultOptText = opt;
  const { key, value } = opt;
  return (
    <Dropdown.Item
      key={key}
      eventKey={key}
      // active={opt === optSelect}
      onSelect={onSelect}
    >
      {/* {value || defaultOptText} */}
      <FormattedMessage
                      id={`sorter.itemText.${key}` }
                      defaultMessage={`${value}`}
                    />
    </Dropdown.Item>
  );
};

export const Sorter = ({
  show,
  textButton,
  options = defaultOptions,
  initialOpt,
  onSelect,
  ...props
}) => {
  return (
    <div {...props}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {/* {textButton || defaultTextButton} */}
          <FormattedMessage
                      id="sorter.ButtonText.order"
                      defaultMessage={`${textButton || defaultTextButton}`}
                    />
        </Dropdown.Toggle>
        {options.length > 0 && (
          <Dropdown.Menu show={show}>
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            {options.map((opt) => dropdownItem({ opt, onSelect }))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

Sorter.propTypes = {
  show: T.bool,
  textButton: T.string,
  options: T.array,
  initialOpt: T.string,
  onSelect: T.func.isRequired,
};
