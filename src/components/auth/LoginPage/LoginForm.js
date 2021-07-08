import React from 'react';

import useForm from '../../../hooks/useForm';
import { FormattedMessage } from 'react-intl';
import Button from '../../shared/Button';
import './login.css'

function LoginForm({onSubmit}) {

	const {
		formValue: credentials, 
		handleChange,
		handleSubmit,
	} = useForm({
		email:'',
		password:'',
		remember:false,
	})

	const { email, password, remember } = credentials;

	 
	return (
		<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

				<div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="login.formLabel.email"
							defaultMessage="Email"
						/>
					</label>

					<input 
					name="email"
					className="form-control"
					placeholder="name@example.com"
					value={email}
					onChange={handleChange}
					/>

				</div>
		
				<div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="login.formLabel.pass"
							defaultMessage="Password"
						/>
					</label>
					<input
						type="password"
						name="password"
						placeholder="********"
						className="form-control"
						value={password}
						onChange={handleChange}
					/>
				</div>

				<div className="checkbox mb-3">
				<input
					type="checkbox"
					name="remember"
					className="checkbox"
					checked={remember}
					onChange={handleChange}
					/> 
					<FormattedMessage
						id="login.formLabel.remember"
						defaultMessage="Remember me"
					/>
			</div>

			<Button variant="primary">
				<FormattedMessage
					id="login.form.button"
					defaultMessage="Login"
				/>
			</Button>

		</form>
	)
}


export default LoginForm;