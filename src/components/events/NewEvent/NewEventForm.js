import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form,ContentBottomCenter, ErrorMessage, Button } from '../../shared/elements/formElements';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import MultiSelectTags from '../../shared/MultiSelectTags';

import File from '../../shared/File';


//import '../LoginPage/login.css'

function NewEventForm ({onSubmit}) {
    const {
		formValue: newEventData, 
		handleChange,	
		handleChangeFile,
		hadleChangeArray
	} = useForm({
        title:"",
		description:"",
        price:1,
		max_places:"",	
		duration:"",
		photo:"",
		indoor:false,
		address:"",
		city:"",
		postal_code:"",
		country:"",
		tags:[]
	});
	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});
	
	const intl = useIntl();


    const { title, description, price, max_places, duration, indoor, address, city, postal_code, country, tags } = newEventData;   



	const isValidValue = (expression, value) =>{
		if(expression.test(value)) {
			return true;
		}else
		{ 
			return false;
		}
	}

	const handleChangeMultiSelect = event => {                
		let tags = [];
		

		event.forEach(element => {
				tags.push(element.value);                   				
		});              
		
		hadleChangeArray (tags);
}

	const handleChangeFiles = e => {		
		handleChangeFile(e);	  
	}



	const checkFormData = (e) => {
		e.preventDefault();
		if ( isValidValue(expressions.title, title)
		&& isValidValue(expressions.description, description) 
			) {
			try {
				onSubmit(newEventData);	
				changeIsFormValid({...isFormValid, status:true});
			} catch (error) {
				changeIsFormValid({...isFormValid, status:false});
			}
		} else {
			changeIsFormValid({...isFormValid, status:false});
		}	
	}
	const handleError = () => {

	}

	const expressions = {
		title: /^[a-zA-Z0-9_-\s]{1,48}$/,
		description: /^[a-zA-ZÀ-ÿ0-9\s]{1,255}$/,
		price:/^[0-9]{1,255}$/,
		max_places: /^[0-9]{1,255}$/,
		
	}

    return (
		<Form  className="form-signin" onSubmit={checkFormData}>
			<div className="form-container">
				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.title'})}
					name="title"
					id="title"
					placeholder="title"
					value={title}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.title'})}
					regularExpression={expressions.title}
					max-length="5"
					required
				/>
     
	 			<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.description'})}
					name="description"
					id="description"
					placeholder="description"
					value={description}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.description'})}
					regularExpression={expressions.description}
					required
				/>
				
				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.price'})}
					name="price"
					id="price"
					placeholder="15,50"
					value={price}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.price'})}
					regularExpression={expressions.price}
					required
				/>
				
				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.max_places'})}
					name="max_places"
					id="max_places"
					placeholder="14"
					value={max_places}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.max_places'})}
					regularExpression={expressions.max_places}
					required
				/>
				<MultiSelectTags 
					onChange={handleChangeMultiSelect}
					name="tags"
					id="tags"					
					label =  {intl.formatMessage({ id: 'newevent.formLabel.tags'})}
					required
				/>

				<File 
					name="photo" 
					id="photo"
					onFileSelectSuccess={handleChangeFiles} 
					onFileSelectError={handleError}
				/>

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