import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';

import './Input.css';


function Input({ className, autoFocus, isRequired,placeholder, ...props }) {
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
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder={placeholder}
          className="form-control"
          ref={inputRef}
          required={isRequired ? 'required' : ''}
          {...props}
        />
    </div>
  );
}

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
