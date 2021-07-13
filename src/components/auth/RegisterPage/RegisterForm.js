import React from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form,ContentBottomCentent, ErrorMessage, SuccessMessage } from '../../shared/elements/formElements';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import './RegisterPage.css';

function RegisterForm ({onSubmit}) {
    const {
		formValue: registerData, 
		handleChange,
		handleSubmit,
	} = useForm({
        username:"",
		email:"",
        role:1,
		password:"",
		nickname:"",
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
						errorLegend={intl.formatMessage({ id: 'register.formLabel.usernregister.errorMessage.username'})}
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
						errorLegend={"mensaje"}
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
						errorLegend={"mensaje"}
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
						errorLegend={"mensaje password"}
						onChange={handleChange}
					/>
				
			{false && <ErrorMessage>
				<p>
					<FontAwesomeIcon icon={faExclamationTriangle}/>
					<b>Error:</b> Por favor rellena el formulario correctamente.
				</p>
			</ErrorMessage>}

			<ContentBottomCentent>

			<button
				className="btn btn-primary"
			    type="submit">
                    <FormattedMessage
                        id="register.form.button"
                        defaultMessage="Register"
                    />
			</button>
			<SuccessMessage>Formulario enviado correctamente!!</SuccessMessage>
			</ContentBottomCentent>
        </div>
		</Form>
	) 
}

export default RegisterForm;