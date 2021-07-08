import React from 'react';
import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../layout';
import { CardColumns } from 'react-bootstrap';
import EventsCardsList from './EventsCardsList';
import EventsCardsEmptyList from './EventsCardsEmptyList';


const events = require('./data.json').events;
const nodata = [];


function EventsPage() {

  console.log(events.length);
  console.log(nodata.length);
  return (
    <div>
      <Layout>
      { (events.length > 0) ?  <EventsCardsList events={events}></EventsCardsList> : <EventsCardsEmptyList eventsCount={0}></EventsCardsEmptyList> } 
      </Layout>
    </div>
  );
}

export default EventsPage;
