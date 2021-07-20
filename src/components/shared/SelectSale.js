import React from 'react';
import Select from 'react-select';
import pT from 'prop-types';

const SelectSale = ({onChange, label, isRequired}) => {
    const optionsItems = [
        { value: '', label: '--- Sin valor ---' , name:'sale'},
        { value: true, label: 'En Venta' , name:'sale'},
        { value: false, label: 'Se Busca', name:'sale' },
      ];
    
    return (
        <div className="formField-select">
           <span>{label}</span>        
            <Select
                name="sale"
                options={optionsItems}
                onChange={onChange}
                required={isRequired?'required':''}
            />        
        </div>
    );
};

SelectSale.propTypes = {
    onChange: pT.func,
    label: pT.string.isRequired,   
  }
  
  SelectSale.defaultProps = {    
    isRequired: false
  }

export default SelectSale;