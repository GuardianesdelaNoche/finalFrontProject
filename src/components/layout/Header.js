import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { getIsLogged } from '../../store/selectors/auth';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton/AuthButton';
import './Header.css';



function Header({ isLogged }) {
	return (
		<header>

			<Navbar collapseOnSelect expand="lg" bg="light white" variant="light" fixed="top" >
				<Container>
					<Navbar.Brand href="#home" className="logo py-2 pb-7"><img alt="4EVENTS" src="http://isagomez.com/wp-content/uploads/2021/07/logo4eventsPNG.png" className="mh-50px"></img></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="menu">
						<Nav className="me-auto">
							<Nav.Link href="/events/new">
								<FormattedMessage
								id="navbar.item.menu"
								defaultMessage="New Event"
								/>
							</Nav.Link>
						</Nav>
						
						<Nav >
							{isLogged === true  ?
							<Navbar.Text className="signed">
									<a className=" me-2" href="#login">Mark</a>
								<div class="btn btn-icon btn btn-icon btn-sm icon me-2">
									<i class="fas fa-user"></i>
								</div>
							</Navbar.Text>
							 : 
							<Button variant="secundary" className="navbar-btn me-2">
								<Link to="/register">
									<FormattedMessage
										id="button.register.menu"
										defaultMessage="Register"
									/>
								</Link>
							</Button>
							}
							<AuthButton className="navbar-btn" />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
		</header>
	);
}

const mapStateToProps = state => ({
	isLogged: getIsLogged(state)
})



export default connect(mapStateToProps)(Header);
