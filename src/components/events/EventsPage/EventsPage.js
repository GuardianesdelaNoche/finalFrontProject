import React from 'react';
import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../layout';
import { CardColumns } from 'react-bootstrap';
import EventsCardsList from './EventsCardsList';

const data = require('./data.json');

function EventsPage() {

  return (
    <div>
      <Layout>
        {/* <CardColumns>
          <Card className="card-stretch">
            <Card.Body>
              <Card.Title className="text-dark fs-3 fw-bolder">Card title that wraps to a new line</Card.Title>
              <Card.Text className="text-description">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>

           
            </Card.Body>
          </Card> */}

          <EventsCardsList events={data}></EventsCardsList>
          {/* <Card className="card-stretch">
            <Card.Body>
              <Card.Title className="text-dark fs-3 fw-bolder">Card title that wraps to a new line</Card.Title>
              <Card.Text className="text-description">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-stretch">
            <Card.Body>
              <Card.Title className="text-dark fs-3 fw-bolder">Card title that wraps to a new line</Card.Title>
              <Card.Text className="text-description">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card> */}
        {/* </CardColumns> */}
      
      </Layout>
    </div>
  );
}

export default EventsPage;
