import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { connect} from 'react-redux';
import { getIsLogged } from '../../store/selectors/auth';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton/AuthButton';
import { getUserData } from '../../store/selectors/auth';
import { useIntl } from 'react-intl';
import { updateIntl } from 'react-intl-redux';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
import { useDispatch } from 'react-redux';

import './Header.css';


function Header({ isLogged, userData }) {
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
		<header>

			<Navbar collapseOnSelect expand="lg" bg="light white" variant="light" fixed="top" >
				<Container>
					<Navbar.Brand href="/" className="logo py-2 pb-7"><img alt="4EVENTS" src="/img/logo.png" atl="logo" className="mh-50px"></img></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="menu">
						<Nav className="me-auto">
	
						
							<Link onClick={() => handleChangeLanguage('en-EN')} className="symbol symbol-20px ms-2"> <img src="/img/English.svg" className="rounded-1" alt={intl.formatMessage({ id: 'header.menu.eng' })} ></img>  </Link>
							<Link onClick={() => handleChangeLanguage('es-ES')} className="symbol symbol-20px ms-2"> <img src="/img/Spain.svg" className="rounded-1" alt={intl.formatMessage({ id: 'header.menu.esp'})}></img> </Link>
					
						</Nav>
							{isLogged === true  ? 
								<Nav className="user">
									<span className="d-flex align-items-center bgi-no-repeat mr-2">
										<Link to="/chat" >
											<img src="/img/icon-chat.svg" alt="avatar" />
										</Link>								
									</span>		
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
													/>,
													&nbsp;{userData.nickname}</span>
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
												<span className="d-block pt-3" to="/"><AuthButton className="navbar-btn" /></span>
											</Link>
										</div>

									</div>


								</NavDropdown>
							</Nav>
							 : (
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
									</div>)
							}
							
						
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
