import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../../shared/components/Input';
import useForm from '../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectIndoor from '../../shared/SelectIndoor';

import { Form,ContentBottomCenter, ErrorMessage, Button, DatePickerF, Label } from '../../shared/elements/formElements';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import MultiSelectTags from '../../shared/MultiSelectTags';
import "react-datepicker/dist/react-datepicker.css";
import File from '../../shared/File';
import { setDefaultLocale } from  "react-datepicker";


import './newEvent.css'

function NewEventForm ({onSubmit}) {
    const {
		formValue: newEventData, 
		handleChange,	
		handleChangeFile,
		hadleChangeArray,
		handleChangeDate,
		handleChangeIndoor
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
		tags:[],
		date:"",
		longitude: "-143.4838",
		latitude: "-30.0519"
	});
	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});
	
	const intl = useIntl();
	
	setDefaultLocale('es');
	
    const { title, description, price, max_places, duration, address, city, postal_code, country } = newEventData;   
	const [startDate, setStartDate] = useState(new Date());
	
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


	const handleChangeIndoorA = dataIndoor => {
		console.log(dataIndoor);
		handleChangeIndoor(dataIndoor.value);
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
		city: /^[a-zA-ZÀ-ÿ0-9\s]{1,255}$/,
		address: /^[a-zA-ZÀ-ÿ0-9\s,]{1,255}$/,
		postal_code:/^[0-9]{1,255}$/,
		country: /^[a-zA-ZÀ-ÿ0-9\s,]{1,255}$/,
		
	}

    return (
		<Form  className="form-signin" onSubmit={checkFormData}>
			<div className="form-container">
			<Label htmlFor='date' >
				{intl.formatMessage({ id: 'newevent.formLabel.date'})}		
			</Label>       
				<DatePickerF
					locale="es"	
					name="date"
					id="date"
					selected={startDate} 
					onChange={(date) => {setStartDate(date);handleChangeDate(date)}}		
						
				/>
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
				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.duration'})}
					name="duration"
					id="duration"
					placeholder="14"
					value={duration}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.duration'})}
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

				<Label htmlFor='photo' >
					{intl.formatMessage({ id: 'newevent.formLabel.photo'})}		
				</Label>      

				<File 
					name="photo" 
					id="photo"
					onFileSelectSuccess={handleChangeFiles} 
					onFileSelectError={handleError}
				/>

				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.address'})}
					name="address"
					id="address"
					placeholder="address"
					value={address}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.address'})}
					regularExpression={expressions.address}					
					
				/>

				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.city'})}
					name="city"
					id="city"
					placeholder="city"
					value={city}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.city'})}
					regularExpression={expressions.address}					
					
				/>

				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.postal-code'})}
					name="postal_code"
					id="postal_code"
					placeholder="postal_code"
					value={postal_code}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.postal-code'})}
					regularExpression={expressions.postal_code}					
					
				/>

				<Input
					type="text"
					label= {intl.formatMessage({ id: 'newevent.formLabel.country'})}
					name="country"
					id="country"
					placeholder="country"
					value={country}
					onChange={handleChange}
					errorLegend={intl.formatMessage({ id: 'newevent.validate.country'})}
					regularExpression={expressions.country}					
					
				/>

				<Label htmlFor='indoor' >
					{intl.formatMessage({ id: 'newevent.formLabel.indoor'})}		
				</Label> 
				<SelectIndoor 
					id="indoor"
					name="indoor"
					onChange={handleChangeIndoorA}				
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