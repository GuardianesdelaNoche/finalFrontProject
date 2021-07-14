import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';
import { GroupInput, InputC, ValidationIcon, Label,  ErrorLegend } from '../elements/formElements';

import './Input.css';

function Input({ className, label, autoFocus, isRequired, icon, id, errorLegend, regularExpression, value,  ...props }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if(autoFocus) {
      inputRef.current.focus()
    }
  }, [autoFocus])
  let isValid = false;
  const validation = () => {
      if(regularExpression) {
        console.log(value);
        console.log(regularExpression);
        if(regularExpression.test(value)) {
          isValid = true;
          
        }else
        {
          isValid = false;
        }
        console.log("es valido", isValid);
      }
  }

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
          onKeyUp={validation}
          onBlur={validation}
          isValid
          value={value}
          
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
  icon: pT.object.isRequired,
  errorLegend:pT.string.isRequired,

  id: pT.string.isRequired
  
}

Input.defaultProps = {
  autoFocus: false,
  isRequired: false
}


export default Input;
