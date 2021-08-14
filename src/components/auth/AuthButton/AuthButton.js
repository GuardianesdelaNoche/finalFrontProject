import React from 'react'
import { Link } from 'react-router-dom';
import {ConfirmationButton, Button} from '../../shared/index';
import { FormattedMessage, useIntl } from 'react-intl';

import { connect } from 'react-redux';
import { getIsLogged } from '../../../store/selectors/auth';
import { logoutAction } from '../../../store/actions/auth';


function AuthButton({ isLogged, onLogout }) {
	const intl = useIntl();
	const handleLogoutConfirm = async () => {
		onLogout();
	}
	return isLogged ? (

		<ConfirmationButton
			title={intl.formatMessage({ id: 'logout.title' })}
			confirmation= {intl.formatMessage({ id: 'logout.confirmation'})}
			onConfirm={handleLogoutConfirm}
		>
			{intl.formatMessage({ id: 'logout.title'})}
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