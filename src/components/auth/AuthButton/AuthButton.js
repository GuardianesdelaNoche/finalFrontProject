import React from 'react'
import { Link } from 'react-router-dom';
import {ConfirmationButton, Button} from '../../shared/index';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { getIsLogged } from '../../../store/selectors/auth';
import { logoutAction } from '../../../store/actions/auth';


function AuthButton({ isLogged, onLogout }) {
	const handleLogoutConfirm = async () => {
		onLogout()
	}
	return isLogged ? (

		<ConfirmationButton
			confirmation="Do you want to exit?"
			onConfirm={handleLogoutConfirm}
		>
			Logout
		</ConfirmationButton>
	) : (
		<Button variant = "primary" >
				<Link to="/login"><FormattedMessage
					id="button.login.menu"
					defaultMessage="Login"
				/></Link>
		</Button>
	);
}


const mapStateToProps = state => ({
	isLogged: getIsLogged(state)
})

const mapDispatchToProps = (dispatch) => ({
	onLogout: () => dispatch(logoutAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)