import React from 'react'
import { Link } from 'react-router-dom'


function RegisterPage() {
	return (
		<div>
			Register Page
			<div>
				<Link to="/Login">I already have an account</Link>
			</div>

		</div>
	)
}

export default RegisterPage;