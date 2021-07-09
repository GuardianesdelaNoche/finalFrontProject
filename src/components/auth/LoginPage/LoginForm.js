import React from 'react';

import useForm from '../../../hooks/useForm';
import { FormattedMessage } from 'react-intl';
import Button from '../../shared/Button';
import {Checkbox, Input, ButtonMenu, NotFound, } from '../../shared/index'
import './login.css'
import { Children } from 'react';


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
						
					/>
				
				</div>

				<Checkbox onChange={handleChange} >
					<FormattedMessage
					id="login.formLabel.remember"
					defaultMessage="Remember me"
					/>
				</Checkbox>		
		

			<Button variant="primary">
				<FormattedMessage
					id="login.form.button"
					defaultMessage="Login"
				/>
			</Button>

			
			<div className="form-container">
				<label className="form-label">
					<FormattedMessage
						id="login.formLabel.pass"
						defaultMessage="Password"
					/>
				</label>
				<Input placeholder="*********" />
			</div>
		</form>
	)
}


export default LoginForm;