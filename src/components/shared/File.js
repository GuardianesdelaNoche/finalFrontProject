import React, { useRef } from 'react';
import pT from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { resetErrorAction } from '../../store/actions/ui';

const File = ({onFileSelectSuccess, onFileSelectError}) => {
    const dispatch = useDispatch();
   
    const fileRef = useRef();
    const intl = useIntl();

    const handleFileInput = (e) => {                
        const file = e.target.files[0];
        dispatch(resetErrorAction())
        if(file !== undefined){
            if(file.size > 1024000) {       
                
                onFileSelectError ({ error: intl.formatMessage({ id: 'file.formLabel.error' })})
            }     
            else{
                onFileSelectSuccess(file);            
            }  
        }
        
    };
   
   
    return (
        <div>
           <div className="pt-4">
                <div className="rounded border p-10"  ref={fileRef} >
                    <div className="form-group row-file-box">
                        <label className="col-lg-2 col-form-label text-lg-right">
                            <FormattedMessage
                                id="file.title"
                                defaultMessage="Upload Files:"
                            /></label>
                 

                        <div className="col-lg-10">
                            <div className="dropzone dropzone-queue mb-2"  >
                                
                                <div className="dropzone-panel mb-lg-0 mb-2">
                                    <input type="file" className="hidden" id="btn_enviar" onChange={handleFileInput}/>
                                    <span className="form-text text-description f-sm">
                                        <FormattedMessage
                                            id="file.description"
                                            defaultMessage="Max file size is 1MB and max number of files is 1"
                                        />
                                        </span>
                                </div>
                            </div>
                    </div>

                    </div>
                </div>
            </div> 

                            
        </div>
    );
};

File.propTypes = {
    onFileSelectSuccess: pT.func.isRequired,
}
export default File;