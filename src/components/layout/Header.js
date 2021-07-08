import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Button from '../shared/Button';

import './Header.css';

const isExact = match => match?.isExact;

function Header() {
	return (
		<header>
			<Navbar bg="light" variant="light" fixed="top">
				<Container>
					<Navbar.Brand href="/">4EVENTS</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink
							to="/events/new"
							className="menu-item"
							isActive={isExact}
						>
							<FormattedMessage
								id="navbar.item.menu"
								defaultMessage="New Event"
							/>
							
						</NavLink>
						
						<Button variant="secundary" className="me-2">
							<Link to="/register">
								<FormattedMessage
									id="button.register.menu"
									defaultMessage="Register"
								/>
							</Link> 
						</Button>
						
						<Button variant="primary">
							<Link to="/login">
								<FormattedMessage
									id="button.login.menu"
									defaultMessage="Login"
								/>
							</Link>
						</Button>
					</Nav>
				</Container>
			</Navbar>

		</header>
	);
}

export default Header;
