import React, { useEffect, useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form,ContentBottomCenter, ErrorMessage, SuccessMessage, Button } from '../../shared/elements/formElements';
import { faExclamationTriangle, faComment } from '@fortawesome/free-solid-svg-icons';

function UpdateMemberForm ({onSubmit, data}) {
	
    const {
		formValue: memberData, 
		handleChange,	
	} = useForm({
        username:data.username,
		email:data.email,
        role:1,
		nickname:data.nickname,
	});


	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});
	const [formSent, changeFormSent] = useState(false);
	
	const intl = useIntl();


    const { username, email,  nickname } = memberData;   
	// useEffect (()=> {
       
	

		
    // }, [data]);


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
			) {
			try {
				onSubmit(memberData);	
				changeFormSent(true);
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
                        id="updatemember.form.button"
                        defaultMessage="Update"
                    />
			</Button>
		
			</ContentBottomCenter>
        </div>
		</Form>
	) 
}

export default UpdateMemberForm;