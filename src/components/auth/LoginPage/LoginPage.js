import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from '../../../store/actions/ui';
import { loginAction } from '../../../store/actions/auth';
import { getUi } from '../../../store/selectors/ui'; 
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import LoginForm from './LoginForm';
import './login.css'



function LoginPage () {

    const dispatch = useDispatch();

    const { loading, error } = useSelector(getUi);

    const handleSubmit = (credentials)=>{
        dispatch(loginAction(credentials))
    }
    const handleResetError = ()=>{
        dispatch(resetErrorAction())
    }
    return (
        <div className="main-content">
            <main className="form-signin">
                <h1 className="h1 title-signin">
                    <FormattedMessage
                        id="login.title"
                        defaultMessage="Welcome to Start"
                    />
                </h1>
              {loading && <Spinner animation="border" />} 
                <LoginForm onSubmit={handleSubmit} />

                {error && (	
                    <Alert className="alertLogin" onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )} 
                <Link to="/remember" className="form-label text-primary">
                    <FormattedMessage
                        id="login.remember"
                        defaultMessage="Forgot your password?"
                    />
                    </Link>
                <p className="text-muted">
                    <FormattedMessage
                        id="login.newAcount"
                        defaultMessage="New here? "
                    />
                    <Link to="/register" className="form-label text-primary">
                        <FormattedMessage
                            id="login.createAcount"
                            defaultMessage="Create Account"
                        />
                </Link></p>


                
            </main>           
        </div>
    )
}

export default LoginPage;