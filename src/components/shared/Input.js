import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';

import './Input.css';


function Input({ className, label, autoFocus, isRequired,  ...props }) {
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
      <div className="formField-input">      
        <span>{label}:</span>
        <input
          className="css-yk16xz-control"
          autoComplete="off"
          ref={inputRef}
          required = {isRequired? 'required': ''}
          {...props}
          
          
        ></input>
      
      </div>
    </div>
  );
}

Input.propTypes = {
  className: pT.string,
  label: pT.string.isRequired,
  autoFocus: pT.bool,
  
}

Input.defaultProps = {
  autoFocus: false,
  isRequired: false
}


export default Input;
