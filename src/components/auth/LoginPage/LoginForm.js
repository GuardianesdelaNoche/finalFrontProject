import React from 'react';

function LoginForm({onSubmit}) {
	return (

		<form>
			<input name="email"/>
			<input
				type="password"
				name="password"
			/>
			<input
				type="checkbox"
				name="remember"
			/>

			<button>Login</button>
		</form>
	)
}
 
export default LoginForm;