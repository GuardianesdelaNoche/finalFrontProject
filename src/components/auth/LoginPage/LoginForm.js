import React from 'react';


import useForm from '../../../hooks/useForm';

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input 
			name="email"
			value={email}
				onChange={handleChange}
			
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={handleChange}
			/>
			<input
				type="checkbox"
				name="remember"
				checked={remember}
				onChange={handleChange}
			/>

			<button type="submit">Login</button>
		</form>
	)
}


export default LoginForm;