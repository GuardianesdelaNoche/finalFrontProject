import React from 'react';
import Select from 'react-select';
import pT from 'prop-types';

const SelectIndoor = ({onChange, label, isRequired, defaultValue}) => {
    const optionsItems = [
         { value: '', label: '--- Sin valor ---' , name:'indoor'},
         { value: true, label: 'Interior' , name:'indoor'},
         { value: false, label: 'Al aire libre', name:'indoor' },
      ];
    
    return (
        <div className="formField-select">
           <span>{label}</span>        
            <Select
                name="sale"
                defaultValue={defaultValue === true ? optionsItems[1]: optionsItems[2] }
                options={optionsItems}
                onChange={onChange}
                required={isRequired?'required':''}
            />        
        </div>
    );
};

SelectIndoor.propTypes = {
    onChange: pT.func,
    label: pT.string.isRequired,   
  }
  
  SelectIndoor.defaultProps = {    
    isRequired: false
  }

export default SelectIndoor;