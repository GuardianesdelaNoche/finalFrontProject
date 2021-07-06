import React from 'react';
import { Link } from 'react-router-dom'

import useForm from '../../../hooks/useForm';
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
					<label className="form-label">Email</label>
					<input 
					name="email"
					className="form-control"
					placeholder="name@example.com"
					value={email}
						onChange={handleChange}
					/>
				</div>
		
				<div className="form-container">
				<label className="form-label">Password</label>
				
				<input
						type="password"
						name="password"
						placeholder="Password"
						className="form-control"
						value={password}
						onChange={handleChange}
					/>
				</div>
			
	
			<div class="checkbox">
			<input
				type="checkbox"
				name="remember"
				className="checkbox"
				checked={remember}
				onChange={handleChange}
				/> Remember me
			</div>

			<button
				className="btn btn-primary"
			 type="submit">Login</button>
			
			
		</form>
	)
}


export default LoginForm;