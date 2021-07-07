import './DropdownHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import pT from 'prop-types';

const DropdownHeader = ({onClick, title}) => {
    return (
        <div 
            className='formField-dropdown'
            onClick={onClick}   
        >                   
            <p className="formField-desc">{title}</p>
            <div className="iconBox"> <FontAwesomeIcon icon ={faSearch} /></div>
        </div>
        
    );
}

DropdownHeader.propTypes = {
    onClick: pT.func.isRequired,
    title: pT.string.isRequired
}

export default DropdownHeader;