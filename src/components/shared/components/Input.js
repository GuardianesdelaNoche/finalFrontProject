import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';
import { GroupInput, InputC, ValidationIcon, Label,  ErrorLegend } from '../elements/formElements';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './Input.css';

function Input({ className, label, autoFocus, isRequired, icon, id, errorLegend, regularExpression, value, valueToCheck,  ...props }) {
  const inputRef = React.useRef(null);
  const [isValueValid, setIsValid] = React.useState('null');

  React.useEffect(() => {
    if(autoFocus) {
      inputRef.current.focus()
    }
  }, [autoFocus])
  


  const validation = () => {
      if(regularExpression) {        
        if(regularExpression.test(value)) {          
          setIsValid('true');          
        }else
        {
          setIsValid('false');
        }        
      }
      if(valueToCheck) {
        if(value){
          if(value === valueToCheck) {
            setIsValid('true');
          }else
          {
            setIsValid('false');
          }
        }
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
      <Label htmlFor={id}  isValueValid={isValueValid}>
						{label}
					</Label>          
        <InputC          
          autoComplete="off"
          id={id}
          ref={inputRef}
          onKeyUp={validation}
          onBlur={validation}          
          value={value}
          isValueValid= {isValueValid}          
          required = {isRequired? 'required': ''}
          {...props} 
        ></InputC>
        
        <ValidationIcon 
            icon={isValueValid === 'true' ? faCheckCircle : faTimesCircle} 
            isvaluevalid= {isValueValid} 
            >  </ValidationIcon>    
        <ErrorLegend isValueValid={isValueValid}>{errorLegend}</ErrorLegend>
      </GroupInput>
    </div>
  );
}

Input.propTypes = {
  className: pT.string,  
  autoFocus: pT.bool,
  errorLegend:pT.string.isRequired,

  id: pT.string.isRequired
  
}

Input.defaultProps = {
  autoFocus: false,
  isRequired: false
}


export default Input;
