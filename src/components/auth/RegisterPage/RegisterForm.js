import React from 'react';

import { FormattedMessage } from 'react-intl';
import Input from '../../shared/Input';
import useForm from '../../hooks/useForm';

import './RegisterPage.css';

function RegisterForm ({onSubmit}) {
    const {
		formValue: registerData, 
		handleChange,
		handleSubmit,
	} = useForm({
        username:'',
		email:'',
        role:1,
		password:'',
		nickname:'',
	});


    const { username, email, password, nickname } = registerData;   
    

    return (
		<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

			<div className="form-container">
                <div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="register.formLabel.username"
							defaultMessage="sername"
						/>
					</label>
					<Input
						type="text"
						name="username"
						placeholder="username"
						className="form-control"
						value={username}
						onChange={handleChange}
                        required
					/>
				</div>    
                <div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="register.formLabel.nickname"
							defaultMessage="Nickname"
						/>
					</label>
					<Input
						type="text"
                        name="nickname"
						label="nickname"                   
                        required
						placeholder="nickname"
						className="form-control"
						value={nickname}
						onChange={handleChange}
					/>
				</div>
                <div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="register.formLabel.email"
							defaultMessage="Email"
						/>
					</label>
                    <Input              
                        label="email"
                        name="email"
                        className="form-control"                    
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleChange}
					/>

				</div>
		
				<div className="form-container">
					<label className="form-label">
						<FormattedMessage
							id="register.formLabel.pass"
							defaultMessage="Password"
						/>
					</label>
					<Input
						type="password"
						label="password"
                        name="password"
                        required
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
					id="register.form.button"
					defaultMessage="Register"
				/>
			</button>
        </div>
		</form>
	) 


}

export default RegisterForm;