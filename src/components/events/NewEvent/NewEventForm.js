import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form,ContentBottomCenter, ErrorMessage, Button } from '../../shared/elements/formElements';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


//import '../LoginPage/login.css'

function NewEventForm ({onSubmit}) {
    const {
		formValue: registerData, 
		handleChange,	
	} = useForm({
        username:"",
		email:"",
        role:1,
		password:"",	
		password2:"",
		nickname:"",
	});
	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});

	
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
		if ( isValidValue(expressions.username, username)
		&& isValidValue(expressions.nikname, nickname) 
		&& isValidValue(expressions.email, email)
		&& isValidValue(expressions.password, password)
		&& password === password2	) {
			try {
				onSubmit(registerData);	
				changeIsFormValid({...isFormValid, status:true});
			} catch (error) {
				changeIsFormValid({...isFormValid, status:false});
			}
		} else {
			changeIsFormValid({...isFormValid, status:false});
		}	
	}

	const expressions = {
		username: /^[a-zA-Z0-9_-]{6,18}$/,
		nikname: /^[a-zA-ZÀ-ÿ0-9\s]{1,18}$/,
		email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/,
		password: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/,
	}

    return (
		<Form  className="form-signin" onSubmit={checkFormData}>
			<div className="form-container">
				{/* <Input
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
      */}
				
				
			{isFormValid.status === false && <ErrorMessage>
				<p>
					<FontAwesomeIcon icon={faExclamationTriangle}/>
					<b>Error:</b> {intl.formatMessage({ id: 'register.validate.errormessage'})}
				</p>
			</ErrorMessage>}

			<ContentBottomCenter>

			<Button		
			    type="submit">
                    <FormattedMessage
                        id="newEvent.form.button"
                        defaultMessage="Create"
                    />
			</Button>
		
			</ContentBottomCenter>
        </div>
		</Form>
	) 
}

export default NewEventForm;