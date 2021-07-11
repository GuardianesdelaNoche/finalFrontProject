import React from 'react';

import { FormattedMessage } from 'react-intl';
import Input from '../../shared/Input';
import Checkbox from '../../shared/Checkbox';
import useForm from '../../hooks/useForm';

import { Form, Label,  ErrorLegend} from '../../shared/elements/formElements';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './RegisterPage.css';

function RegisterForm ({onSubmit}) {
    const {
		formValue: registerData, 
		handleChange,
		handleSubmit,
	} = useForm({
        username:'',
		email:'',
        role:1,
		password:'',
		nickname:'',
	});

    const { username, email, password, nickname } = registerData;   
	const usrFormmatedMessage = () => { return (<FormattedMessage
			id="register.formLabel.username"
			defaultMessage="sername"
		/>);};

	const nicknameFormmatedMessage = () => <FormattedMessage
			id="register.formLabel.nickname"
			defaultMessage="Nickname"
	/>;
    
	console.log("texto222", usrFormmatedMessage);
    return (
		<Form  className="form-signin" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-container">
                <div className="form-container">
					
					<Input
						type="text"
						label= {usrFormmatedMessage}
						name="username"
						placeholder="username"
						className="form-control"
						value={username}
						onChange={handleChange}
						icon={faCheckCircle}
                        required
					/>
					<ErrorLegend>Lorem ipsum dolot sit amet</ErrorLegend>
				</div>    
                <div className="form-container">
					{/* <Label className="form-label">
						<FormattedMessage
							id="register.formLabel.nickname"
							defaultMessage="Nickname"
						/>
					</Label> */}
					<Input
						type="text"
                        name="nickname"
						label={nicknameFormmatedMessage}                   
                        required
						placeholder="nickname"
						value={nickname}
						onChange={handleChange}
					/>
					<ErrorLegend>Lorem ipsum dolot sit amet</ErrorLegend>
				</div>
                <div className="form-container">
					<Label className="form-label">
						<FormattedMessage
							id="register.formLabel.email"
							defaultMessage="Email"
						/>
					</Label>
                    <Input              
                        label="email"
                        name="email"
                        className="form-control"                    
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleChange}
					/>
					<ErrorLegend>Lorem ipsum dolot sit amet</ErrorLegend>

				</div>
		
				<div className="form-container">
					<Label className="form-label">
						<FormattedMessage
							id="register.formLabel.pass"
							defaultMessage="Password"
						/>
					</Label>
					<Input
						type="password"
						label="password"
                        name="password"
                        required
						placeholder="********"
						className="form-control"
						value={password}
						onChange={handleChange}
					/>
					<ErrorLegend>Lorem ipsum dolot sit amet</ErrorLegend>
				</div>



			<button
				className="btn btn-primary"
			    type="submit">
                    <FormattedMessage
                        id="register.form.button"
                        defaultMessage="Register"
                    />
			</button>
        </div>
		</Form>
	) 
}

export default RegisterForm;