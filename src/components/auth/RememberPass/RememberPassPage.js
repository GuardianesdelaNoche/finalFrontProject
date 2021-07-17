import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction } from '../../../store/actions/ui';
import { loginAction } from '../../../store/actions/auth';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert } from 'react-bootstrap';
import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import RememberPassForm from './RememberPassForm';
import './RememberPass.css'



function RememberPassPage () {

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
                        id="rememberPass.title"
                        defaultMessage="Can not you login?"
                    />
                </h1>
                <p className="text-muted">
                    <FormattedMessage
                        id="rememberPass.recoverMessage"
                        defaultMessage="We will send you a recover link to "
                    />
                </p>
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

export default RememberPassPage;