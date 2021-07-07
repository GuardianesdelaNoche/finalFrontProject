import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './Header.css';

const isExact = match => match?.isExact;

function Header() {
	return (
		<header>
			<Navbar bg="light" variant="light" fixed="top">
				<Container>
					<Navbar.Brand href="#home">AppName</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink
							to="/events"
							activeClassName="selected"
							isActive={isExact}
						>
							Events 
						</NavLink>
						<NavLink
							to="/events/new"
							activeClassName="selected"
							isActive={isExact}
						>
							 New Events 
						</NavLink>
					</Nav>
				</Container>
			</Navbar>

		</header>
	);
}

export default Header;
