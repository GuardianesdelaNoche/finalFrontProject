import { Link } from 'react-router-dom';
import {  NavDropdown  } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getIsLogged } from '../../store/selectors/auth';
import AuthButton from '../auth/AuthButton/AuthButton';
import { getUserData } from '../../store/selectors/auth';

import './UserHeader.css';


function HeaderUser({ isLogged, userData }) {
	return (
		<header className="Userheader">
			
					<div className="container d-flex align-items-stretch justify-content-between">
						<div className="d-flex align-items-center">
							<h4 className="text-dark">Dashboard</h4>
						</div>
						<div className="d-flex align-items-center">
						{isLogged === true ?

						<NavDropdown 
						title={
								<span><img src="http://isagomez.com/wp-content/uploads/2021/07/avatar.svg" alt="avatar" width="40px"></img> {userData.nickname}</span>
						} 
						id="nav-dropdown">
							<NavDropdown.Item eventKey="4.1">
								<Link to="/">Home</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey="4.4"><AuthButton className="navbar-btn" /></NavDropdown.Item>
						</NavDropdown>
							:
							''
						}

						</div>
					</div>
			
		</header>
	);
}

const mapStateToProps = state => ({
	isLogged: getIsLogged(state),
	userData: getUserData(state)
})



export default connect(mapStateToProps)(HeaderUser);
