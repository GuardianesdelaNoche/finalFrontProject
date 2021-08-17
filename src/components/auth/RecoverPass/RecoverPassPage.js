import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert } from 'react-bootstrap';
import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import RememberPassForm from './RecoverPassForm';
import { useJwt } from 'react-jwt';
import { setRecover } from '../../../api/recoverPass';
import { SuccessMessage } from '../../shared/elements/formElements';
import { useIntl } from 'react-intl';
import './RecoverPass.css';


function RecoverPassPage ({match, history}) {

    const dispatch = useDispatch();
    const [ dataSend, setDataSend] = React.useState(false);
    const intl = useIntl();  
    const { loading, error } = useSelector(getUi);
    const token = match.params.token;
    const { isExpired } = useJwt(token);
        
    if(isExpired) {         
        
        history.push("/rememberPassword/tokenExpired")

    }

    const handleSubmit = async (recoverData)=>{
        try {
            dispatch(setLoadingAction);
            await setRecover(recoverData);
            setDataSend(true);
            history.push('/login');
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
                        id="recoverPass.title"
                        defaultMessage="New Password"
                    />
                </h1>                
              {loading && <Spinner animation="border" />} 
                <RememberPassForm onSubmit={handleSubmit} token={token} />

                {error && (	
                    <Alert className="alertLogin" onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {error.error}
                        </p>
                    </Alert>
                )} 
                {dataSend && <SuccessMessage>
				<p>				
					{intl.formatMessage({ id: 'register.validate.successmessage'})}
				</p>
			</SuccessMessage>}
                
            </main>           
        </div>
    )
}

export default RecoverPassPage;