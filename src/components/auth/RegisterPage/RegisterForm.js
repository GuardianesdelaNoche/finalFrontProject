import React from 'react';

import { FormattedMessage } from 'react-intl';
import Input from '../../shared/Input';

import './RegisterPage.css';

function RegisterForm ({onSubmit}) {

    return (
		<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

				<div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="login.formLabel.email"
							defaultMessage="Email"
						/>
					</label>
                    <Input              
                        label="email"
                        className="form-control"
                        autoFocus="true"
                        isRequired="true"
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
					<Input
						type="password"
						label="password"
                        autoFocus="false"
                        isRequired="false"
						placeholder="********"
						className="form-control"
						value={password}
						onChange={handleChange}
					/>
				</div>

	

			<button
				className="btn btn-primary"
			 type="submit">
				<FormattedMessage
					id="login.form.button"
					defaultMessage="Login"
				/>
			</button>

		</form>
	) 


}

export default RegisterForm;