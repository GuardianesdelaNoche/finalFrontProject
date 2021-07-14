import React from 'react';


function useForm(initialState){
	const [formValue, setFormValue] = React.useState(initialState);

	const handleChange = ({ target })=>{
		setFormValue({
			...formValue,
			[target.name]: [target.value]
		})
	}
	const handleSubmit = onSubmit => (e) =>{
		e.preventDefault();
		onSubmit(formValue);
	}

	return { formValue, setFormValue, handleChange, handleSubmit };
}

export default useForm;