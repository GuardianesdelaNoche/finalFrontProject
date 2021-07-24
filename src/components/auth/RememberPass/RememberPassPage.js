import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert } from 'react-bootstrap';
import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import RememberPassForm from './RememberPassForm';
import { setRememberPass } from '../../../api/rememberPass';
import { useIntl } from 'react-intl';
import { SuccessMessage } from '../../shared/elements/formElements';
import './RememberPass.css';



function RememberPassPage ({tokenExpired}) {
    const intl = useIntl();  
    const dispatch = useDispatch();
    const [ dataSaved, setDataSaved] = React.useState(false);
    const { loading, error } = useSelector(getUi);

    const handleSubmit = async (rememberPassData)=>{
        try {
            dispatch(setLoadingAction);
            dispatch(resetErrorAction());
            await setRememberPass(rememberPassData);
            setDataSaved(true);
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

                   {tokenExpired && (	
                    <Alert className="alertLogin" onClick={handleResetError} variant="danger">
                        <p className="mb-0">
                            {intl.formatMessage({ id: 'rememberPass.page.tokenexpired'})}
                        </p>
                    </Alert>
                )}     

                
			{dataSaved && <SuccessMessage>
				<p className="mb-0">				
					{intl.formatMessage({ id: 'rememberPass.validate.successmessage'})}
				</p>
			</SuccessMessage>}

            </main>           
        </div>
    )
}

export default RememberPassPage;