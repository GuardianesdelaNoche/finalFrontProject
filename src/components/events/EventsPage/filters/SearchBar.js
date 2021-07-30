import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CloseButton, Button , FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';




export const SearchBar = () => {
  return (
    //   <Form.Group controlId="formBasicEmail">
    //       <div className="block">

    //     <Form.Control type="text" placeholder="Enter an event.." >
    //         </Form.Control>
    //         <CloseButton className=""/>
    //       </div>
    //     <Form.Text className="text-muted">
    //       Search your next event!
    //     </Form.Text>
    //   </Form.Group>

    <InputGroup className="pl-2 mb-3 bg-white p-2 rounded-pill">
      <FormControl
      className="rounded-pill bg-white border-0 pl-2 mr-2"
      type="text"
        placeholder="   Enter an event.."
      />
      <div className="d-flex flex-row justify-content-evenly">
          <div className="rounded-circle align-self-end">
         <Button className="bg-light rounded-circle pl-2 pr-2 pt-1 pb-1 m-1 border-0">
             <VscChromeClose className="text-primary"/>
             </Button>
          </div>
          <div className="rounded-circle align-self-end">
         <Button className="bg-light rounded-circle pl-2 pr-2 pt-1 pb-1 m-1 border-0"><BsSearch className="text-primary" /></Button>
          </div>

      </div>
    </InputGroup>
  );
};
