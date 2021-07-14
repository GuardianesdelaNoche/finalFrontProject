import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form,ContentBottomCentent, ErrorMessage, SuccessMessage } from '../../shared/elements/formElements';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

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
		password2:"",
		nickname:"",
	});
	const [isFormValid , changeIsFormValid] = useState(null);
	
	const intl = useIntl();


    const { username, email, password, password2,  nickname } = registerData;   

	const isValidValue = (expression, value) =>{
		if(expression.test(value)) {
			return true;
		}else
		{ 
			return false;
		}
	}
	const checkFormData = (e) => {
		e.preventDefault();
		if ( isValidValue(expressions.username, username[0])
		&& isValidValue(expressions.nikname, nickname[0]) 
		&& isValidValue(expressions.email, email[0])
		&& isValidValue(expressions.password, password[0])
		&& password[0] === password2[0]	) {
			onSubmit(registerData);	
		} else {
			changeIsFormValid(false);
		}
	
	}

	

	const expressions = {
		username: /^[a-zA-Z0-9_-]{4,18}$/,
		nikname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/,
		password: /^.{8,18}$/,

	}

	

    return (
		<Form  className="form-signin" onSubmit={checkFormData}>
			<div className="form-container">
                
				<Input
					type="text"
					label= {intl.formatMessage({ id: 'register.formLabel.username'})}
					name="username"
					id="username"
					placeholder="username"
					value={username}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.username'})}
					regularExpression={expressions.username}
					required
				/>
                
				<Input
					type="text"
					label={intl.formatMessage({ id: 'register.formLabel.nickname'})}                   
					name="nickname"
					id="nickname"
					placeholder="nickname"
					value={nickname}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.nickname'})}
					regularExpression={expressions.nikname}
					required
				/>
					
				<Input
					type="text"
					label={intl.formatMessage({ id: 'register.formLabel.email'})}                   
					name="email"
					id="email"
					placeholder="xxxx@xxxx.com"
					value={email}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.email'})}
					regularExpression={expressions.email}
					required
				/>
			
				<Input
					type="password"
					label={intl.formatMessage({ id: 'register.formLabel.pass'})}                   
					name="password"
					id="password"
					placeholder="******"
					value={password}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.username'})}
					regularExpression={expressions.password}
					required
				/>

				<Input
					type="password"
					label={intl.formatMessage({ id: 'register.formLabel.repeatpass'})}                   
					name="password2"
					id="password2"
					placeholder="******"
					value={password2}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.repeatpass'})}
					valueToCheck={password}
					required
				/>
				
			{isFormValid === false && <ErrorMessage>
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