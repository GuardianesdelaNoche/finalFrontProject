import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { setRegister } from '../../../api/register';
import { getUi } from '../../../store/selectors/ui'; 

import { Alert, Spinner} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import RegisterForm from './RegisterForm';
import './register.css';

function RegisterPage ({history}) {

    const dispatch = useDispatch();

    const { loading, error } = useSelector(getUi);


    const handleSubmit = async (registerData)=>{
        try {
            handleResetError();
            dispatch(setLoadingAction());
            const register = await setRegister(registerData);
            dispatch(resetLoadingAction);
            history.push("/login");

            console.log("pasa despues consuluta", register);        
        } catch (error) {  
            
            dispatch(setErrorAction(error.errors));
        } finally 
        {
            dispatch(resetLoadingAction);
        }

    }
    const handleResetError = ()=>{
        dispatch(resetErrorAction())
    }

  
    return (
        <div className="main-content">
            <main className="form-signin">
                <h1 className="h1 title-signin">
                    <FormattedMessage
                        id="register.title"
                        defaultMessage="Register"
                    />
                </h1>
                {loading && <Spinner animation="border" />}
                <RegisterForm onSubmit={handleSubmit} />

                {error && 
                    <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error[0].msg}
                        </p>
                    </Alert>
            
                    
                }
             
            </main>           
        </div>
    )
}

export default RegisterPage;


