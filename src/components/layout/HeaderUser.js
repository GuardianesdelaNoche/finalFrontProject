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
								<span><img src="http://isagomez.com/wp-content/uploads/2021/07/avatar.svg" alt="avatar" width="40px"></img></span>
						} 
						id="nav-dropdown">
							
							<NavDropdown.Header >
								<div className="d-flex align-items-center bgi-no-repeat rounded-top-user popup-user">
									<div className="symbol symbol-45px mx-3 py-5">
										<span className="symbol-label bg-primary align-items-end">
										{/* 	<img alt="Logo" src="/start-html-free/assets/media/svg/avatars/001-boy.svg" class="mh-35px" /> */}
										</span>
									</div>

									<div className="">
										<span className="text-white fs-4">Hello, {userData.nickname}</span>
										<span className="text-white fs-7 d-block mr-4">CRM Product Designer</span>
									</div>

								</div>
							</NavDropdown.Header >

							<div className="row">
								<div className="col-sm d-flex">
									<div className="text-center py-10 btn btn-active-color-primary rounded-0">
										<i class="fas fa-th-large"></i>
										<Link className="fw-bolder fs-6 d-block pt-3" to="/">Home</Link>
									</div>
								</div>
								<div className="col-sm d-flex">
									<div className="text-center py-10 btn btn-active-color-primary rounded-0">
											<i class="fas fa-user-alt"></i>
											<Link className="fw-bolder fs-6 d-block pt-3" to="/">Profile</Link>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm d-flex">
									<div className="text-center py-10 btn btn-active-color-primary rounded-0">
										<Link to="/">
										<i class="fas fa-sliders-h"></i>
										<span className="fw-bolder fs-6 d-block pt-3" >Events</span>
										</Link>
									</div>
								</div>
								<div className="col-sm d-flex">
									<div className="text-center py-10 btn btn-active-color-primary rounded-0">
										<i class="fas fa-sign-out-alt"></i>
										<Link className="fw-bolder fs-6 d-block pt-3" to="/">Logout</Link>
									</div>
								</div>
							</div>
						
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
