import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './Header.css';

const isExact = match => match?.isExact;

function Header() {
	return (
		<header>
			<Navbar bg="light" variant="light" fixed="top">
				<Container>
					<Navbar.Brand href="/">AppName</Navbar.Brand>
					<Nav className="me-auto">
						
						<NavLink
							to="/events/new"
							className="me-2"
							isActive={isExact}
						>
							 New Event
						</NavLink>
						<button className="btn btn-light me-2">Register</button>
						<button className="btn btn-primary ">Login</button>
					</Nav>
				</Container>
			</Navbar>

		</header>
	);
}

export default Header;
