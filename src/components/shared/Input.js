import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';
import { GroupInput, InputC, ValidationIcon, Label } from './elements/formElements';

import './Input.css';

function Input({ className, label, autoFocus, isRequired, icon,  ...props }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if(autoFocus) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  return (
    <div
      className={classNames(
        'formField',
        { 'formField--focused': false },
        className
      )}
    >
      <GroupInput>   
      <Label className="form-label">
						{label}
					</Label>          
        <InputC          
          autoComplete="off"
          ref={inputRef}
          required = {isRequired? 'required': ''}
          {...props} 
        ></InputC>
        <ValidationIcon icon={icon}/>      
      </GroupInput>
    </div>
  );
}

Input.propTypes = {
  className: pT.string,  
  autoFocus: pT.bool,
  icon: pT.string.isRequired
  
}

Input.defaultProps = {
  autoFocus: false,
  isRequired: false
}


export default Input;
