
import React from 'react';



function EventDetail(event) {
	//const { title, photo, description, price, max_places, date, duration, indoor, tags } = event
	console.log(event.title, 'title')
		return (
		<div>
			
			<p>{event.photo}</p>
				<p>{event.title}</p>
				<p>{event.description}</p>
				<p>{event.price}</p>
			{/* <p>{max_places}</p>
			<p>{date}</p>
			<p>{duration}</p>
			<p>{indoor}</p>
			<p>{tags}</p> */}

		</div>
		)
	}


export default EventDetail