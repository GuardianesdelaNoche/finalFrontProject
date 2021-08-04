import React  from 'react';


function useForm(initialState){
	const [formValue, setFormValue] = React.useState(initialState);

	const handleSetValue= dataForm => {setFormValue(dataForm)};

	const handleChange = ({ target })=>{
		setFormValue({
			...formValue,
			[target.name]: target.value
		})
	}

	const hadleChangeArray = (tags)=> {
		setFormValue({
			...formValue,
			['tags']: tags
		})
	}

	const handleChangeFile = (e)=> {
		setFormValue({
			...formValue,
			['photo']: e
		})
	}

	const handleSubmit = onSubmit => (e) =>{	
		onSubmit(formValue);
	}

	const handleChangeDate = (date)=> {
		setFormValue({
			...formValue,
			['date']: date
		})
	}

	const handleChangeIndoor = (value)=> {
		setFormValue({
			...formValue,
			['indoor']: value
		})
	}

	return { formValue, setFormValue, handleChange, handleSubmit, handleSetValue, hadleChangeArray, handleChangeFile, handleChangeDate, handleChangeIndoor};
}

export default useForm;