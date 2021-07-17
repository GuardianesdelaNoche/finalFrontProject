import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from '../../../store/actions/ui';
import { loginAction } from '../../../store/actions/auth';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert } from 'react-bootstrap';
import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import RememberPassForm from './RecoverPassForm';
import { useJwt } from 'react-jwt';
import './RecoverPass.css';


function RecoverPassPage ({match}) {

    const dispatch = useDispatch();

    const { loading, error } = useSelector(getUi);
    const token = match.params.token;
    const { decodedToken, isExpired } = useJwt(token);
        
        if(isExpired) {
            console.log("el token ha expirado");
        }
    
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
                        id="recoverPass.title"
                        defaultMessage="New Password"
                    />
                </h1>                
              {loading && <Spinner animation="border" />} 
                <RememberPassForm onSubmit={handleSubmit} />

                {error && (	
                    <Alert className="alertLogin" onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.message}
                        </p>
                    </Alert>
                )}                 
            </main>           
        </div>
    )
}

export default RecoverPassPage;