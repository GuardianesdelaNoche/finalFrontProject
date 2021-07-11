import React from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/Input';
import Checkbox from '../../shared/Checkbox';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentBottomCentent, Form } from '../../shared/elements/formElements';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

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
	const intl = useIntl();

    const { username, email, password, nickname } = registerData;   

    return (
		<Form  className="form-signin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-container">
                
					<Input
						type="text"
						label= {intl.formatMessage({ id: 'register.formLabel.username'})}
						name="username"
						id="username"
						placeholder="username"
						value={username}
						onChange={handleChange}
						icon={faCheckCircle}
						legend={"mensaje description error"}
                        required
					/>
					
				
                
					<Input
						type="text"
                        name="nickname"
						id="nickname"
						label={intl.formatMessage({ id: 'register.formLabel.nickname'})}                   
                        required
						placeholder="nickname"
						value={nickname}
						icon={faCheckCircle}
						legend={"mensaje"}
						onChange={handleChange}
					/>
					
					<Input
						type="text"
                        name="email"
						id="email"
						label={intl.formatMessage({ id: 'register.formLabel.email'})}                   
                        required
						placeholder="xxxx@xxxx.com"
						value={email}
						icon={faCheckCircle}
						legend={"mensaje"}
						onChange={handleChange}
					/>
                
				<Input
						type="password"
                        name="password"
						id="password"
						label={intl.formatMessage({ id: 'register.formLabel.pass'})}                   
                        required
						placeholder="******"
						value={password}
						icon={faCheckCircle}
						legend={"mensaje password"}
						onChange={handleChange}
					/>
				
			<div>
				<p>
					<FontAwesomeIcon icon={faExclamationTriangle}/>
					<b>Error:</b> Por favor rellena el formulario correctamente.
				</p>
			</div>

			<ContentBottomCentent>

			<button
				className="btn btn-primary"
			    type="submit">
                    <FormattedMessage
                        id="register.form.button"
                        defaultMessage="Register"
                    />
			</button>
			<p>Formulario enviado correctamente!!</p>
			</ContentBottomCentent>
        </div>
		</Form>
	) 
}

export default RegisterForm;