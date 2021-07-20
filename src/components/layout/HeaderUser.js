import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { getIsLogged } from '../../store/selectors/auth';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton/AuthButton';
import './UserHeader.css';



function HeaderUser({ isLogged }) {
	return (
		<header className="Userheader">
			
					<div className="container d-flex align-items-stretch justify-content-between">
						<div className="d-flex align-items-center">
							<h4 className="text-dark">Dashboard</h4>
						</div>
						<div className="d-flex align-items-center">

						{isLogged === true ?
					
							<Nav className="avatar">
								<a className="me-2">Mark</a>
								
								<Image src="http://isagomez.com/wp-content/uploads/2021/07/avatar.svg" roundedCircle />


								
							</Nav>
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
					
						</div>
					</div>
			
		</header>
	);
}

const mapStateToProps = state => ({
	isLogged: getIsLogged(state)
})



export default connect(mapStateToProps)(HeaderUser);
