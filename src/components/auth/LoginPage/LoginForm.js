import React from 'react';

import useForm from '../../../hooks/useForm';
import { FormattedMessage } from 'react-intl';
import {Form} from '../../../components/shared/elements/formElements'

import { Input, Checkbok} from '../../shared/index'


import './login.css'

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;


function LoginForm({onSubmit}) {

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

	
	return (
		<Form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

				{/* <div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="login.formLabel.email"
							defaultMessage="Email"
						/>
					</label>

					<Input 
						type={'email'} 
						name={'email'} 
						required={'required'} 
						placeholder={'name@username.com'} 
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
				<Input 
					type={'password'} 
					name={'password'} 
					required={'required'} 
					placeholder={'********'} 
					value={password} 
					onChange={handleChange}
				/>
				</div> */}
			
				<Checkbok
					type="checkbox"
					name="remember"
					label={'Remember me'}
					onChange={handleChange}
					checked={remember}
				/>

		{/* 	<Button variant="primary" disabled={!validate(validEmail, validPassword)}>
				<FormattedMessage
					id="login.form.button"
					defaultMessage="Login"
				/>
			</Button> */}


			<button
				className="loginForm-submit"
				disabled={!validate(validEmail, validPassword)}>Login</button>


		</Form>
	)
}


export default LoginForm;