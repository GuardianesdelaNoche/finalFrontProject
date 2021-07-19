import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';

import './Input.css';


<<<<<<< Updated upstream
function Input({ className, type, name, autoFocus, isRequired,placeholder, ...props }) {
=======
function Input({ className, autoFocus, isRequired,placeholder, ...props }) {
>>>>>>> Stashed changes
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if(autoFocus) {
      inputRef.current.focus()
    }
<<<<<<< Updated upstream

  }, [autoFocus])

  return (
    <div className={classNames('formField',{ 'formField--focused': false },className)}>
      <div className="formField-input">
        <input
          type={type}
          name={name}
=======
    
  }, [autoFocus])

  return (
    <div
      className={classNames(
        'formField',
        { 'formField--focused': false },
        className
      )}
    >
        <input
          type="password"
          name="password"
>>>>>>> Stashed changes
          autoComplete="off"
          placeholder={placeholder}
          className="form-control"
          ref={inputRef}
          required={isRequired ? 'required' : ''}
          {...props}
        />
    </div>
    </div>
  )};


Input.propTypes = {
  className: pT.string,
  label: pT.string,
  autoFocus: pT.bool,
  
}

Input.defaultProps = {
  autoFocus: false,
  isRequired: false
}


export default Input;