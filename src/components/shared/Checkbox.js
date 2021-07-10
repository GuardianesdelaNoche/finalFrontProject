import React from 'react';
import pT from 'prop-types';

import './Checkbox.css';


const Checkbox = ({  children, onChange, value, ...props}) => {


    const handleChange = e =>{
    
      const { checked } = e.target;
      onChange({
        target:{
          value:checked
        }
      })
    }
    
    return(
      <div className="form-check form-check-custom form-check-solid">
        <input className="form-check-input" type="checkbox" onChange={handleChange}{...props} />
        <label className="form-check-label" > { children } </label>
      </div>
    );
};

Checkbox.propTypes = {
 label: pT.string,
}

export default Checkbox;