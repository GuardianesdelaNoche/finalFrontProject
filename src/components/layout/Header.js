import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton/AuthButton';
import './Header.css';




const isExact = match => match?.isExact;

function Header() {
	return (
		<header>

			<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
				<Container>
					<Navbar.Brand href="#home"><img alt="4EVENTS" src="..."></img></Navbar.Brand>
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
							<Navbar.Text className="signed me-2">
								
								<div class="btn btn-icon btn btn-icon btn-sm icon me-2">
									<i class="fas fa-user"></i>
								</div>
								<a href="#login">Mark Otto</a>
							{/* 	<div class="symbol symbol-55px me-2 mt-1">
									<span class="symbol-label align-items-end">
										<img alt="icon" src="/start-html-free/assets/media/svg/avatars/001-boy.svg" class="mh-40px">
																		</span>
																	</div> */}
								
							</Navbar.Text>
								
						
							<Button variant="secundary" className="navbar-btn me-2">
								<Link to="/register">
									<FormattedMessage
										id="button.register.menu"
										defaultMessage="Register"
									/>
								</Link>
							</Button>
							<AuthButton className="navbar-btn" />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
			{/* <Navbar className="navbar navbar-default" bg="light" variant="light" fixed="top">
				<Container>
					<div className="navbar-header">
						<Navbar.Brand className="navbar-brand" href="/"> 
						
						</Navbar.Brand>
					</div>
					<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
					<Navbar.Collapse>
					
						<Nav className="nav navbar-nav">
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
						</Nav>
						<Nav className="nav navbar-nav navbar-right">
						
							<Button variant="secundary" className="navbar-btn me-2">
								<Link to="/register">
									<FormattedMessage
										id="button.register.menu"
										defaultMessage="Register"
									/>
								</Link> 
							</Button>
							
							<AuthButton className="navbar-btn"/>
						</Nav>


					</Navbar.Collapse>

				</Container>
			</Navbar> */}

		</header>
	);
}

export default Header;
