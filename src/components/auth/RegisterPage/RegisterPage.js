import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { setRegister } from '../../../api/register';
import { getUi } from '../../../store/selectors/ui'; 
import { Link } from 'react-router-dom';
import { Alert, Spinner} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import RegisterForm from './RegisterForm';
import './register.css';

function RegisterPage () {

    const dispatch = useDispatch();

    const { loading, error } = useSelector(getUi);

    const handleSubmit = (registerData)=>{
        try {
            dispatch(setLoadingAction);
            setRegister(registerData)
        } catch (error) {
            dispatch(setErrorAction(error));
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

                {error && (	
                    <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}

                <p className="text-muted">
                  
                    <FormattedMessage
                        id="register.account.message"
                        defaultMessage="Already have an account?"
                    />
                    <Link to="/login" className="form-label text-primary ml-2">
                        <FormattedMessage
                            id="register.account.link"
                            defaultMessage="Entrar"
                        />
            
                    </Link></p>
             
            </main>           
        </div>
    )
}

export default RegisterPage;


