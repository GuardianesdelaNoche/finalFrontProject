import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui'; 

import { Alert, Spinner} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import RegisterForm from './RegisterForm';


function RegisterPage () {

    const dispatch = useDispatch();

    const { loading, error } = useSelector(getUi);

    const handleSubmit = (credentials)=>{
       // dispatch(loginRegister(credentials))
    }
    const handleResetError = ()=>{
       // dispatch(resetErrorAction())
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

                {error && (	
                    <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}
             
            </main>           
        </div>
    )
}

export default RegisterPage;


