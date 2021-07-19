import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< Updated upstream
import { loginAction } from '../../../store/actions/auth';
import { getUi } from '../../../store/selectors/ui'; 
import { Link } from 'react-router-dom';

import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import LoginForm from './LoginForm';

=======
import { resetErrorAction } from '../../../store/actions/ui';
import { loginAction } from '../../../store/actions/auth';
import { getUi } from '../../../store/selectors/ui'; 

import { Link } from 'react-router-dom';
import { Alert, Spinner} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import LoginForm from './LoginForm';
>>>>>>> Stashed changes
import './login.css'


function LoginPage () {

    const dispatch = useDispatch();

<<<<<<< Updated upstream
    const { loading } = useSelector(getUi);
=======
    const { loading, error } = useSelector(getUi);
>>>>>>> Stashed changes

    const handleSubmit = (credentials)=>{
        dispatch(loginAction(credentials))
    }
<<<<<<< Updated upstream
   
=======
    const handleResetError = ()=>{
        dispatch(resetErrorAction())
    }
>>>>>>> Stashed changes
    return (
        <div className="main-content">
            <main className="form-signin">
                <h1 className="h1 title-signin">
                    <FormattedMessage
                        id="login.title"
                        defaultMessage="Welcome to Start"
                    />
                </h1>
<<<<<<< Updated upstream

                {loading && <Spinner animation="border" />} 
                <LoginForm onSubmit={handleSubmit} />

               
=======
                {loading && <Spinner animation="border" />}
                <LoginForm onSubmit={handleSubmit} />

                {error && (	
                    <Alert onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Link to="/register" className="form-label text-primary ml-2">
=======
                    <Link to="/register" className="form-label text-primary">
>>>>>>> Stashed changes
                        <FormattedMessage
                            id="login.createAcount"
                            defaultMessage="Create Account"
                        />
                </Link></p>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
            </main>           
        </div>
    )
}

export default LoginPage;