import pT from 'prop-types';

import './Checkbox.css';


const Checkbox = ({label, ...props}) => {
    return(
      <div className="rowCheckbox">
      <input type="checkbox" {...props} />
      <label className="labelCheckbox" > { label } </label>
      </div>
    );
};

Checkbox.propTypes = {
 label: pT.string.isRequired,
}

export default Checkbox;