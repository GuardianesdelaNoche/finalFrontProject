import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction,  setLoadingAction, setErrorAction, resetLoadingAction} from '../../../store/actions/ui';
import { getUi } from '../../../store/selectors/ui'; 
import { Alert } from 'react-bootstrap';
import  Spinner  from '../../shared/Spinner';
import { FormattedMessage } from 'react-intl';
import UpdateMemberForm from './UpdateMemberForm';
import { setUpdateMember, getMemberData } from '../../../api/member';
import './UpdateMember.css';

function UpdateMemberPage ({match, history}) {

    const dispatch = useDispatch();

    const { loading, error } = useSelector(getUi);
    let member={};

    useEffect(()=>{
        async function executeGetMember() {
            try {
                dispatch(setLoadingAction);
                member = await getMemberData({token: match.params.token});                
                
            } catch (error) {
                dispatch(setErrorAction(error));
            } finally 
            {
                dispatch(resetLoadingAction);
            }
        }
        executeGetMember();
    });

    const handleSubmit = async (updateMemberData)=>{
        try {
            dispatch(setLoadingAction);
            await setUpdateMember(updateMemberData);
            //history.push('/login');
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
                        id="updatemember.title"
                        defaultMessage="Update my data"
                    />
                </h1>                
              {loading && <Spinner animation="border" />} 
                <UpdateMemberForm onSubmit={handleSubmit} data={member}/>

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
export default UpdateMemberPage;