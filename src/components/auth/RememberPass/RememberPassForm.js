import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form,ContentBottomCenter, ErrorMessage, SuccessMessage, Button } from '../../shared/elements/formElements';
import { faExclamationTriangle, faComment } from '@fortawesome/free-solid-svg-icons';

import './RememberPass.css';

function RememberPassForm ({onSubmit}) {
    const {
		formValue: rememberPassData, 
		handleChange,	
	} = useForm({        
		email:"",        
	});
	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});
		
	const intl = useIntl();


    const { email } = rememberPassData;   

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
		if ( isValidValue(expressions.email, email)) {
			try {
				onSubmit(rememberPassData);	
		
				changeIsFormValid({...isFormValid, status:true});
			} catch (error) {
				changeIsFormValid({...isFormValid, status:false});
			}
			
		} else {
			changeIsFormValid({...isFormValid, status:false});
		}	
	}

	const expressions = {		
		email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/,		
	}

    return (
		<Form  className="form-signin" onSubmit={checkFormData}>
			<div className="form-container">
                
				
					
				<Input
					type="text"
					label={intl.formatMessage({ id: 'register.formLabel.email'})}                   
					name="email"
					id="email"
					placeholder={intl.formatMessage({ id: 'rememberPass.form.placeholderEmail'})}
					value={email}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'register.validate.email'})}
					regularExpression={expressions.email}
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
					<b></b>{intl.formatMessage({ id: 'rememberPass.validate.successmessage'})}
				</p>
			</SuccessMessage>}

			<ContentBottomCenter>

			<Button			
			    type="submit">
                    <FormattedMessage
                        id="rememberPass.form.button"
                        defaultMessage="Send"
                    />
			</Button>
		
			</ContentBottomCenter>
        </div>
		</Form>
	) 
}

export default RememberPassForm;