import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { connect} from 'react-redux';
import { getIsLogged } from '../../store/selectors/auth';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton/AuthButton';
import { getUserData } from '../../store/selectors/auth';
import { useIntl } from 'react-intl';

import './Header.css';

function Header({ isLogged, userData }) {
	const intl = useIntl();
	return (
		<header>

			<Navbar collapseOnSelect expand="lg" bg="light white" variant="light" fixed="top" >
				<Container>
					<Navbar.Brand href="#home" className="logo py-2 pb-7"><img alt="4EVENTS" src="http://isagomez.com/wp-content/uploads/2021/07/logo4eventsPNG.png" atl="logo" className="mh-50px"></img></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="menu">
						<Nav className="me-auto">
							{isLogged && <Link to="/event/new">
								<FormattedMessage
								id="navbar.item.menu"
								defaultMessage="New Event"
								/>
							</Link>}
						</Nav>
						
						<Nav >
							{isLogged === true  ?
								<NavDropdown
									title={
										<span><img src="http://isagomez.com/wp-content/uploads/2021/07/avatar.svg" alt="avatar" width="40px"></img> {userData.nickname}</span>
									}
									id="nav-dropdown">
									<NavDropdown.Item eventKey="4.1">
										<Link to="/user">{intl.formatMessage({ id: 'header.menu.myprofile'})}</Link>
									</NavDropdown.Item>
								

									<NavDropdown.Divider />
									<NavDropdown.Item eventKey="4.4"><AuthButton className="navbar-btn" /></NavDropdown.Item>
								</NavDropdown>
							 : 
							 <div>
									<Button variant="secundary" className="navbar-btn me-2">
										<Link to="/register">
										<FormattedMessage
											id="button.register.menu"
											defaultMessage="Register"
										/>
									</Link>
								</Button>
								
									<AuthButton className="navbar-btn" />
								
							</div>
							}
							
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
		</header>
	);
}

const mapStateToProps = state => ({
	isLogged: getIsLogged(state),
	userData: getUserData(state)
})



export default connect(mapStateToProps)(Header);
