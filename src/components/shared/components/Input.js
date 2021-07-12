import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';
import { GroupInput, InputC, ValidationIcon, Label,  ErrorLegend } from '../elements/formElements';

import './Input.css';

function Input({ className, label, autoFocus, isRequired, icon, id, errorLegend,   ...props }) {
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
      <Label htmlFor={id} >
						{label}
					</Label>          
        <InputC          
          autoComplete="off"
          id={id}
          ref={inputRef}
          required = {isRequired? 'required': ''}
          {...props} 
        ></InputC>
        <ValidationIcon icon={icon}/>      
        <ErrorLegend>{errorLegend}</ErrorLegend>
      </GroupInput>
    </div>
  );
}

Input.propTypes = {
  className: pT.string,  
  autoFocus: pT.bool,
  icon: pT.string.isRequired,
  legend:pT.string.isRequired,

  id: pT.string.isRequired
  
}

Input.defaultProps = {
  autoFocus: false,
  isRequired: false
}


export default Input;
