import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form,ContentBottomCenter, ErrorMessage, SuccessMessage, Button } from '../../shared/elements/formElements';
import { faExclamationTriangle, faComment } from '@fortawesome/free-solid-svg-icons';

import './RecoverPass.css';

function RecoverPassForm ({onSubmit, token}) {
    const {
		formValue: recoverPassData, 
		handleChange,	
	} = useForm({        
		password:"",    
		token: token,   
		password2:"",
	});
	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});
	
	const intl = useIntl();


    const { password, password2 } = recoverPassData;   

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
		if ( isValidValue(expressions.password, password)
		&& password === password2) {
			try {
				onSubmit(recoverPassData);	
				changeIsFormValid({...isFormValid, status:true});
			} catch (error) {
				changeIsFormValid({...isFormValid, status:false});
			}
			
		} else {
			changeIsFormValid({...isFormValid, status:false});
		}	
	}

	const expressions = {		
		password: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/,
	}

    return (
		<Form  className="form-signin" onSubmit={checkFormData}>
			<div className="form-container">
                
				
					
			<Input
					type="password"
					label={intl.formatMessage({ id: 'register.formLabel.pass'})}                   
					name="password"
					id="password"
					placeholder="******"
					value={password}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.pass'})}
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
						
				
			{isFormValid.status === false && <ErrorMessage>
				<p>
					<FontAwesomeIcon icon={faExclamationTriangle}/>
					<b>Error:</b> {intl.formatMessage({ id: 'register.validate.errormessage'})}
				</p>
			</ErrorMessage>}

			{isFormValid.status === true && <SuccessMessage>
				<p>
					<FontAwesomeIcon icon={faComment}/>
					<b></b>{intl.formatMessage({ id: 'register.validate.successmessage'})}
				</p>
			</SuccessMessage>}

			<ContentBottomCenter>

			<Button			
			    type="submit">
                    <FormattedMessage
                        id="recoverPass.form.button"
                        defaultMessage="Send"
                    />
			</Button>
		
			</ContentBottomCenter>
        </div>
		</Form>
	) 
}

export default RecoverPassForm;