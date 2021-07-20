import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

import { ImSearch } from "react-icons/im";
import { TiDeleteOutline } from "react-icons/ti";


export const Searchbar = () => {
  return (
    // <Form.Group controlId="formBasicEmail">
    // <HiOutlineSearch />
    //   <Form.Control type="text" placeholder="Event" />
    // </Form.Group>
    <InputGroup>
      <Form.Control type="text" placeholder="Search here.." />
      <Button variant="light">
          <TiDeleteOutline />
      </Button>
      <Button variant="light">
          <ImSearch />
      </Button>
    </InputGroup>
  );
};
