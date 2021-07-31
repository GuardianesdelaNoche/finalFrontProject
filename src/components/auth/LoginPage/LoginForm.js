import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from '../../../store/actions/ui';
import useForm from '../../../hooks/useForm';
import { getUi } from '../../../store/selectors/ui';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, ContentBottomCenter, Button} from '../../../components/shared/elements/formElements'
import { Alert } from 'react-bootstrap';

import { Input, Checkbok } from '../../shared/index';

import './login.css'

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({onSubmit}) {

	const dispatch = useDispatch();

	const { error } = useSelector(getUi);

	const {
		formValue: credentials,
		handleChange,
		handleSubmit,
		validate
	} = useForm({
		email: '',
		password: '',
		remember: false,
	});

	const { email, password, remember } = credentials;
	const intl = useIntl();

	const handleResetError = () => {
		dispatch(resetErrorAction())
	}

	return (
		<Form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-container">
				<Input
					type="email"
					label={intl.formatMessage({ id: 'login.formLabel.email' })}
					name="email"
					id="email"
					placeholder="user@email.com"
					value={email}
					onChange={handleChange}
					required
				/>

				<Input
					type="password"
					label={intl.formatMessage({ id: 'login.formLabel.pass' })}
					name="password"
					id="password"
					placeholder="******"
					value={password}
					onChange={handleChange}
					required
				/>
			
				<Checkbok
					type="checkbox"
					name="remember"
					label={'Remember me'}
					onChange={handleChange}
					checked={remember}
				/>
			</div>


			{error && (
				<Alert className="alertLogin" onClick={handleResetError} variant="danger">
					<p className="mb-0">
						{error.message}
					</p>
				</Alert>
			)}

			<ContentBottomCenter>
				<Button
					type="submit"
					disabled={!validate(validEmail, validPassword)}
					>
					<FormattedMessage
						id="login.form.button"
						defaultMessage="Login"
					/>
				</Button>
			</ContentBottomCenter>

		</Form>
	)
}


export default LoginForm;