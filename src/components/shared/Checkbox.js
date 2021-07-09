import pT from 'prop-types';

import './Checkbox.css';


const Checkbox = ({children, ...props}) => {
    return(
      <div className="form-check form-check-custom form-check-solid">
        <input className="form-check-input" type="checkbox" {...props} />
        <label className="form-check-label" > { children } </label>
      </div>
    );
};

Checkbox.propTypes = {
 label: pT.string,
}

export default Checkbox;