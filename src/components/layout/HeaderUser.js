import { Link } from 'react-router-dom';
import {  NavDropdown  } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getIsLogged } from '../../store/selectors/auth';
import { getUserData } from '../../store/selectors/auth';
import { FormattedMessage } from 'react-intl';
import AuthButton from '../auth/AuthButton/AuthButton';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
import { updateIntl } from 'react-intl-redux';
import { Nav } from 'react-bootstrap';
import './UserHeader.css';


function HeaderUser({ isLogged, userData }) {
	const intl = useIntl();
	const dispatch = useDispatch();
	const handleChangeLanguage = lang => {
		let locale; 
		switch (lang) {
			case 'es-ES':
				locale = {
					locale: "es-ES",
					messages: Spanish
				}
				break;				
			default:		
				locale = {
				locale: "en-EN",
				messages: English
				}

		};
		
		dispatch(updateIntl(locale));
	}
	return (
		<header className="Userheader">
			
					<div className="container d-flex align-items-stretch justify-content-between mobile-space">
						<div className="d-flex align-items-center">
							<h4 className="text-dark">
							<FormattedMessage
								id="header.popups.title"
							defaultMessage="My Dashboard"
							/>
							</h4>
						</div>
						
						<Nav className="me-auto">
							
							
					
						</Nav>

						<div className="d-flex align-items-center">						

						<span className="mr-2">
						<button onClick={() => handleChangeLanguage('en-EN')} className="symbol symbol-20px "> <img src="/img/English.svg" onClick={() => handleChangeLanguage('en-EN')}  className="rounded-1" alt={intl.formatMessage({ id: 'header.menu.eng' })} ></img>  </button>
							<button onClick={() => handleChangeLanguage('es-ES')} className="symbol symbol-20px "> <img src="/img/Spain.svg" className="rounded-1" alt={intl.formatMessage({ id: 'header.menu.esp'})}></img> </button>
						</span>
						{isLogged === true ?

						
						
						<NavDropdown 
							title={
								<span><img src="/img/profile.svg" alt="avatar"></img></span>
						} 
						id="nav-dropdown">
							
							<NavDropdown.Header >
								<div className="d-flex align-items-center bgi-no-repeat rounded-top-user popup-user">
									<div className="symbol symbol-45px mx-3 py-5">
										<span className="symbol-label bg-primary align-items-end">
											<img alt="Logo" src={`https://services.4events.net/images/photoUser/${userData.image}`} width="40px" height="40px" className="mh-35px" />
										</span>
									</div>

									<div className="">
											<span className="text-white fs-4">
											<FormattedMessage
												id="header.popups.hello"
												defaultMessage="Hello"
											/>,{userData.nickname}</span>
										<span className="text-white fs-7 d-block mr-4">
											<FormattedMessage
												id="header.popups.welcome"
												defaultMessage="Welcome to 4Events"
											/>
											</span>
									</div>

								</div>
							</NavDropdown.Header >

							<div className="row row-cols-2 g-0">
								
								<div className="border-bottom border-end text-center py-10 btnrounded-0">
									<Link className="fs-6 d-block user-title-menu" to="/">
										
										<img src="/img/icon-Home.svg" />
										
										<span className="d-block pt-3">
											<FormattedMessage
												id="header.popups.icon1"
												defaultMessage="Home"
											/>
										</span>
									</Link>
								</div>
								
								
								<div className="border-bottom text-center py-10 rounded-0">
									
									<Link className="fs-6 d-block user-title-menu" to="/user">
									
										<img src="/img/profile.svg" />
										<span className="d-block pt-3">
											<FormattedMessage
												id="header.popups.icon2"
												defaultMessage="My Profile"
											/>
										</span>
									</Link>
									</div>

								<div className="border-end  text-center py-10 rounded-0">
									<Link className="fs-6 d-block user-title-menu" to="/event/New">
										<img src="/img/icon-Edit.svg" />
										<span className="d-block pt-3">
											<FormattedMessage
												id="header.popups.icon3"
												defaultMessage="New Events"
											/>
											</span>
										</Link>
									</div>

								<div className="text-center py-10 rounded-0">
									<Link className="fs-6 d-block user-title-menu">
										<img src="/img/icon-signout.svg" />
										<span className="d-block pt-3" to="/">
											<AuthButton className="navbar-btn" />
										</span>
									</Link>
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
