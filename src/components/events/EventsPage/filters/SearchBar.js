import T from "prop-types";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

const defaultText = "";

export const SearchBar = ({
  text,
  onClearButton,
  onClickSearch,
  onChangeSearch,
}) => {
  // const initialText = text || defaultText;

  const [inputText, setInputText] = useState(text);

  const handleClearButton = (event) => {
    setInputText('');
    if(onClearButton && typeof onClearButton === 'function'){
      onClearButton(event, '');
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSearch = (event) => {
    onClickSearch(event, inputText);
  };

  return (
    <Form onSubmit={handleSearch}>
      <InputGroup className="pl-2 mb-3 bg-white p-2 rounded-pill">
        <FormControl
          className="rounded-pill bg-white border-0 pl-2 mr-2"
          type="text"
          placeholder="   Enter an event.."
          value={inputText}
          onChange={onChangeSearch || handleChange}
        />
        <div className="d-flex flex-row justify-content-evenly">
          <div className="rounded-circle align-self-end">
            {(inputText.trim() !== '') && <Button
              className="bg-light rounded-circle pl-2 pr-2 pt-1 pb-1 m-1 border-0"
              onClick={onClearButton || handleClearButton}
            >
              <VscChromeClose className="text-primary" />
            </Button>}
          </div>
          <div className="rounded-circle align-self-end">
            <Button
              className="bg-light rounded-circle pl-2 pr-2 pt-1 pb-1 m-1 border-0"
              // onClick={handleSearch}
              id="searchButton"
              type="submit"
              disabled={inputText.trim() === ''}
            >
              <BsSearch className="text-primary" />
            </Button>{" "}
          </div>
        </div>
      </InputGroup>
    </Form>
  );
};

SearchBar.propTypes = {
  text: T.string,
  onClearButton: T.func,
  onClickSearch: T.func.isRequired,
  onChangeSearch: T.func,
};
