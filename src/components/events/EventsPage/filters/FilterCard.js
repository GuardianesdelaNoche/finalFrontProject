import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export const FilterCard = () => {
    return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
    )
}
