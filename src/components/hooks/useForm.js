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
	const handleSubmit = onSubmit => (e) =>{	
		onSubmit(formValue);
	}



	return { formValue, setFormValue, handleChange, handleSubmit, handleSetValue};
}

export default useForm;