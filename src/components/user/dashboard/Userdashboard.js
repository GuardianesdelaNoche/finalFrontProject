import React from 'react';
import UserLayout from '../../layout/UserLayout';
import { Card } from "react-bootstrap";

function UserDashboard() {
	return (
		<div>
			<UserLayout>
				<div className="row g-0 g-xl-5 g-xxl-8">
					<div className="col-xl-4">
						<Card>
							<Card.Body>
								<Card.Title></Card.Title>
								
								
								<div className="d-flex flex-row justify-content-between">
									<Card.Subtitle className="mb-2 text-muted">
										
									</Card.Subtitle>
									<Card.Subtitle className="mb-2 text-muted">
										
									</Card.Subtitle>
								</div>
						
							</Card.Body>
   					 	</Card>
					</div>

					<div className="col-xl-8">
						<Card>
							<Card.Body>
								<Card.Title></Card.Title>
							
								<div className="d-flex flex-row justify-content-between">
									<Card.Subtitle className="mb-2 text-muted">

									</Card.Subtitle>
									<Card.Subtitle className="mb-2 text-muted">

									</Card.Subtitle>
								</div>

							</Card.Body>
						</Card>
					</div>
				</div>

			</UserLayout>
		</div>
	)
}

export default UserDashboard