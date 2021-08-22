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
import es from 'date-fns/locale/es';

import './editEvent.css'


function EditEventForm ({onSubmit, eventData}) {
    const {
		formValue: editEventData, 
		handleChange,	
		handleChangeFile,
		hadleChangeArray,
		handleChangeDate,
		handleChangeIndoor
	} = useForm({
        title: eventData.title,
		description: eventData.description,
        price: eventData.price,
		max_places: eventData.max_places,	
		duration: eventData.duration,
		photo: eventData.photo,
		indoor: eventData.indoor,
		address: eventData.address,
		city: eventData.city,
		postal_code: eventData.postal_code,
		country: eventData.country,
		tags: eventData.tags,
		date: eventData.date,
		longitude: eventData.longitude,
		latitude: eventData.latitude
	});
	const [isFormValid , changeIsFormValid] = useState({status:null, errorMessageId: ""});
	
	
	const intl = useIntl();


    const { title, description, price, max_places, duration, address, city, postal_code, country, tags, indoor, photo } = editEventData;   
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
		handleChangeIndoor(dataIndoor.value);
	} 


	const checkFormData = (e) => {
		e.preventDefault();
		if ( isValidValue(expressions.title, title)
		&& isValidValue(expressions.description, description) 
			) {
			try {
				onSubmit(editEventData);	
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
		<Form className="form-new-event" onSubmit={checkFormData}>
			<div className="pt-10">

				{/* Input Title */}
				<div className="row mobile-wrap">

					<div className="col">
							<Input
								type="text"
								label={intl.formatMessage({ id: 'newevent.formLabel.title' })}
								name="title"
								id="title"
								placeholder="title"
								value={title}
								onChange={handleChange}
								errorLegend={intl.formatMessage({ id: 'newevent.validate.title' })}
								regularExpression={expressions.title}
								max-length="5"
								required
							/>
					</div>
				</div>


				{/* Input Date */}
				<div className="row mobile-wrap">
					<div className="col">
							<Label htmlFor='date' >
								{intl.formatMessage({ id: 'newevent.formLabel.date' })}
							</Label>
							<DatePickerF
								locale={es}
								dateFormat="P"
								name="date"
								id="date"
								selected={startDate}
								onChange={(date) => { setStartDate(date); handleChangeDate(date) }}

							/>
					</div>
					<div className="col ">

						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.duration' })}
							name="duration"
							id="duration"
							placeholder="14"
							value={duration}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.duration' })}
							regularExpression={expressions.max_places}
							required
						/>

						
						
					</div>
					<div className="col ">

						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.max_places' })}
							name="max_places"
							id="max_places"
							placeholder="14"
							value={max_places}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.max_places' })}
							regularExpression={expressions.max_places}
							required
						/>
							
						

					</div>
				</div>
				
				{/* Input Max Places */}

				<div className="row mobile-wrap">
					<div className="col">
						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.price' })}
							name="price"
							id="price"
							placeholder="15,50"
							value={price}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.price' })}
							regularExpression={expressions.price}
							required
						/>
					</div>
					<div className="col">
						<Label htmlFor='indoor' >
							{intl.formatMessage({ id: 'newevent.formLabel.indoor' })}
						</Label>
						<SelectIndoor
							id="indoor"
							name="indoor"
							value={indoor}
							onChange={handleChangeIndoorA}
							required
						/>
					</div>
					<div className="col">

						<MultiSelectTags
							onChange={handleChangeMultiSelect}
							name="tags"
							id="tags"
							value={tags}
							label={intl.formatMessage({ id: 'newevent.formLabel.tags' })}
							required
						/>
						
					</div>

				</div>	


				{/* Input Description */}
				<div className="row mobile-wrap">
					<div className="col">
						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.description' })}
							name="description"
							id="description"
							placeholder="description"
							value={description}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.description' })}
							regularExpression={expressions.description}
							required
						/>
					</div>
				</div>


				{/* Input Address */}
					
				<div className="row mobile-wrap">

					<div className="col">
						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.address' })}
							name="address"
							id="address"
							placeholder="address"
							value={address}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.address' })}
							regularExpression={expressions.address}

						/>
					</div>
					<div className="col">
						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.city' })}
							name="city"
							id="city"
							placeholder="city"
							value={city}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.city' })}
							regularExpression={expressions.address}

						/>
					</div>
					<div className="col">
						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.postal-code' })}
							name="postal_code"
							id="postal_code"
							placeholder="postal_code"
							value={postal_code}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.postal-code' })}
							regularExpression={expressions.postal_code}

						/>
					</div>
					<div className="col">
						<Input
							type="text"
							label={intl.formatMessage({ id: 'newevent.formLabel.country' })}
							name="country"
							id="country"
							placeholder="country"
							value={country}
							onChange={handleChange}
							errorLegend={intl.formatMessage({ id: 'newevent.validate.country' })}
							regularExpression={expressions.country}

						/>
					</div>
				</div>
				
				<div className="row mobile-wrap">
					<div className="col">
			
						<Label htmlFor='photo' >
							{intl.formatMessage({ id: 'newevent.formLabel.photo'})}		
						</Label>      
					
						<img src={photo} alt={description} className="imageLoaded"></img>

						
					</div>

			
			</div>

				{/* Input Photo */}
				<div className="row mobile-wrap">
					<div className="col">
			
						<Label htmlFor='photo' >
							{intl.formatMessage({ id: 'newevent.formLabel.newPhoto'})}		
						</Label>      
					
						<File 
							name="photo" 
							id="photo"
							
							onFileSelectSuccess={handleChangeFiles} 
							onFileSelectError={handleError}
						/>

						
					</div>

			
			</div>



			{isFormValid.status === false && <ErrorMessage>
				<p>
					<FontAwesomeIcon icon={faExclamationTriangle}/>
					<b>Error:</b> {intl.formatMessage({ id: 'register.validate.errormessage'})}
				</p>
			</ErrorMessage>}

				<ContentBottomCenter className="pt-4 pb-12">

					<Button className="btn btn-primary px-11"
			    type="submit"
				>
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

export default EditEventForm;